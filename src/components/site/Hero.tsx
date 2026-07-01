import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Rocket, Users, Zap, Shield, TrendingUp } from "lucide-react";
import bullLogo from "@/assets/bullogo.jpg";
import { Particles } from "./Particles";

const SPEECHES = ["GM Bulls! 🐂", "Stay Bullish!", "Buy. Hold. Charge!", "Welcome to Bull Smart Chain!"];
const EASTER = ["HODL! 💎", "TO THE MOON! 🚀", "BULLISH! 🐂", "WAGMI! 🔥"];

export function Hero() {
  const [msg, setMsg] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [confetti, setConfetti] = useState<{ id: number; x: number; c: string }[]>([]);
  const [wobble, setWobble] = useState(false);
  const [easter, setEaster] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setMsg((m) => (m + 1) % SPEECHES.length), 3200);
    return () => clearInterval(id);
  }, []);

  const bullClick = () => {
    const n = clicks + 1;
    setClicks(n);
    setWobble(true);
    setTimeout(() => setWobble(false), 500);
    setEaster(EASTER[n % EASTER.length]);
    setTimeout(() => setEaster(null), 1400);
    const colors = ["#F6B300", "#FF8C00", "#FFD86B", "#35E07F", "#FFFFFF"];
    const burst = Array.from({ length: 30 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      c: colors[i % colors.length],
    }));
    setConfetti((c) => [...c, ...burst]);
    setTimeout(() => setConfetti((c) => c.slice(burst.length)), 2200);
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 bg-hero-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(246,179,0,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,140,0,0.15),transparent_50%)]" />
      <Particles count={30} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            $BSC · Live on Binance Smart Chain
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Stay Bullish.{" "}
            <span className="text-gradient-gold">Build Strong.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Powering the next bullish revolution with speed, security, and community
            at its core. Built for believers. Driven by holders. Ready to charge. 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            id="launch"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#community"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF8C00] via-[#F6B300] to-[#FFD86B] px-7 py-4 font-semibold text-black shadow-[0_0_40px_rgba(246,179,0,0.4)] transition-all hover:shadow-[0_0_60px_rgba(246,179,0,0.7)]"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-rotate-12" />
              Launch App
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#community"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-primary/10 hover:border-primary"
            >
              <Users className="h-5 w-5" />
              Join Community
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Fast</span>
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Secure</span>
            <span className="inline-flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Bullish</span>
          </motion.div>
        </div>

        {/* RIGHT — Mascot */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[380px] w-[380px] rounded-full bg-primary/30 blur-3xl sm:h-[500px] sm:w-[500px]" />
          <div className="absolute h-[280px] w-[280px] rounded-full bg-orange-accent/40 blur-3xl" />

          {/* Speech bubble */}
          <AnimatePresence mode="wait">
            <motion.div
              key={easter ?? SPEECHES[msg]}
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              transition={{ duration: 0.35 }}
              className="absolute -top-2 left-2 z-20 sm:left-0"
            >
              <div className="relative rounded-2xl border-2 border-black bg-white px-4 py-2 font-display font-bold text-black shadow-[4px_4px_0_0_#F6B300]">
                {easter ?? SPEECHES[msg]}
                <div className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-b-2 border-r-2 border-black bg-white" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating badges */}
          <FloatingBadge className="absolute -left-2 top-16 sm:left-0" delay={0}>⚡ Fast</FloatingBadge>
          <FloatingBadge className="absolute right-0 top-8" delay={0.4}>🛡 Secure</FloatingBadge>
          <FloatingBadge className="absolute -left-4 bottom-16 sm:left-2" delay={0.8}>🐂 Bullish</FloatingBadge>
          <FloatingBadge className="absolute -right-2 bottom-4 sm:right-0" delay={1.2}>🚀 Community</FloatingBadge>

          <motion.button
            onClick={bullClick}
            data-cursor="hover"
            aria-label="Click the bull"
            animate={{ y: [0, -16, 0], rotate: wobble ? [0, -6, 6, -3, 0] : 0 }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.5 },
            }}
            whileHover={{ scale: 1.03 }}
            className="relative z-10 overflow-hidden rounded-[2.5rem] ring-4 ring-primary/60 glow-gold-strong"
          >
            <img
              src={bullLogo}
              alt="Bull Smart Chain mascot"
              className="h-[340px] w-[340px] object-cover sm:h-[440px] sm:w-[440px]"
              draggable={false}
            />
          </motion.button>

          {/* Floating coins */}
          <FloatingCoin className="absolute left-4 top-4" delay={0} />
          <FloatingCoin className="absolute right-6 top-24" delay={1.2} />
          <FloatingCoin className="absolute left-10 bottom-8" delay={2.4} />
        </div>
      </div>

      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {confetti.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: "40vh", x: `${p.x}vw`, opacity: 1, rotate: 0 }}
            animate={{ y: "120vh", rotate: 720, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ backgroundColor: p.c }}
            className="absolute h-2 w-2 rounded-sm"
          />
        ))}
      </div>
    </section>
  );
}

function FloatingBadge({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`z-20 rounded-full border border-primary/40 bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FloatingCoin({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], rotate: [0, 360] }}
      transition={{
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 6, repeat: Infinity, ease: "linear" },
      }}
      className={`z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD86B] to-[#FF8C00] font-display text-xs font-bold text-black shadow-[0_0_25px_rgba(246,179,0,0.6)] ${className}`}
    >
      $BSC
    </motion.div>
  );
}
