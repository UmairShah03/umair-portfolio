import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

interface InteractiveRevealTextProps {
  line1?: string;
  line2?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity?: number;
}

export const InteractiveRevealText = ({
  line1 = "Innovative Solutions",
  line2 = "Develop With Umair",
}: InteractiveRevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Mouse position relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor movement - make it slightly looser for a high-end elastic look
  const springConfig = { damping: 40, stiffness: 180, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Radius of the reveal mask circle (slightly larger for better readability)
  const maskRadius = 110; 
  // Soft, feathered masking using CSS radial gradients
  const maskImage = useMotionTemplate`radial-gradient(circle ${maskRadius}px at ${cursorX}px ${cursorY}px, black 35%, transparent 100%)`;

  // Measure container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Handle Mouse Events
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Dispatch a custom event to notify the page to hide the main CustomCursor
    const event = new CustomEvent("toggle-custom-cursor", { detail: { show: false } });
    window.dispatchEvent(event);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Dispatch event to show main CustomCursor again
    const event = new CustomEvent("toggle-custom-cursor", { detail: { show: true } });
    window.dispatchEvent(event);
  };

  // Auto-drift animation when not hovered (makes the landing page look alive and works on mobile/touch)
  useEffect(() => {
    let animationFrameId: number;
    const startTime = Date.now();

    const tick = () => {
      if (!isHovered && dimensions.width > 0 && dimensions.height > 0) {
        const time = (Date.now() - startTime) * 0.0008;
        // Generate a smooth Lissajous pattern (figure-eight motion)
        const targetX = dimensions.width / 2 + Math.sin(time * 1.0) * (dimensions.width * 0.35);
        const targetY = dimensions.height / 2 + Math.sin(time * 2.0) * (dimensions.height * 0.18);
        
        mouseX.set(targetX);
        mouseY.set(targetY);
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, dimensions]);

  // Particle System Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 90;

    // Handle high DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    // Track last cursor position to emit particles on motion
    let lastX = cursorX.get();
    let lastY = cursorY.get();

    const animateParticles = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const currentX = cursorX.get();
      const currentY = cursorY.get();

      // Emit particles based on cursor speed/movement
      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Sparkle emission rate
      const spawnChance = isHovered ? 0.4 : 0.12;
      const spawnCount = Math.min(6, Math.floor(speed * 0.4) + (Math.random() < spawnChance ? 2 : 0));

      if (dimensions.width > 0 && dimensions.height > 0) {
        for (let i = 0; i < spawnCount; i++) {
          if (particles.length < maxParticles) {
            // Spawn around the cursor with a slight radial dispersion
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * (maskRadius * 0.7); 
            const spawnX = currentX + Math.cos(angle) * dist;
            const spawnY = currentY + Math.sin(angle) * dist;

            particles.push({
              x: spawnX,
              y: spawnY,
              vx: (Math.random() - 0.5) * 1.5 + (dx * 0.08),
              vy: (Math.random() - 0.5) * 1.5 + (dy * 0.08) - 0.2, // slight upward float
              size: Math.random() * 2.8 + 0.6,
              color: Math.random() > 0.4 ? "174 72% 56%" : "265 70% 62%", // primary cyan or accent purple
              alpha: Math.random() * 0.85 + 0.15,
              decay: Math.random() * 0.012 + 0.006,
              gravity: -0.015, // float upward
            });
          }
        }
      }

      lastX = currentX;
      lastY = currentY;

      // Update and draw particles
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.gravity) p.vy += p.gravity;
        p.vx *= 0.98; // Friction
        p.vy *= 0.98; // Friction
        p.alpha -= p.decay;

        // Draw glowing particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        const hslColor = p.color.includes("174") ? "174, 72%, 56%" : "265, 70%, 62%";
        ctx.fillStyle = `hsla(${hslColor}, ${p.alpha})`;
        ctx.shadowColor = p.color.includes("174") ? "rgba(174, 72%, 56%, 0.5)" : "rgba(265, 70%, 62%, 0.5)";
        ctx.shadowBlur = p.size * 2.5;
        
        ctx.fill();
        ctx.restore();

        // Remove dead particles
        if (p.alpha <= 0) {
          particles.splice(idx, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, isHovered]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-6 select-none cursor-none flex flex-col items-center justify-center text-center overflow-visible"
      style={{ minHeight: "220px" }}
    >
      {/* Canvas for floating interactive particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10 w-full h-full"
      />

      {/* Base Layer: Outlined Text (Clean and elegant size) */}
      <div 
        className="flex flex-col items-center justify-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] text-center"
        style={{
          WebkitTextStroke: "1px rgba(255, 255, 255, 0.12)",
          color: "transparent",
        }}
      >
        <span className="block">{line1}</span>
        <span className="block mt-2 sm:mt-3">{line2}</span>
      </div>

      {/* Foreground Layer: Filled White Text with Soft Reveal Feathering */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1] pointer-events-none select-none z-20 text-center"
        style={{
          color: "#ffffff",
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          filter: "drop-shadow(0 0 15px rgba(255,255,255,0.1))",
        }}
      >
        <span className="block">{line1}</span>
        <span className="block mt-2 sm:mt-3">{line2}</span>
      </motion.div>

      {/* Interactive Custom Reticle Cursor Circle (Premium HUD style reticle) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: maskRadius * 2,
          height: maskRadius * 2,
        }}
        animate={{
          scale: isHovered ? 1.05 : 0.85,
          opacity: 1,
        }}
        transition={{ duration: 0.35 }}
        className="absolute top-0 left-0 pointer-events-none z-30 flex items-center justify-center"
      >
        {/* Glowing Tech Reticle SVG */}
        <svg
          className="w-full h-full text-primary/75 filter drop-shadow-[0_0_10px_rgba(174,72,56,0.35)] animate-[spin_20s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          {/* Outer dotted circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          {/* Inner reverse-spinning dashed circle */}
          <circle
            cx="50"
            cy="50"
            r="39"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 12"
            className="text-accent/60 opacity-70 animate-[spin_10s_linear_infinite_reverse]"
          />
          {/* Subtle center HUD indicators */}
          <line x1="50" y1="44" x2="50" y2="47" stroke="currentColor" strokeWidth="0.8" />
          <line x1="50" y1="53" x2="50" y2="56" stroke="currentColor" strokeWidth="0.8" />
          <line x1="44" y1="50" x2="47" y2="50" stroke="currentColor" strokeWidth="0.8" />
          <line x1="53" y1="50" x2="56" y2="50" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </motion.div>
    </div>
  );
};

export default InteractiveRevealText;
