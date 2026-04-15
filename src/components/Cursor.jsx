import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { damping: 40, stiffness: 500, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 500, mass: 0.2 });
  const ringX = useSpring(cursorX, { damping: 28, stiffness: 300, mass: 0.4 });
  const ringY = useSpring(cursorY, { damping: 28, stiffness: 300, mass: 0.4 });

  const [hovered, setHovered]   = useState(false);
  const [clicked, setClicked]   = useState(false);
  const [hidden,  setHidden]    = useState(false);
  const [onDark,  setOnDark]    = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    /* Check if cursor is currently over a dark-background element */
    const checkDarkBg = (x, y) => {
      const el = document.elementFromPoint(x, y);
      if (!el) return;
      // Walk up the DOM looking for [data-theme="dark"]
      let node = el;
      let found = false;
      while (node && node !== document.body) {
        if (node.dataset && node.dataset.theme === "dark") { found = true; break; }
        node = node.parentElement;
      }
      setOnDark(found);
    };

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      checkDarkBg(e.clientX, e.clientY);
    };

    const handleMouseDown  = () => setClicked(true);
    const handleMouseUp    = () => setClicked(false);
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleHoverIn = (e) => {
      const t = e.target;
      if (
        t.tagName === "A" || t.tagName === "BUTTON" ||
        t.closest("a") || t.closest("button") ||
        t.dataset.cursor === "hover"
      ) setHovered(true);
    };
    const handleHoverOut = () => setHovered(false);

    window.addEventListener("mousemove",   moveCursor);
    window.addEventListener("mousedown",   handleMouseDown);
    window.addEventListener("mouseup",     handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover",  handleHoverIn);
    document.addEventListener("mouseout",   handleHoverOut);

    return () => {
      window.removeEventListener("mousemove",   moveCursor);
      window.removeEventListener("mousedown",   handleMouseDown);
      window.removeEventListener("mouseup",     handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover",  handleHoverIn);
      document.removeEventListener("mouseout",   handleHoverOut);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  /* ── colour tokens ── */
  const dotColor = onDark
    ? (hovered ? "#7DD3FC" : "#FFFFFF")          // sky-300 on hover, white default
    : (hovered ? "var(--accent)" : "var(--ink)"); // blue on hover, ink default

  const ringBorder = onDark
    ? (hovered ? "rgba(125,211,252,0.7)" : "rgba(255,255,255,0.35)")
    : (hovered ? "rgba(26,79,255,0.55)"  : "rgba(8,8,16,0.2)");

  const ringBg = onDark
    ? (hovered ? "rgba(125,211,252,0.08)" : "transparent")
    : (hovered ? "rgba(26,79,255,0.06)"   : "transparent");

  return (
    <>
      {/* Dot — fast, tight */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:   clicked ? 5 : 7,
          height:  clicked ? 5 : 7,
          background: dotColor,
          opacity: hidden ? 0 : 1,
          transition: "width 0.15s ease, height 0.15s ease, background 0.18s ease, opacity 0.2s ease",
        }}
      />

      {/* Ring — smooth lag */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width:  hovered ? 44 : clicked ? 26 : 34,
          height: hovered ? 44 : clicked ? 26 : 34,
          border: `1.5px solid ${ringBorder}`,
          background: ringBg,
          opacity: hidden ? 0 : 1,
          transition:
            "width 0.3s cubic-bezier(0.34,1.56,0.64,1), height 0.3s cubic-bezier(0.34,1.56,0.64,1), border-color 0.18s ease, background 0.18s ease, opacity 0.2s ease",
          backdropFilter: hovered ? "blur(2px)" : "none",
        }}
      />
    </>
  );
}
