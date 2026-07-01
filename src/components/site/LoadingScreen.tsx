import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bullLogo from "@/assets/bullogo.jpg.asset.json";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.random() * 14 + 4);
      setPct(Math.floor(n));
      if (n >= 100) {
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            <div className="absolute inset-0 blur-3xl bg-primary/40 rounded-full" />
            <img
              src={bullLogo.url}
              alt="Bull Smart Chain"
              className="relative h-32 w-32 rounded-full object-cover ring-4 ring-primary glow-gold-strong"
            />
          </motion.div>
          <p className="mt-8 font-display text-xl font-bold text-gradient-gold">Charging...</p>
          <div className="mt-4 h-2 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF8C00] via-[#F6B300] to-[#FFD86B] glow-gold"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground tabular-nums">{pct}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
