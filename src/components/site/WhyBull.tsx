import { motion } from "framer-motion";
import { Zap, ShieldCheck, Users, TrendingUp } from "lucide-react";

const CARDS = [
  { icon: Zap, title: "Fast", text: "Lightning-fast ecosystem built for real-world speed." },
  { icon: ShieldCheck, title: "Secure", text: "Built for long-term believers with audited foundations." },
  { icon: Users, title: "Community First", text: "Every holder matters. The herd runs the show." },
  { icon: TrendingUp, title: "Bullish Future", text: "Always charging forward. Never looking back." },
];

export function WhyBull() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl font-bold sm:text-5xl"
        >
          Why <span className="text-gradient-gold">Bull?</span>
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Four reasons the herd keeps growing every single day.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -10, rotate: -1 }}
              className="group card-premium relative overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/60 hover:glow-gold"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD86B] to-[#FF8C00] text-black">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
