import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/site/CustomCursor";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { WhyBull } from "@/components/site/WhyBull";
import { FootprintDivider } from "@/components/site/Divider";
import { Community } from "@/components/site/Community";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bull Smart Chain ($BSC) | Stay Bullish. Build Strong." },
      {
        name: "description",
        content:
          "Bull Smart Chain ($BSC) is a community-driven Binance Smart Chain project focused on speed, security, and bullish innovation. Join the herd and build the future together.",
      },
      {
        name: "keywords",
        content:
          "Bull Smart Chain, BSC Token, Binance Smart Chain, Crypto, Meme Coin, Community Token, Bullish, Web3",
      },
      { property: "og:title", content: "Bull Smart Chain ($BSC) | Stay Bullish. Build Strong." },
      {
        property: "og:description",
        content:
          "Community-driven BSC project fueled by speed, security, and bullish energy. Join the herd.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bull Smart Chain ($BSC)" },
      {
        name: "twitter:description",
        content: "Stay Bullish. Build Strong. Join the Bull Smart Chain herd.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bull Smart Chain",
          alternateName: "$BSC",
          url: "/",
          sameAs: ["https://x.com/BullSmartChain", "https://t.me/BullSmartChain"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <Hero />
      <FootprintDivider />
      <Stats />
      <About />
      <FootprintDivider />
      <WhyBull />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
}
