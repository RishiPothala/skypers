import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = ["All", "Web", "App", "Marketing", "Design"];

export default function Portfolio() {
  return (
    <div className="w-full">

      {/* ── HEADER ── */}
      <section className="pt-28 pb-16 px-6 relative overflow-hidden" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: "36px 36px"
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="section-label justify-center mb-6">Our Work</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#080810] mb-6 leading-[0.96] tracking-[-0.025em]">
              Projects We're
              <br />
              <em className="text-gradient not-italic">Building Next.</em>
            </h1>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto leading-relaxed">
              We're a fresh agency with a relentless focus on quality. Our work speaks for itself — and it's coming soon.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CATEGORY BAR — inline, scrolls with page ── */}
      <div className="bg-[var(--paper)] border-b border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap cursor-default select-none border transition-colors duration-200 flex-shrink-0 ${
                cat === "All"
                  ? "bg-[#080810] text-white border-[#080810]"
                  : "text-[#6B7280] bg-white border-black/[0.07] hover:border-black/20 hover:text-[#080810]"
              }`}
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
            >
              {cat}
            </motion.div>
          ))}
          <span className="ml-auto text-xs text-[#B0B7C3] whitespace-nowrap pl-4 flex-shrink-0" style={{ fontFamily: "Syne, sans-serif" }}>
            Coming soon
          </span>
        </div>
      </div>

      {/* ── EMPTY STATE — premium launching soon ── */}
      <section className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--paper-warm)" }}>
        {/* Floating ambient shapes */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-[7%] w-20 h-20 rounded-[28%] border border-blue-200/50 bg-blue-50/40 pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-28 right-[9%] w-14 h-14 rounded-full border border-indigo-200/60 bg-indigo-50/50 pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-24 left-[16%] w-10 h-10 rounded-xl bg-blue-100/60 rotate-12 pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-16 right-[13%] w-16 h-16 rounded-2xl border border-blue-300/30 pointer-events-none"
        />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <FadeUp>
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-xl border border-black/[0.06] mb-10 relative mx-auto"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl bg-[#1A4FFF]/5"
              />
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" className="relative z-10">
                <rect x="3" y="3" width="12" height="12" rx="3" stroke="#1A4FFF" strokeWidth="1.8" strokeLinecap="round"/>
                <rect x="21" y="3" width="12" height="12" rx="3" stroke="#1A4FFF" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
                <rect x="3" y="21" width="12" height="12" rx="3" stroke="#1A4FFF" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
                <rect x="21" y="21" width="12" height="12" rx="3" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
              </svg>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-5 leading-[1.1]">
              Filling Up <em className="text-gradient not-italic">Quickly.</em>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-md mx-auto leading-relaxed mb-10">
              Every exceptional agency starts somewhere. We're building our portfolio one great project at a time — yours could be first.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-10 py-4"
              >
                Be Our First Case Study
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>

            <p className="mt-8 text-sm text-[#9CA3AF]" style={{ fontFamily: "Syne, sans-serif" }}>
              We're actively onboarding new clients →{" "}
              <Link to="/contact" className="text-[#1A4FFF] font-semibold hover:underline">
                Let's talk today
              </Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <FadeUp>
          <div className="relative z-10">
            <p className="text-[#9CA3AF] text-sm tracking-[0.15em] uppercase mb-6" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
              Your Project Could Be First
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-6 leading-[1.05]">
              Let's Create Something<br />
              <em className="text-gradient not-italic">Worth Showcasing.</em>
            </h2>
            <p className="text-[#6B7280] mb-10 text-lg max-w-lg mx-auto">
              We build with pride. Your project won't just be done — it'll be something you're proud to show the world.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-10 py-4"
              >
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
