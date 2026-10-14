'use client';

// A product logo in 3D, popping out of a flat paper sheet. The sheet is a
// normal page element (cream paper, washi tape across the top); only the logo
// is WebGL. Drag to swing the logo around; let go and it springs back with a
// little bounce. It floats above the paper and lifts further on hover. With
// `href`, a tap (a press that barely moves) opens that page; a drag doesn't.

import { Canvas, useFrame } from '@react-three/fiber';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import type { Logo } from '@/content/resume';

// Where the logo rests, and how far a drag may swing it.
const REST = { x: -0.12, y: 0.22 };
const LIMIT = { x: 0.8, y: 1.15 };
// How far (px) a press may travel and still count as a tap.
const TAP_SLOP = 6;

type DragState = {
  active: boolean;
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
  lastT: number;
  rotX: number;
  rotY: number;
  velX: number;
  velY: number;
};

/** Rasterise the logo onto a canvas (crisp SVGs at any zoom), with room
 *  around it. Logos that sit on a white square get their white keyed out.
 *  Also builds a white die-cut "sticker" silhouette of the logo, so it stays
 *  readable where it spills off the paper onto the dark sky. */
function useLogoTexture(logo: Logo) {
  const [result, setResult] = useState<{
    texture: THREE.Texture;
    sticker: THREE.Texture;
    aspect: number;
  } | null>(null);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      const w0 = img.naturalWidth || logo.width;
      const h0 = img.naturalHeight || logo.height;
      const scale = 1024 / Math.max(w0, h0);
      const lw = Math.max(1, Math.round(w0 * scale));
      const lh = Math.max(1, Math.round(h0 * scale));
      const pad = Math.round(Math.max(lw, lh) * 0.04);
      const w = lw + pad * 2;
      const h = lh + pad * 2;

      // The logo itself, centred with padding.
      const art = document.createElement('canvas');
      art.width = w;
      art.height = h;
      const ctx = art.getContext('2d', { willReadFrequently: !!logo.blend });
      if (!ctx) return;
      ctx.drawImage(img, pad, pad, lw, lh);
      if (logo.blend) {
        const data = ctx.getImageData(0, 0, w, h);
        const p = data.data;
        for (let i = 0; i < p.length; i += 4) {
          const m = Math.min(p[i], p[i + 1], p[i + 2]);
          if (m > 235) p[i + 3] = 0;
          else if (m > 205) p[i + 3] = Math.round((p[i + 3] * (235 - m)) / 30);
        }
        ctx.putImageData(data, 0, 0);
      }

      // White silhouette, grown outwards: the sticker border.
      const sil = document.createElement('canvas');
      sil.width = w;
      sil.height = h;
      const sctx = sil.getContext('2d');
      if (!sctx) return;
      const r = pad * 0.8;
      for (let a = 0; a < 16; a++) {
        const t = (a / 16) * Math.PI * 2;
        sctx.drawImage(art, Math.cos(t) * r, Math.sin(t) * r);
      }
      sctx.drawImage(art, 0, 0);
      sctx.globalCompositeOperation = 'source-in';
      sctx.fillStyle = '#ffffff';
      sctx.fillRect(0, 0, w, h);

      const make = (c: HTMLCanvasElement) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.generateMipmaps = true;
        t.minFilter = THREE.LinearMipmapLinearFilter;
        t.magFilter = THREE.LinearFilter;
        t.anisotropy = 8;
        return t;
      };
      setResult({ texture: make(art), sticker: make(sil), aspect: w / h });
    };
    img.src = logo.src;
    return () => {
      cancelled = true;
    };
  }, [logo]);
  return result;
}

