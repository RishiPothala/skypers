import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

const topics = [
  { icon: "🌐", label: "Web Dev" },
  { icon: "📱", label: "App Dev" },
  { icon: "📣", label: "Marketing" },
  { icon: "🎨", label: "Design" },
  { icon: "📈", label: "Growth" },
];

export default function Blog() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full">

      {/* ── HEADER ── */}
      <section className="pt-28 pb-16 px-6 relative overflow-hidden" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.022) 1px, transparent 1px)`,
          backgroundSize: "56px 56px"
        }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-40 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(26,79,255,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="section-label justify-center mb-6">Insights</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#080810] mb-6 leading-[0.96] tracking-[-0.025em]">
              Ideas, Guides &<br />
              <em className="text-gradient not-italic">Digital Insights.</em>
            </h1>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Practical tips and deep dives on web, apps, and marketing — to help your business grow.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── COMING SOON STATE ── */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(26,79,255,0.07) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(138,171,255,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <FadeUp>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#1A4FFF]/[0.07] border border-[#1A4FFF]/15 text-[#1A4FFF] text-[0.65rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-10"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#1A4FFF] inline-block"
              />
              Launching Soon
            </div>

            {/* Floating pen icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100 shadow-lg mb-10 mx-auto relative"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl bg-[#1A4FFF]/5"
              />
              <span className="text-4xl relative z-10">✍️</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-5 leading-[1.1]">
              Our Blog Is{" "}
              <em className="text-gradient not-italic">Getting Ready.</em>
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6 text-[0.975rem] max-w-xl mx-auto">
              We're crafting in-depth guides, case studies, and expert insights on everything from web development to digital marketing. The first posts are almost ready.
            </p>
            <p className="text-[#6B7280] leading-relaxed text-[0.975rem] max-w-lg mx-auto mb-10">
              Subscribe below and you'll be the first to know when we publish — no spam, just genuinely useful content.
            </p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {topics.map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--paper)] border border-black/[0.07] text-[#4B5563] text-sm"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
                >
                  <span>{t.icon}</span> {t.label}
                </motion.span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <div className="relative bg-[#080810] rounded-[36px] p-10 md:p-16 overflow-hidden text-center">
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 blur-3xl pointer-events-none rounded-full"
                style={{ background: "rgba(26,79,255,0.3)" }}
              />
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: "32px 32px"
              }} />

              <div className="relative z-10">
                <div className="inline-block text-[#1A4FFF] text-[0.65rem] font-bold tracking-[0.2em] uppercase bg-[#1A4FFF]/10 border border-[#1A4FFF]/20 px-4 py-2 rounded-full mb-6"
                  style={{ fontFamily: "Syne, sans-serif" }}>
                  Newsletter
                </div>
                <h2 className="font-display text-4xl font-bold text-white mb-3 leading-[1.1]">
                  Be the First to Know
                </h2>
                <p className="text-white/65 mb-8 text-sm leading-relaxed">
                  One email when we publish — our best insights on web, apps, and digital growth. No spam, ever.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-white font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>You're on the list!</p>
                    <p className="text-white/40 text-sm">We'll email you when the first post drops.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-white/[0.07] border border-white/10 text-white placeholder-white/25 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-[#4D7AFF] focus:bg-white/10 transition-all"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-[#1A4FFF] text-white px-6 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#4D7AFF] transition-colors whitespace-nowrap shadow-lg"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      Notify Me
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: "var(--paper-warm)" }}>
        <div className="absolute inset-0 mesh-bg opacity-80" />
        <FadeUp>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-5 leading-[1.05]">
              Need Help Growing?
            </h2>
            <p className="text-[#6B7280] mb-10 max-w-md mx-auto leading-relaxed">
              Let Skypers build and scale your digital presence with strategy and precision.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base px-10 py-4"
              >
                Work With Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </Link>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}
