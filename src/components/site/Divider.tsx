import { motion } from "framer-motion";

export function FootprintDivider() {
  return (
    <div className="relative h-16 overflow-hidden">
      <div className="absolute inset-y-0 left-0 right-0 flex items-center gap-8 text-primary/40">
        <motion.div
          animate={{ x: ["-10%", "10%"] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="flex gap-10 whitespace-nowrap text-2xl"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}>🐾 🐂 🐾 🐂</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