/** A soft round shadow, drawn once. */
function useShadowTexture() {
  return useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
    g.addColorStop(0, 'rgba(0,0,0,0.55)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }, []);
}

const LAYERS = 8; // stacked copies behind the logo face = thickness

function LogoScene({
  logo,
  scale,
  drag,
  hover,
  reduced,
}: {
  logo: Logo;
  scale: number;
  drag: React.MutableRefObject<DragState>;
  hover: React.MutableRefObject<boolean>;
  reduced: boolean;
}) {
  const mark = useRef<THREE.Group>(null);
  const shadow = useRef<THREE.Mesh>(null);
  const logoTex = useLogoTexture(logo);
  const shadowTex = useShadowTexture();

  // Bigger than the sheet, so it spills over the paper's edges.
  const size = useMemo(() => {
    const aspect = logoTex?.aspect ?? 1;
    const w = Math.min(1.85, 1.35 * aspect) * scale;
    return { w, h: w / aspect };
  }, [logoTex, scale]);

  useFrame((state, dt) => {
    const d = drag.current;
    const step = Math.min(dt, 1 / 30);
    const t = state.clock.elapsedTime;

    if (!d.active) {
      // Spring back to rest (with a gentle idle sway), keeping momentum from
      // the release so it bounces.
      const sway = reduced ? 0 : Math.sin(t * 0.7) * 0.08;
      const k = 38;
      const c = 5.5;
      d.velX += (-k * (d.rotX - REST.x) - c * d.velX) * step;
      d.velY += (-k * (d.rotY - (REST.y + sway)) - c * d.velY) * step;
      d.rotX += d.velX * step;
      d.rotY += d.velY * step;
    }

    const g = mark.current;
    if (!g) return;
    g.rotation.x = d.rotX;
    g.rotation.y = d.rotY;
    g.rotation.z = reduced ? 0 : Math.sin(t * 0.9) * 0.04;

    const lifted = hover.current || d.active;
    const bob = reduced ? 0 : Math.sin(t * 1.6) * 0.04;
    const lift = (lifted ? 0.2 : 0.06) + bob;
    g.position.z = THREE.MathUtils.damp(g.position.z, lift, 7, dt);
    const s = THREE.MathUtils.damp(g.scale.x, lifted ? 1.07 : 1, 7, dt);
    g.scale.setScalar(s);

    // The higher the logo, the bigger and fainter its shadow on the paper.
    if (shadow.current) {
      shadow.current.scale.setScalar(0.9 + g.position.z * 0.8);
      (shadow.current.material as THREE.MeshBasicMaterial).opacity = 0.5 - g.position.z * 0.6;
    }
  });

  return (
    <>
      {/* Logo shadow, cast on the (flat) paper behind */}
      <mesh ref={shadow} position={[0.08, -0.12, -0.45]}>
        <planeGeometry args={[size.w * 0.9, size.h * 1.05 + 0.12]} />
        <meshBasicMaterial map={shadowTex} transparent depthWrite={false} opacity={0.4} />
      </mesh>

      {logoTex && (
        <group ref={mark} position={[0, 0.02, 0.06]} rotation={[REST.x, REST.y, 0]}>
          {/* Thickness: the sticker shape, stacked and shaded */}
          {Array.from({ length: LAYERS }, (_, i) => {
            const shade = 0.68 + (i / (LAYERS - 1)) * 0.22;
            return (
              <mesh key={i} position={[0, 0, -0.1 + (i / (LAYERS - 1)) * 0.095]} renderOrder={1}>
                <planeGeometry args={[size.w, size.h]} />
                <meshBasicMaterial
                  map={logoTex.sticker}
                  transparent
                  alphaTest={0.5}
                  color={new THREE.Color(shade, shade, shade)}
                  side={THREE.DoubleSide}
                />
              </mesh>
            );
          })}
          {/* White sticker face, soft-edged */}
          <mesh renderOrder={9}>
            <planeGeometry args={[size.w, size.h]} />
            <meshBasicMaterial map={logoTex.sticker} transparent alphaTest={0.02} depthWrite={false} />
          </mesh>
          {/* The logo on top */}
          <mesh position={[0, 0, 0.004]} renderOrder={10}>
            <planeGeometry args={[size.w, size.h]} />
            <meshBasicMaterial map={logoTex.texture} transparent alphaTest={0.02} depthWrite={false} />
          </mesh>
        </group>
      )}
    </>
  );
}

/** The flat paper sheet with washi tape across its top edge. */
function Sheet({ accent }: { accent: string }) {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[64%] aspect-[1/1.414] bg-[#f4ecdc] rounded-[2px] shadow-[0_10px_24px_rgba(0,0,0,0.45)]'>
      {/* faint paper grain */}
      <div
        className='absolute inset-0 opacity-[0.18] mix-blend-multiply rounded-[2px]'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />
      {/* washi tape, half on the paper and half off */}
      <span
        className='absolute -top-3 left-1/2 -translate-x-1/2 -rotate-[4deg] w-[62%] h-5 shadow-sm'
        style={{
          backgroundColor: `${accent}b8`,
          clipPath:
            'polygon(0 8%, 4% 0, 9% 10%, 14% 0, 100% 0, 96% 12%, 100% 26%, 97% 46%, 100% 64%, 96% 82%, 100% 100%, 0 100%, 3% 84%, 0 66%, 4% 48%, 0 30%)',
        }}
      />
    </div>
  );
}

/** Flat stand-in when WebGL isn't available. */
function Fallback({ logo, scale }: { logo: Logo; scale: number }) {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt=''
        style={{ width: `${70 * scale}%` }}
        className={`h-auto drop-shadow-lg ${logo.blend ? 'mix-blend-multiply' : ''}`}
      />
    </div>
  );
}

