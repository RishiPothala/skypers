import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.4 };
  const dotX = useSpring(cursorX, { damping: 40, stiffness: 500, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 500, mass: 0.2 });
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleHoverIn = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover"
      ) {
        setHovered(true);
      }
    };

    const handleHoverOut = () => setHovered(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot — fast, tight follower */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: clicked ? 6 : 7,
          height: clicked ? 6 : 7,
          background: hovered ? "var(--accent)" : "var(--ink)",
          opacity: hidden ? 0 : 1,
          transition: "width 0.15s ease, height 0.15s ease, background 0.2s ease, opacity 0.2s ease",
          mixBlendMode: "normal",
        }}
      />

      {/* Ring — smooth lag follower */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? 42 : clicked ? 28 : 34,
          height: hovered ? 42 : clicked ? 28 : 34,
          border: `1.5px solid ${hovered ? "rgba(26,79,255,0.55)" : "rgba(8,8,16,0.2)"}`,
          background: hovered ? "rgba(26,79,255,0.06)" : "transparent",
          opacity: hidden ? 0 : 1,
          transition: "width 0.3s cubic-bezier(0.34,1.56,0.64,1), height 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease",
          backdropFilter: hovered ? "blur(2px)" : "none",
        }}
      />
    </>
  );
}
