import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY && y > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  useEffect(() => setIsOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <motion.nav
      animate={{ y: hidden && !isOpen ? -100 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F6F2]/92 backdrop-blur-2xl border-b border-black/[0.055] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="relative w-14 h-14"
          >
            <img
              src="/logo.png"
              alt="Skypers"
              className="w-14 h-14 object-contain drop-shadow-sm"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div
              className="w-14 h-14 bg-[#1A4FFF] rounded-xl items-center justify-center shadow-md"
              style={{ display: "none" }}
            >
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                <path d="M3 10L10 3L17 10M6 17V10H14V17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
          <span
            className="text-[1.65rem] text-[#1A4FFF] group-hover:text-[#0a35cc] transition-colors duration-200 tracking-wide"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            Skypers
          </span>
        </Link>

        {/* Desktop Nav Pill */}
        <div className="hidden md:flex items-center gap-0.5 bg-black/[0.03] border border-black/[0.055] rounded-full px-2 py-1.5">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 rounded-full text-sm transition-colors duration-200 select-none ${
                  active
                    ? "text-white"
                    : "text-[#4B5563] hover:text-[#080810]"
                }`}
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: active ? 600 : 500 }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#080810] rounded-full shadow-sm"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link to="/contact" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-sm"
          >
            Start a Project
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-black/[0.05] transition-all duration-200"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-[1.5px] bg-[#080810] block rounded-full origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-[1.5px] bg-[#080810] block rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-5 h-[1.5px] bg-[#080810] block rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#F7F6F2]/98 backdrop-blur-2xl border-t border-black/[0.05] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((link, i) => {
                const active = location.pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.28 }}
                  >
                    <Link
                      to={link.to}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-2xl text-base transition-all duration-200 ${
                        active
                          ? "text-[#1A4FFF] bg-blue-50/70 font-semibold"
                          : "text-[#374151] hover:bg-black/[0.04] hover:text-[#080810]"
                      }`}
                      style={{ fontFamily: 'Syne, sans-serif', fontWeight: active ? 600 : 500 }}
                    >
                      {link.label}
                      {active && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 6h10M6.5 1.5L11 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                className="mt-3 pt-4 border-t border-black/[0.06]"
              >
                <Link to="/contact">
                  <button className="btn-primary w-full justify-center text-sm">
                    Start a Project
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
