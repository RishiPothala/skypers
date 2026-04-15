import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance, pixel-perfect websites built to convert visitors into customers.",
    tags: ["React", "Next.js", "Webflow"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="16" rx="2.5"/>
        <path d="M2 8h20M8 3v5M16 3v5"/>
      </svg>
    ),
    color: "#1A4FFF",
    bg: "from-blue-50/80 to-indigo-50/60",
  },
  {
    num: "02",
    title: "App Development",
    desc: "Scalable mobile applications with intuitive UX and robust architecture.",
    tags: ["Android", "Flutter", "Firebase"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <rect x="6" y="1" width="12" height="22" rx="3"/>
        <path d="M10 18h4"/>
      </svg>
    ),
    color: "#7C3AED",
    bg: "from-violet-50/80 to-purple-50/60",
  },
  {
    num: "03",
    title: "Digital Marketing",
    desc: "Data-driven strategies that grow your brand and drive measurable ROI.",
    tags: ["SEO", "Paid Ads", "Social"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M3 17l5-6 4 4 6-9"/>
        <circle cx="3" cy="17" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="21" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    color: "#059669",
    bg: "from-emerald-50/80 to-teal-50/60",
  },
];



const process = [
  { step: "01", title: "Discover", desc: "We understand your business, goals, and audience deeply before touching a pixel." },
  { step: "02", title: "Strategize", desc: "Craft a clear roadmap with milestones, timelines, and measurable deliverables." },
  { step: "03", title: "Build", desc: "Design and develop with precision — clean code and beautiful interfaces." },
  { step: "04", title: "Launch", desc: "Deploy, test, and optimize. Your growth journey begins here." },
];

const marqueeItems = [
  "Web Development", "UI/UX Design", "App Development", "SEO Strategy",
  "Digital Marketing", "Brand Identity", "Performance", "E-Commerce",
];

const whyItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A4FFF" strokeWidth="1.5" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Fast Execution",
    desc: "We move quickly without compromising quality. Your product ships on time, every time."
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A4FFF" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </svg>
    ),
    title: "Growth-First Thinking",
    desc: "Every decision is tied to your business goals. We build to convert, not just to look good."
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A4FFF" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Clean Craft",
    desc: "Pixel-perfect interfaces with clean, maintainable code underneath. No shortcuts."
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const shape1Y = useTransform(scrollY, [0, 800], [0, -100]);
  const shape2Y = useTransform(scrollY, [0, 800], [0, 70]);
  const shape3Y = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <div className="w-full overflow-hidden">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "var(--paper)" }}
      >
        {/* Mesh gradient bg */}
        <div className="absolute inset-0 mesh-bg" />

        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.022) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }} />

        {/* Floating orbs — parallax */}
        <motion.div style={{ y: shape1Y }}
          className="absolute top-[12%] left-[6%] w-72 h-72 rounded-full border border-blue-200/40 float-slow opacity-40"
        />
        <motion.div style={{ y: shape1Y }}
          className="absolute top-[12%] left-[6%] w-44 h-44 rounded-full bg-gradient-to-br from-blue-100/30 to-transparent float-slow opacity-30 translate-x-14 translate-y-14"
        />
        <motion.div style={{ y: shape2Y }}
          className="absolute top-[18%] right-[8%] w-28 h-28 border border-blue-300/25 rotate-[30deg] float-fast opacity-30"
          style={{ borderRadius: "30%" }}
        />
        <motion.div style={{ y: shape3Y }}
          className="absolute bottom-[18%] left-[12%] w-16 h-16 bg-gradient-to-br from-blue-200/40 to-indigo-200/20 rounded-2xl rotate-[15deg] opacity-50 float-fast"
        />
        <div className="absolute bottom-[12%] right-[10%] w-56 h-56 rounded-full bg-gradient-to-br from-blue-50/60 to-indigo-100/40 float-slow opacity-50 pulse-glow" />

        {/* Large soft center glow */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-400/[0.035] rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center w-full"
        >


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold leading-[0.92] tracking-[-0.03em] text-[#080810] mb-7"
            style={{ fontSize: 'clamp(2.8rem, 9.5vw, 8rem)' }}
          >
            We Build Digital
            <br />
            <em className="text-gradient not-italic">Products</em>{" "}
            <span className="font-display font-light italic" style={{ color: "#8B9FD4" }}>That</span>
            <br />
            <span className="font-display font-light italic" style={{ color: "#6B84C4" }}>Perform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#6B7280] text-lg md:text-xl max-w-xl mx-auto leading-[1.7] mb-10 px-4 sm:px-0"
          >
            From concept to launch — we craft digital experiences
            that help ambitious businesses grow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginTop: "1.5rem", marginBottom: "2rem", maxWidth: "420px" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mx-auto w-full"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-9 py-3.5"
                style={{ width: "100%" }}
              >
                Start a Project
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-base px-9 py-3.5"
                style={{ width: "100%" }}
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#B0B7C3]" style={{ fontFamily: 'Syne, sans-serif' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-9 bg-gradient-to-b from-[#B0B7C3] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div data-theme="dark" className="py-4 bg-[#080810] overflow-hidden border-y border-white/[0.04]">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-8 whitespace-nowrap">
              <span className="text-white/20 text-[0.65rem] tracking-[0.24em] uppercase" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{item}</span>
              <span className="w-1 h-1 rounded-full bg-[#1A4FFF]/50 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6 bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <div className="section-label">What We Do</div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-[#080810] leading-[1.02] tracking-[-0.02em]">
                  Services Built<br />
                  <em className="text-gradient not-italic">For Growth.</em>
                </h2>
              </div>
              <p className="text-[#8B8FA8] max-w-xs leading-relaxed text-sm">
                Every service we offer is engineered to drive real outcomes — not just deliverables.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className={`group relative bg-gradient-to-br ${s.bg} border border-black/[0.06] rounded-[28px] p-8 overflow-hidden cursor-pointer h-full flex flex-col`}
                >
                  {/* Number watermark */}
                  <span className="absolute top-5 right-7 font-display text-[5rem] font-bold leading-none text-black/[0.035] pointer-events-none select-none">
                    {s.num}
                  </span>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}0a, transparent 60%)` }}
                  />

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-all duration-300 group-hover:scale-105"
                    style={{ color: s.color }}>
                    {s.icon}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#080810] mb-2.5">{s.title}</h3>
                  <p className="text-[#8B8FA8] text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[0.62rem] font-semibold px-3 py-1.5 rounded-full bg-white/90 border border-black/[0.06] text-[#6B7280]"
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-7 right-7 w-9 h-9 rounded-full flex items-center justify-center shadow-md"
                    style={{ background: s.color }}
                  >
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                >
                  Explore All Services
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WHY SKYPERS ── */}
      <section data-theme="dark" className="py-28 px-6 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 mesh-bg-dark opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "52px 52px"
        }} />

        {/* Ambient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #1A4FFF 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="section-label" style={{ color: "#8AABFF" }}>Why Choose Us</div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-7 leading-[1.03] tracking-[-0.02em]">
                Built Different,<br />
                <em className="text-gradient not-italic">Delivering More.</em>
              </h2>
              <p className="text-white/50 leading-relaxed mb-9 text-sm max-w-sm">
                We don't just execute — we invest in your outcome. Every project becomes a partnership built on transparency, craft, and ambition.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-ghost"
                >
                  Work With Us
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
            </FadeUp>

            <div className="space-y-3">
              {whyItems.map((item, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.06)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-dark rounded-2xl p-5 flex gap-4 items-start group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#1A4FFF]/10 flex items-center justify-center flex-shrink-0 border border-[#1A4FFF]/15 group-hover:border-[#1A4FFF]/30 group-hover:bg-[#1A4FFF]/15 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[130px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto relative">
          <FadeUp>
            <div className="section-label">How We Work</div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#080810] mb-16 max-w-lg leading-[1.03] tracking-[-0.02em]">
              Our 4-Step<br /><em className="text-gradient not-italic">Process.</em>
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(26,79,255,0.1), rgba(26,79,255,0.18), rgba(26,79,255,0.1), transparent)" }}
            />

            {process.map((p, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group relative"
                >
                  {/* Step circle */}
                  <div className="w-[68px] h-[68px] rounded-full bg-[var(--paper)] border-2 border-[#E5E7EB] flex items-center justify-center mb-7 relative z-10 group-hover:border-[#1A4FFF] group-hover:bg-[#1A4FFF] transition-all duration-300 shadow-sm">
                    <span className="font-display text-lg font-bold text-[#080810] group-hover:text-white transition-colors duration-300">{p.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#080810] mb-2.5 group-hover:text-[#1A4FFF] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-[#8B8FA8] text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div data-theme="dark" className="relative bg-[#080810] rounded-[36px] p-12 md:p-16 text-center overflow-hidden">
              {/* Glow blobs */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.24, 0.12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/3 w-64 h-64 bg-[#1A4FFF] rounded-full blur-[70px] -translate-y-1/2 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#4D7AFF] rounded-full blur-[55px] translate-y-1/2 pointer-events-none"
              />
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.016) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.07] text-white/40 text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-7"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                  </span>
                  Currently accepting projects
                </div>

                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-[1.06] tracking-[-0.02em]">
                  Ready to Build<br />
                  <em className="text-gradient not-italic">Something Great?</em>
                </h2>
                <p className="text-white/45 mb-10 text-sm max-w-md mx-auto leading-relaxed">
                  Let's discuss your project and craft the perfect solution together.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white text-[#080810] font-semibold px-9 py-3.5 rounded-full text-sm hover:bg-blue-50 transition-all inline-flex items-center gap-2.5 shadow-xl"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      Let's Talk
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                        <path d="M1 8H15M9 2L15 8L9 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </Link>
                  <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-[#25D366]/12 text-[#4ADE80] border border-[#25D366]/20 font-semibold px-9 py-3.5 rounded-full text-sm hover:bg-[#25D366]/22 transition-all inline-flex items-center gap-2.5"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Us
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
