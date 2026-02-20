import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-20">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">
              3M+ Active Job Seekers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The Easiest Way to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Get Your
              </span>
            </span>{' '}
            New Job
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed max-w-lg"
          >
            Each month, more than{' '}
            <span className="text-white font-semibold">
              3 million job seekers
            </span>{' '}
            turn to our platform, making over{' '}
            <span className="text-white font-semibold">
              140,000 applications
            </span>{' '}
            every single day.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex gap-8"
          >
            {[
              { num: '3M+', label: 'Job Seekers' },
              { num: '140K', label: 'Daily Applications' },
              { num: '98%', label: 'Success Rate' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {num}
                </span>
                <span className="text-xs text-slate-500 mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden bg-gradient-to-r from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
            <button className="px-8 py-4 rounded-xl font-semibold text-slate-300 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200">
              Browse Jobs →
            </button>
          </motion.div>

          {/* Trusted logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="text-xs text-slate-600 uppercase tracking-widest whitespace-nowrap">
              Trusted by
            </span>
            <div className="flex gap-4 items-center">
              {['Google', 'Stripe', 'Notion', 'Figma'].map((name) => (
                <span
                  key={name}
                  className="text-slate-600 font-bold text-sm hover:text-slate-400 transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Floating Images ── */}
        <div className="relative flex justify-center items-center h-[420px] sm:h-[500px] order-1 lg:order-2">
          {/* Glow ring behind images */}
          <div className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl" />

          {/* Image 1 — top-left float */}
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 top-6 w-[55%] drop-shadow-[0_30px_50px_rgba(99,102,241,0.35)]"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://jobbox.archielite.com/storage/pages/banner1.png"
                alt="Job seeker"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Image 2 — bottom-right float */}
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, -6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute right-0 bottom-6 w-[52%] drop-shadow-[0_30px_50px_rgba(139,92,246,0.35)]"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://jobbox.archielite.com/storage/pages/banner2.png"
                alt="Job listing"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating card — notifications style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.7 },
              scale: { duration: 0.5, delay: 0.7 },
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              },
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 min-w-[190px]"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">
                New Offer!
              </p>
              <p className="text-slate-400 text-xs">Senior Designer @ Stripe</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');`}</style>
    </section>
  );
}
