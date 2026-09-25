import React, { useEffect, useRef } from 'react';

interface ThreeWorldProps {
  scrollProgress: number; // 0.0 (Home) to 1.0 (Portal world)
  onCloudPeak?: (isClouded: boolean) => void;
}

export const ThreeWorld: React.FC<ThreeWorldProps> = ({ scrollProgress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, currentX: 0, currentY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      mouseRef.current.x = nx;
      mouseRef.current.y = ny;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth mouse damping for subtle 3D camera pan
  useEffect(() => {
    let animId: number;
    const updateMotion = () => {
      mouseRef.current.currentX += (mouseRef.current.x - mouseRef.current.currentX) * 0.04;
      mouseRef.current.currentY += (mouseRef.current.y - mouseRef.current.currentY) * 0.04;

      if (containerRef.current) {
        // Controlled, subtle tilt & pan for gentle 3D parallax without excessive sway
        const tiltX = -mouseRef.current.currentY * 0.75;
        const tiltY = mouseRef.current.currentX * 0.95;
        const panX = -mouseRef.current.currentX * 3.5;
        const panY = -mouseRef.current.currentY * 2.2;

        // Camera flight forward based on scrollProgress
        // Base scale 1.06 + container bleed ensures NO black screen edge is ever exposed
        const zoom = 1.06 + Math.pow(scrollProgress, 1.4) * 1.2;
        const zoomPanY = scrollProgress * -20;

        containerRef.current.style.transform = `
          perspective(1200px)
          translate3d(${panX}px, ${panY + zoomPanY}px, 0px)
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
          scale(${zoom})
        `;
      }
      animId = requestAnimationFrame(updateMotion);
    };
    animId = requestAnimationFrame(updateMotion);
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress]);

  // Compute Cloud Overlay density (peaks between 0.45 and 0.85)
  let cloudOpacity = 0;
  if (scrollProgress >= 0.45 && scrollProgress <= 0.88) {
    if (scrollProgress < 0.68) {
      cloudOpacity = (scrollProgress - 0.45) / 0.23; // 0 to 1
    } else {
      cloudOpacity = 1 - (scrollProgress - 0.68) / 0.20; // 1 to 0
    }
  }

  // Home Page visibility (fades out as cloud covers it)
  const homeOpacity = Math.max(0, 1 - Math.max(0, (scrollProgress - 0.52) / 0.2));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black select-none">
      {/* 3D Moving Container for Scene 1 (Floating Citadel & Explorer Boy) */}
      {/* -top-[4%] -left-[4%] w-[108%] h-[108%] provides full edge bleed to prevent black borders */}
      <div
        ref={containerRef}
        className="absolute -top-[4%] -left-[4%] w-[108%] h-[108%] transition-opacity duration-300"
        style={{
          opacity: homeOpacity,
          willChange: 'transform, opacity',
          transformOrigin: '65% 45%'
        }}
      >
        <img
          src="/home_bg.jpg"
          alt="TECHVIRITI Floating Citadel with Explorer on Cliff"
          className="w-full h-full object-cover object-[70%_center] sm:object-[68%_center] md:object-[66%_center] filter brightness-105 contrast-[1.03]"
        />

        {/* Subtle Cinematic Atmospheric Vignette and Golden Sun Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(251,191,36,0.1),transparent_50%)] pointer-events-none" />
      </div>

      {/* Volumetric Drone Flight Cloud Fog (Transition between Home & Portal Hub) */}
      <div
        className="absolute inset-0 transition-opacity duration-200 pointer-events-none flex items-center justify-center"
        style={{
          opacity: Math.min(1, Math.max(0, cloudOpacity)),
          background: 'radial-gradient(ellipse at center, rgba(220, 240, 255, 0.95) 0%, rgba(180, 215, 255, 0.85) 35%, rgba(14, 20, 35, 0.96) 80%, #030712 100%)',
          backdropFilter: `blur(${cloudOpacity * 24}px)`,
          WebkitBackdropFilter: `blur(${cloudOpacity * 24}px)`
        }}
      >
        <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.4),transparent_60%)] animate-pulse" />
        
        {cloudOpacity > 0.35 && (
          <div className="text-center font-display tracking-[0.3em] uppercase text-cyan-200/90 text-sm font-semibold animate-pulse">
            // Entering Central Observation Deck //
          </div>
        )}
      </div>
    </div>
  );
};
