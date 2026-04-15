import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
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
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div className="w-full">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" style={{ background: "var(--paper)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.018) 1px, transparent 1px)`,
          backgroundSize: "72px 72px"
        }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(26,79,255,0.055) 0%, transparent 70%)" }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeUp>
            <div className="section-label justify-center mb-7">Insights</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-bold text-[#080810] mb-6 leading-[0.94] tracking-[-0.028em]">
              Ideas &amp; Digital<br />
              <em className="text-gradient not-italic">Insights.</em>
            </h1>
            <p className="text-[#8B8FA8] text-lg max-w-md mx-auto leading-relaxed mt-5">
              In-depth articles on web, apps, and marketing — to help your business grow faster.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── COMING SOON CONTENT ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">

          {/* Status + icon */}
          <FadeUp>
            <div className="flex flex-col items-center text-center mb-16">
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-100/80 shadow-md mb-8"
              >
                <span className="text-3xl">✍️</span>
              </motion.div>

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 bg-[#1A4FFF]/[0.06] border border-[#1A4FFF]/12 text-[#1A4FFF] text-[0.6rem] tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-6"
                style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-[#1A4FFF] inline-block"
                />
                Launching Soon
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-4 leading-[1.08]">
                Our Blog Is{" "}
                <em className="text-gradient not-italic">Getting Ready.</em>
              </h2>
              <p className="text-[#8B8FA8] leading-relaxed text-[0.975rem] max-w-md mx-auto">
                We're crafting in-depth guides and expert insights on web development, digital marketing, and growth strategies. Subscribe to get notified first.
              </p>
            </div>
          </FadeUp>

          {/* Topics */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-2 justify-center mb-14">
              {topics.map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--paper)] border border-black/[0.07] text-[#4B5563] text-sm"
                  style={{ fontFamily: "Syne, sans-serif", fontWeight: 500 }}
                >
                  <span>{t.icon}</span> {t.label}
                </motion.span>
              ))}
            </div>
          </FadeUp>

          {/* Newsletter card */}
          <FadeUp delay={0.15}>
            <div data-theme="dark" className="relative bg-[#080810] rounded-[32px] p-10 md:p-14 overflow-hidden">
              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 blur-3xl pointer-events-none rounded-full"
                style={{ background: "rgba(26,79,255,0.35)" }}
              />
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.018) 1px, transparent 1px)`,
                backgroundSize: "34px 34px"
              }} />

              <div className="relative z-10 text-center">
                <div className="inline-block text-[#1A4FFF] text-[0.6rem] font-bold tracking-[0.22em] uppercase bg-[#1A4FFF]/10 border border-[#1A4FFF]/18 px-4 py-1.5 rounded-full mb-5"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Newsletter
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-[1.1]">
                  Be the First to Know
                </h3>
                <p className="text-white/50 mb-8 text-sm leading-relaxed max-w-sm mx-auto">
                  One email when we publish — real insights on web, apps, and growth. No spam, ever.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>You're on the list!</p>
                    <p className="text-white/40 text-xs">We'll email you when the first post drops.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2.5 max-w-sm mx-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 bg-white/[0.06] border border-white/[0.09] text-white placeholder-white/20 rounded-2xl px-5 py-3 text-sm outline-none focus:border-[#4D7AFF]/50 focus:bg-white/[0.09] transition-all"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-[#1A4FFF] text-white px-5 py-3 rounded-2xl text-sm font-bold hover:bg-[#4D7AFF] transition-colors whitespace-nowrap shadow-lg"
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

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: "var(--paper)" }}>
        <FadeUp>
          <p className="text-[#B0B7C3] text-xs tracking-[0.18em] uppercase mb-4" style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
            Don't want to wait?
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#080810] mb-4 leading-[1.05]">
            Let's Work Together
          </h2>
          <p className="text-[#8B8FA8] mb-9 max-w-sm mx-auto text-sm leading-relaxed">
            Skip the blog — talk to us directly and we'll help your business grow.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary text-sm px-9 py-3.5"
            >
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </Link>
        </FadeUp>
      </section>

    </div>
  );
}
