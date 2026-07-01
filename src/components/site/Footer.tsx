import { Send } from "lucide-react";
import bullLogo from "@/assets/bullogo.jpg";

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.99L4.2 22H.94l8.03-9.18L1.5 2h7.02l4.85 6.4L18.244 2Zm-1.2 18h1.79L7.05 4H5.17l11.874 16Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={bullLogo} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/50" />
          <div>
            <p className="font-display font-bold">Bull <span className="text-gradient-gold">Smart Chain</span></p>
            <p className="text-xs text-muted-foreground">Built for the community.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://x.com/BullSmartChain"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary hover:bg-primary hover:text-black"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <a
            href="https://t.me/BullSmartChain"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary hover:bg-primary hover:text-black"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Bull Smart Chain</p>
      </div>
    </footer>
  );
}
