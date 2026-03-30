"use client";

import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════════
   WebGL Stable-Fluids Simulation — Reveal Effect
   Based on Jos Stam's "Stable Fluids" algorithm.
   Ref: PavelDoGreat/WebGL-Fluid-Simulation
   ═══════════════════════════════════════════════════════════════════ */

// ─── Configuration ───────────────────────────────────────────────
const SIM_RES = 128;
const DYE_RES = 1024;
const PRESSURE_ITERS = 20;
const CURL_STRENGTH = 15;
const SPLAT_RADIUS = 0.25; // passed as SPLAT_RADIUS/100 to shader
const SPLAT_FORCE = 3000; // ~50% of typical 6000
const VEL_DISSIPATION = 0.3; // used as 1/(1+d*dt), lower = less decay
const DYE_DISSIPATION = 0.0; // 0 = no decay, permanent reveal
const PRESSURE_DISSIPATION = 0.8;
const DYE_AMOUNT = 0.6;
const IDLE_FORCE = 80;

// ─── Shader Sources ──────────────────────────────────────────────

const baseVS = `
precision highp float;
attribute vec2 aPosition;
varying vec2 vUv;
void main () {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const splatFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec2 point;
uniform vec3 color;
uniform float radius;
void main () {
  vec2 p = vUv - point;
  p.x *= aspectRatio;
  vec3 splat = exp(-dot(p, p) / radius) * color;
  vec3 base = texture2D(uTarget, vUv).xyz;
  gl_FragColor = vec4(base + splat, 1.0);
}
`;

const advectionFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;
void main () {
  vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
  vec4 result = texture2D(uSource, coord);
  float decay = 1.0 + dissipation * dt;
  gl_FragColor = result / decay;
}
`;

const divergenceFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uVelocity, vUv - vec2(texelSize.x, 0.0)).x;
  float R = texture2D(uVelocity, vUv + vec2(texelSize.x, 0.0)).x;
  float B = texture2D(uVelocity, vUv - vec2(0.0, texelSize.y)).y;
  float T = texture2D(uVelocity, vUv + vec2(0.0, texelSize.y)).y;
  float div = 0.5 * (R - L + T - B);
  gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}
`;

const curlFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uVelocity, vUv - vec2(texelSize.x, 0.0)).y;
  float R = texture2D(uVelocity, vUv + vec2(texelSize.x, 0.0)).y;
  float B = texture2D(uVelocity, vUv - vec2(0.0, texelSize.y)).x;
  float T = texture2D(uVelocity, vUv + vec2(0.0, texelSize.y)).x;
  float vorticity = R - L - T + B;
  gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}
`;

const vorticityFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform vec2 texelSize;
uniform float curl;
uniform float dt;
void main () {
  float T = texture2D(uCurl, vUv + vec2(0.0, texelSize.y)).x;
  float B = texture2D(uCurl, vUv - vec2(0.0, texelSize.y)).x;
  float R = texture2D(uCurl, vUv + vec2(texelSize.x, 0.0)).x;
  float L = texture2D(uCurl, vUv - vec2(texelSize.x, 0.0)).x;
  float C = texture2D(uCurl, vUv).x;
  vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
  force /= length(force) + 0.0001;
  force *= curl * C;
  force.y *= -1.0;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity += force * dt;
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`;

const pressureFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uPressure, vUv - vec2(texelSize.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(texelSize.x, 0.0)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, texelSize.y)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, texelSize.y)).x;
  float D = texture2D(uDivergence, vUv).x;
  float pressure = (L + R + B + T - D) * 0.25;
  gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`;

const gradSubFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 texelSize;
void main () {
  float L = texture2D(uPressure, vUv - vec2(texelSize.x, 0.0)).x;
  float R = texture2D(uPressure, vUv + vec2(texelSize.x, 0.0)).x;
  float B = texture2D(uPressure, vUv - vec2(0.0, texelSize.y)).x;
  float T = texture2D(uPressure, vUv + vec2(0.0, texelSize.y)).x;
  vec2 velocity = texture2D(uVelocity, vUv).xy;
  velocity -= vec2(R - L, T - B);
  gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`;

const clearFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;
void main () {
  gl_FragColor = value * texture2D(uTexture, vUv);
}
`;

const displayFS = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uDye;
void main () {
  float reveal = clamp(texture2D(uDye, vUv).r, 0.0, 1.0);
  float alpha = 1.0 - reveal;
  vec3 cream = vec3(0.9608, 0.9451, 0.9216);
  gl_FragColor = vec4(cream * alpha, alpha);
}
`;

// ─── Types ───────────────────────────────────────────────────────

interface FBO {
  texture: WebGLTexture;
  fbo: WebGLFramebuffer;
  width: number;
  height: number;
  attach(id: number): number;
}

interface DoubleFBO {
  width: number;
  height: number;
  texelSizeX: number;
  texelSizeY: number;
  read: FBO;
  write: FBO;
  swap(): void;
}

interface Program {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation>;
  bind(): void;
}

// ─── Component ───────────────────────────────────────────────────

export default function FluidReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Canvas sizing ──
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;

    // ── WebGL2 context ──
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      antialias: false,
    });
    if (!gl) return;

    gl.getExtension("EXT_color_buffer_float");

    // ── Texture format detection ──
    let texInternal: number;
    let texType: number;
    const texFormat = gl.RGBA;
    const texFilter = gl.LINEAR;

    if (checkFBOSupport(gl, gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT)) {
      texInternal = gl.RGBA16F;
      texType = gl.HALF_FLOAT;
    } else {
      // Fallback — won't support negative velocity well, but still runs
      texInternal = gl.RGBA8;
      texType = gl.UNSIGNED_BYTE;
    }

    // ── Compile shaders ──
    function compileShader(type: number, source: string): WebGLShader {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      return shader;
    }

    function createProgram(vs: string, fs: string): Program {
      const vertShader = compileShader(gl!.VERTEX_SHADER, vs);
      const fragShader = compileShader(gl!.FRAGMENT_SHADER, fs);
      const prog = gl!.createProgram()!;
      gl!.attachShader(prog, vertShader);
      gl!.attachShader(prog, fragShader);
      gl!.linkProgram(prog);

      const uniforms: Record<string, WebGLUniformLocation> = {};
      const count = gl!.getProgramParameter(prog, gl!.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const info = gl!.getActiveUniform(prog, i)!;
        const loc = gl!.getUniformLocation(prog, info.name);
        if (loc) uniforms[info.name] = loc;
      }

      return {
        program: prog,
        uniforms,
        bind: () => gl!.useProgram(prog),
      };
    }

    const splatProg = createProgram(baseVS, splatFS);
    const advectionProg = createProgram(baseVS, advectionFS);
    const divergenceProg = createProgram(baseVS, divergenceFS);
    const curlProg = createProgram(baseVS, curlFS);
    const vorticityProg = createProgram(baseVS, vorticityFS);
    const pressureProg = createProgram(baseVS, pressureFS);
    const gradSubProg = createProgram(baseVS, gradSubFS);
    const clearProg = createProgram(baseVS, clearFS);
    const displayProg = createProgram(baseVS, displayFS);

    // ── Fullscreen quad ──
    const quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
      gl.STATIC_DRAW
    );
    const idxBuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array([0, 1, 2, 0, 2, 3]),
      gl.STATIC_DRAW
    );
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    function blit(target: FBO | null) {
      if (target) {
        gl!.viewport(0, 0, target.width, target.height);
        gl!.bindFramebuffer(gl!.FRAMEBUFFER, target.fbo);
      } else {
        gl!.viewport(0, 0, gl!.drawingBufferWidth, gl!.drawingBufferHeight);
        gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      }
      gl!.drawElements(gl!.TRIANGLES, 6, gl!.UNSIGNED_SHORT, 0);
    }

    // ── Framebuffers ──
    function createFBO(w: number, h: number): FBO {
      const tex = gl!.createTexture()!;
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, texFilter);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, texFilter);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      gl!.texImage2D(
        gl!.TEXTURE_2D,
        0,
        texInternal,
        w,
        h,
        0,
        texFormat,
        texType,
        null
      );
      const fbo = gl!.createFramebuffer()!;
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
      gl!.framebufferTexture2D(
        gl!.FRAMEBUFFER,
        gl!.COLOR_ATTACHMENT0,
        gl!.TEXTURE_2D,
        tex,
        0
      );
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);

      return {
        texture: tex,
        fbo,
        width: w,
        height: h,
        attach(id: number) {
          gl!.activeTexture(gl!.TEXTURE0 + id);
          gl!.bindTexture(gl!.TEXTURE_2D, tex);
          return id;
        },
      };
    }

    function createDoubleFBO(w: number, h: number): DoubleFBO {
      const fbo1 = createFBO(w, h);
      const fbo2 = createFBO(w, h);
      const result: DoubleFBO = {
        width: w,
        height: h,
        texelSizeX: 1.0 / w,
        texelSizeY: 1.0 / h,
        read: fbo1,
        write: fbo2,
        swap() {
          const t = result.read;
          result.read = result.write;
          result.write = t;
        },
      };
      return result;
    }

    // Compute sim grid dimensions maintaining aspect ratio
    const aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
    const simW = Math.round(SIM_RES * aspectRatio);
    const simH = SIM_RES;
    const dyeW = Math.round(DYE_RES * aspectRatio);
    const dyeH = DYE_RES;

    const velocity = createDoubleFBO(simW, simH);
    const pressure = createDoubleFBO(simW, simH);
    const divergence = createFBO(simW, simH);
    const curl = createFBO(simW, simH);
    const dye = createDoubleFBO(dyeW, dyeH);

    // ── Input ──
    const pointer = {
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      active: false,
      lastMoveTime: 0,
    };

    const onMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX / canvas.clientWidth;
      pointer.y = 1.0 - e.clientY / canvas.clientHeight;
      pointer.active = true;
      pointer.lastMoveTime = performance.now();
    };

    const onMouseEnter = () => {
      pointer.active = true;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);

    // ── Splat helper ──
    function correctRadius(r: number): number {
      const ar = gl!.drawingBufferWidth / gl!.drawingBufferHeight;
      return ar > 1 ? r * ar : r;
    }

    function addSplat(
      x: number,
      y: number,
      dx: number,
      dy: number,
      dyeAmt: number
    ) {
      const ar = gl!.drawingBufferWidth / gl!.drawingBufferHeight;
      const rad = correctRadius(SPLAT_RADIUS / 100.0);

      // Velocity splat
      splatProg.bind();
      gl!.uniform1i(splatProg.uniforms.uTarget, velocity.read.attach(0));
      gl!.uniform1f(splatProg.uniforms.aspectRatio, ar);
      gl!.uniform2f(splatProg.uniforms.point, x, y);
      gl!.uniform3f(splatProg.uniforms.color, dx, dy, 0.0);
      gl!.uniform1f(splatProg.uniforms.radius, rad);
      blit(velocity.write);
      velocity.swap();

      // Dye splat
      gl!.uniform1i(splatProg.uniforms.uTarget, dye.read.attach(0));
      gl!.uniform3f(splatProg.uniforms.color, dyeAmt, dyeAmt, dyeAmt);
      blit(dye.write);
      dye.swap();
    }

    // ── Simulation step ──
    function step(dt: number) {
      gl!.disable(gl!.BLEND);

      // Curl
      curlProg.bind();
      gl!.uniform2f(
        curlProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl!.uniform1i(curlProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl);

      // Vorticity confinement
      vorticityProg.bind();
      gl!.uniform2f(
        vorticityProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl!.uniform1i(
        vorticityProg.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl!.uniform1i(vorticityProg.uniforms.uCurl, curl.attach(1));
      gl!.uniform1f(vorticityProg.uniforms.curl, CURL_STRENGTH);
      gl!.uniform1f(vorticityProg.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      // Divergence
      divergenceProg.bind();
      gl!.uniform2f(
        divergenceProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl!.uniform1i(
        divergenceProg.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      blit(divergence);

      // Clear pressure (dissipate)
      clearProg.bind();
      gl!.uniform1i(clearProg.uniforms.uTexture, pressure.read.attach(0));
      gl!.uniform1f(clearProg.uniforms.value, PRESSURE_DISSIPATION);
      blit(pressure.write);
      pressure.swap();

      // Pressure solve (Jacobi iterations)
      pressureProg.bind();
      gl!.uniform2f(
        pressureProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl!.uniform1i(
        pressureProg.uniforms.uDivergence,
        divergence.attach(0)
      );
      for (let i = 0; i < PRESSURE_ITERS; i++) {
        gl!.uniform1i(
          pressureProg.uniforms.uPressure,
          pressure.read.attach(1)
        );
        blit(pressure.write);
        pressure.swap();
      }

      // Gradient subtraction
      gradSubProg.bind();
      gl!.uniform2f(
        gradSubProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl!.uniform1i(
        gradSubProg.uniforms.uPressure,
        pressure.read.attach(0)
      );
      gl!.uniform1i(
        gradSubProg.uniforms.uVelocity,
        velocity.read.attach(1)
      );
      blit(velocity.write);
      velocity.swap();

      // Advect velocity
      advectionProg.bind();
      gl!.uniform2f(
        advectionProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY
      );
      gl!.uniform1i(
        advectionProg.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl!.uniform1i(
        advectionProg.uniforms.uSource,
        velocity.read.attach(0)
      );
      gl!.uniform1f(advectionProg.uniforms.dt, dt);
      gl!.uniform1f(
        advectionProg.uniforms.dissipation,
        VEL_DISSIPATION
      );
      blit(velocity.write);
      velocity.swap();

      // Advect dye
      gl!.uniform1i(
        advectionProg.uniforms.uVelocity,
        velocity.read.attach(0)
      );
      gl!.uniform1i(advectionProg.uniforms.uSource, dye.read.attach(1));
      gl!.uniform1f(advectionProg.uniforms.dissipation, DYE_DISSIPATION);
      blit(dye.write);
      dye.swap();
    }

    // ── Display ──
    function render() {
      displayProg.bind();
      gl!.uniform1i(displayProg.uniforms.uDye, dye.read.attach(0));
      blit(null);
    }

    // ── Animation loop ──
    let lastTime = performance.now();
    let rafId: number;
    let frameCount = 0;

    function frame() {
      const now = performance.now();
      let dt = (now - lastTime) / 1000;
      dt = Math.min(dt, 0.016667);
      lastTime = now;
      frameCount++;

      // Apply mouse input
      if (pointer.active) {
        const dx = pointer.x - pointer.prevX;
        const dy = pointer.y - pointer.prevY;

        if (Math.abs(dx) > 0.0001 || Math.abs(dy) > 0.0001) {
          addSplat(
            pointer.x,
            pointer.y,
            dx * SPLAT_FORCE,
            dy * SPLAT_FORCE,
            DYE_AMOUNT
          );
        }

        // Idle motion — gentle swirl when mouse is still
        const timeSinceMove = now - pointer.lastMoveTime;
        if (timeSinceMove > 200 && frameCount % 6 === 0) {
          const t = now * 0.001;
          const angle = t * 0.4;
          addSplat(
            pointer.x + Math.cos(angle) * 0.01,
            pointer.y + Math.sin(angle) * 0.01,
            Math.cos(angle) * IDLE_FORCE,
            Math.sin(angle) * IDLE_FORCE,
            0.008
          );
        }

        pointer.prevX = pointer.x;
        pointer.prevY = pointer.y;
      }

      step(dt);
      render();

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    // ── Resize handler ──
    const onResize = () => {
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

// ─── Utility ─────────────────────────────────────────────────────

function checkFBOSupport(
  gl: WebGL2RenderingContext,
  internalFormat: number,
  format: number,
  type: number
): boolean {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    tex,
    0
  );
  const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  gl.deleteTexture(tex);
  gl.deleteFramebuffer(fbo);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return status === gl.FRAMEBUFFER_COMPLETE;
}
