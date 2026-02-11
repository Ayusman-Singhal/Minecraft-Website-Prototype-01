import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlockButton } from "@/components/BlockButton";
import { BlockCard } from "@/components/BlockCard";
import { StatsTicker } from "@/components/StatsTicker";
import { useNews, useFeatures } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { ArrowRight, Star, Anchor, Shield, Map, Sword, Box, Copy, Check } from "lucide-react";
import { format } from "date-fns";
import { useLocation } from "wouter";
import { useState } from "react";


const FEATURES_ICONS: Record<string, any> = {
  "Quests": Map,
  "Items": Box,
  "Combat": Sword,
  "Ships": Anchor,
  "Islands": GlobeIcon, // Placeholder
};

function GlobeIcon(props: any) {
  return <Map {...props} />;
}

const SERVER_IP = "play.aetheria.gg";

export default function Home() {
  const { data: news } = useNews();
  const { data: features } = useFeatures();
  const [, navigate] = useLocation();
  const [copied, setCopied] = useState(false);

  const copyServerIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background font-body selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      <StatsTicker />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-background z-10" />
          {/* Static Background Image from Implementation Notes */}
          {/* Static Background Image from Implementation Notes */}
          <div className="absolute inset-0">
            <img src="/images/hero_bg.png" alt="Hero background" className="w-full h-full object-cover opacity-50" />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-bold text-sm mb-6 uppercase tracking-wider backdrop-blur-sm">
                The Pirates Have Landed!
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-[0.9] text-foreground mb-6 md:mb-8 text-shadow-lg">
                JOIN THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-500">
                  ADVENTURE
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-lg font-medium">
                Start on a small plot and transform it into a unique kingdom. Explore a boundless archipelago in the sky.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <BlockButton size="lg" onClick={copyServerIP} className="w-full sm:w-auto shadow-primary/25">
                  {copied ? <> Copied</> : <> Play Now</>}
                </BlockButton>
                <BlockButton variant="secondary" size="lg" onClick={() => window.open('https://discord.gg', '_blank')} className="w-full sm:w-auto shadow-secondary/25">
                  Join Discord
                </BlockButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <img
                src="/images/character_blue.png"
                alt="Hero character"
                className="w-full max-w-lg mx-auto aspect-[4/5] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Epic Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build your legacy in the stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features?.map((feature, i) => (
              <BlockCard key={feature.id} className="text-center group hover:border-primary transition-colors">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </BlockCard>
            )) || (
                /* Fallback / Loading State */
                [1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-64 bg-muted rounded-2xl animate-pulse" />
                ))
              )}
          </div>
        </div>
      </section>

      {/* GAMEPLAY SHOWCASE */}
      <section className="py-24 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/inventory_ui.png"
                alt="Custom inventory UI"
                className="w-full aspect-video object-cover shadow-2xl rounded-xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Limitless <span className="text-secondary">Customization</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 1,000 unique items, custom textures, and a proprietary building system, you can create anything from a cozy cottage to a massive space station.
              </p>

              <div className="space-y-4">
                {[
                  "Custom Resource Packs included",
                  "Unique furniture & decoration blocks",
                  "Player-driven economy system"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Latest News</h2>
              <p className="text-white/60">Stay updated with the latest changes.</p>
            </div>
            <BlockButton variant="outline" onClick={() => navigate('/news')} className="text-white border-white/20 hover:bg-white/10">
              View All News
            </BlockButton>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news?.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-card text-card-foreground rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="h-48 bg-muted relative">
                  <img
                    src={`/images/${item.imageUrl || 'news_placeholder.png'}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {item.publishedAt && format(new Date(item.publishedAt), 'MMM dd, yyyy')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-1">{item.title}</h3>
                  <p className="text-muted-foreground line-clamp-3 mb-6">
                    {item.content}
                  </p>
                  <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wider">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )) || (
                <p className="text-white/50">Loading updates...</p>
              )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-6 md:mb-8 text-foreground">
            READY TO START?
          </h2>
          <p className="text-lg sm:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            Join thousands of other players in the most friendly space community ever built.
          </p>
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <BlockButton size="lg" onClick={copyServerIP} className="relative text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6">
              {copied ? <> Copied</> : <> Copy Server IP</>}
            </BlockButton>
          </div>
          <p className="mt-6 text-sm text-muted-foreground font-mono">play.aetheria.gg</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
