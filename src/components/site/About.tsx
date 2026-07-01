import { motion } from "framer-motion";
import bullLogo from "@/assets/bullogo.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src={bullLogo}
            alt=""
            className="relative h-72 w-72 rounded-3xl object-cover ring-2 ring-primary/40 rotate-3"
          />
          {["🐂", "💎", "🚀", "⚡"].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
              className={`absolute text-3xl ${
                ["top-2 -left-2", "-top-4 right-6", "-bottom-2 left-8", "bottom-4 -right-4"][i]
              }`}
            >
              {e}
            </motion.span>
          ))}
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold sm:text-5xl"
          >
            What is <span className="text-gradient-gold">Bull Smart Chain?</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Bull Smart Chain ($BSC) is more than a crypto project. It's a movement
              built around speed, security, strong community and unstoppable bullish energy.
            </p>
            <p>We believe every holder is part of the herd.</p>
            <p className="font-semibold text-white">
              Together we build. Together we charge. <span className="text-gradient-gold">Together we stay bullish.</span>
            </p>
            <div className="mt-6 rounded-2xl border border-primary/30 bg-black/50 px-6 py-4">
              <p className="text-sm font-semibold text-white">Contract Address (CA)</p>
              <p className="mt-2 font-mono text-sm text-primary break-all">
                0x5ac0e1d4ff5665cfd4c3cd39bc5dc24ed82affff
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
