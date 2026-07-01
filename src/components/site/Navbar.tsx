import { motion } from "framer-motion";
import bullLogo from "@/assets/bullogo.jpg.asset.json";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2">
          <img src={bullLogo.url} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-primary/60" />
          <span className="font-display font-bold tracking-tight">
            Bull <span className="text-gradient-gold">Smart Chain</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#why" className="hover:text-primary transition-colors">Why Bull</a>
          <a href="#stats" className="hover:text-primary transition-colors">Stats</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
        </div>
        <a
          href="#launch"
          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:glow-gold-strong"
        >
          Launch App
        </a>
      </nav>
    </motion.header>
  );
}
