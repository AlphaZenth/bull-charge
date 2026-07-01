import { motion } from "framer-motion";
import bullLogo from "@/assets/bullogo.jpg";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-to-br from-[#1a1207] via-[#111] to-[#0a0a0a] px-8 py-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,179,0,0.25),transparent_60%)]" />
          <motion.img
            animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={bullLogo}
            alt=""
            className="relative mx-auto h-24 w-24 rounded-2xl object-cover ring-2 ring-primary glow-gold"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-6 font-display text-4xl font-bold sm:text-6xl"
          >
            Ready To <span className="text-gradient-gold">Charge?</span>
          </motion.h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Become part of the Bull Smart Chain movement today.
            <br />Stay Bullish. Build Strong.
          </p>
          <motion.a
            href="https://t.me/BullSmartChain"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(246,179,0,0.4)",
                "0 0 60px rgba(246,179,0,0.7)",
                "0 0 30px rgba(246,179,0,0.4)",
              ],
            }}
            transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
            className="relative mt-8 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#FF8C00] via-[#F6B300] to-[#FFD86B] px-10 py-5 text-lg font-bold text-black"
          >
            🐂 Join Bull Army
          </motion.a>
        </div>
      </div>
    </section>
  );
}
