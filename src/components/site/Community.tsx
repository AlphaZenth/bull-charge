import { motion } from "framer-motion";
import { Send } from "lucide-react";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.99L4.2 22H.94l8.03-9.18L1.5 2h7.02l4.85 6.4L18.244 2Zm-1.2 18h1.79L7.05 4H5.17l11.874 16Z" />
    </svg>
  );
}

export function Community() {
  return (
    <section id="community" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold sm:text-5xl"
        >
          Join the <span className="text-gradient-gold">Herd</span>
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Charge with thousands of bulls already stampeding on socials.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href="https://x.com/BullSmartChain"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-semibold backdrop-blur transition-all hover:border-primary hover:bg-primary/10"
          >
            <motion.span
              whileHover={{ rotate: 15 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black"
            >
              <XIcon className="h-4 w-4" />
            </motion.span>
            Follow on X
          </motion.a>
          <motion.a
            href="https://t.me/BullSmartChain"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-7 py-4 font-semibold backdrop-blur transition-all hover:bg-primary/20 hover:border-primary hover:glow-gold"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#28A8E9] to-[#0088cc] text-white"
            >
              <Send className="h-4 w-4" />
            </motion.span>
            Join Telegram
          </motion.a>
        </div>
      </div>
    </section>
  );
}
