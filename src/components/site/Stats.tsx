import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, Flame, Sprout } from "lucide-react";

const STATS = [
  { icon: Zap, label: "Fast Network", value: 99, suffix: "%", color: "from-[#F6B300] to-[#FF8C00]" },
  { icon: Shield, label: "Secure Community", value: 100, suffix: "K+", color: "from-[#FFD86B] to-[#F6B300]" },
  { icon: Flame, label: "Bullish Energy", value: 420, suffix: "%", color: "from-[#FF8C00] to-[#FF5500]" },
  { icon: Sprout, label: "Growing Ecosystem", value: 250, suffix: "+", color: "from-[#35E07F] to-[#F6B300]" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="stats" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center font-display text-4xl font-bold sm:text-5xl"
        >
          Powered by <span className="text-gradient-gold">the Herd</span>
        </motion.h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card-premium relative overflow-hidden rounded-2xl p-6 text-center"
            >
              <div className={`mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color}`}>
                <s.icon className="h-6 w-6 text-black" />
              </div>
              <div className="font-display text-3xl font-bold sm:text-4xl">
                <Counter value={s.value} run={inView} />
                {s.suffix}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, run }: { value: number; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [run, value]);
  return <span className="tabular-nums text-gradient-gold">{n}</span>;
}
