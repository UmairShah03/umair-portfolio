import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleToggleCursor = (e: Event) => {
      const customEvt = e as CustomEvent<{ show: boolean }>;
      setIsEnabled(customEvt.detail.show);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("toggle-custom-cursor", handleToggleCursor as EventListener);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("toggle-custom-cursor", handleToggleCursor as EventListener);
    };
  }, [isVisible, isEnabled]);

  if (!isVisible || !isEnabled) return null;

  const bracketOffset = isHovered ? 12 : 7;
  const bracketSize = isHovered ? 6 : 4;

  return (
    <div className="hidden md:block pointer-events-none z-[9999]">
      {/* Precision Core Micro-Dot (4px) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none shadow-[0_0_8px_hsl(var(--primary))]"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isClicked ? 0.6 : isHovered ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 1400, damping: 50, mass: 0.05 }}
      />

      {/* Sleek Corner Reticle Brackets (4 corners) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      >
        {/* Top-Left Bracket */}
        <motion.span
          className="absolute border-t border-l border-primary/80"
          animate={{
            x: -bracketOffset,
            y: -bracketOffset,
            width: bracketSize,
            height: bracketSize,
            borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />

        {/* Top-Right Bracket */}
        <motion.span
          className="absolute border-t border-r border-primary/80"
          animate={{
            x: bracketOffset - bracketSize,
            y: -bracketOffset,
            width: bracketSize,
            height: bracketSize,
            borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />

        {/* Bottom-Left Bracket */}
        <motion.span
          className="absolute border-b border-l border-primary/80"
          animate={{
            x: -bracketOffset,
            y: bracketOffset - bracketSize,
            width: bracketSize,
            height: bracketSize,
            borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />

        {/* Bottom-Right Bracket */}
        <motion.span
          className="absolute border-b border-r border-primary/80"
          animate={{
            x: bracketOffset - bracketSize,
            y: bracketOffset - bracketSize,
            width: bracketSize,
            height: bracketSize,
            borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