export default function LogoSheet({
  logo,
  accent,
  scale = 1,
  href,
}: {
  logo: Logo;
  accent: string;
  /** Page a tap on the sheet opens. */
  href?: string;
  /** Size of the logo relative to the default (e.g. 0.8 for a bulkier mark). */
  scale?: number;
}) {
  const router = useRouter();
  const wrap = useRef<HTMLDivElement>(null);
  const hover = useRef(false);
  const drag = useRef<DragState>({
    active: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    lastT: 0,
    rotX: REST.x,
    rotY: REST.y,
    velX: 0,
    velY: 0,
  });
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Only animate while on screen.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const d = drag.current;
    d.active = true;
    d.startX = e.clientX;
    d.startY = e.clientY;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    d.lastT = performance.now();
    d.velX = d.velY = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active) return;
    const now = performance.now();
    const dt = Math.max(1, now - d.lastT) / 1000;
    const nextY = THREE.MathUtils.clamp(d.rotY + (e.clientX - d.lastX) * 0.009, -LIMIT.y, LIMIT.y);
    const nextX = THREE.MathUtils.clamp(d.rotX + (e.clientY - d.lastY) * 0.009, -LIMIT.x, LIMIT.x);
    d.velY = (nextY - d.rotY) / dt;
    d.velX = (nextX - d.rotX) / dt;
    d.rotY = nextY;
    d.rotX = nextX;
    d.lastX = e.clientX;
    d.lastY = e.clientY;
    d.lastT = now;
  };

  const release = () => {
    const d = drag.current;
    d.active = false;
    // Cap the fling so it bounces rather than spins out.
    d.velX = THREE.MathUtils.clamp(d.velX, -8, 8);
    d.velY = THREE.MathUtils.clamp(d.velY, -8, 8);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const d = drag.current;
    const tapped = d.active && Math.hypot(e.clientX - d.startX, e.clientY - d.startY) < TAP_SLOP;
    release();
    if (href && tapped) router.push(href);
  };

  return (
    <div
      ref={wrap}
      aria-hidden
      data-logo-sheet={logo.alt}
      className={`relative aspect-square w-full select-none touch-pan-y ${href ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={release}
      onPointerEnter={() => {
        hover.current = true;
        if (href) router.prefetch(href);
      }}
      onPointerLeave={() => {
        hover.current = false;
      }}
    >
      <Sheet accent={accent} />
      <div className='absolute inset-0'>
        <Canvas
          frameloop={inView ? 'always' : 'demand'}
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.1], fov: 35 }}
          flat
          gl={{ alpha: true, antialias: true }}
          fallback={<Fallback logo={logo} scale={scale} />}
        >
          <LogoScene logo={logo} scale={scale} drag={drag} hover={hover} reduced={reduced} />
        </Canvas>
      </div>
    </div>
  );
}
