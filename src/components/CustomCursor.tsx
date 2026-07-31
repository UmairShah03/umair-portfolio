import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch desktop devices
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

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none z-[9999]">
      {/* Central Core Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none shadow-[0_0_12px_hsl(var(--primary))]"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          scale: isClicked ? 0.5 : isHovered ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50, mass: 0.1 }}
      />

      {/* Spring Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border rounded-full pointer-events-none"
        animate={{
          x: mousePos.x - 18,
          y: mousePos.y - 18,
          scale: isClicked ? 0.75 : isHovered ? 1.8 : 1,
          borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.4)",
          backgroundColor: isHovered ? "hsl(var(--primary) / 0.12)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
    </div>
  );
};

export default CustomCursor;
