import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlockButton } from "@/components/BlockButton";
import { BlockCard } from "@/components/BlockCard";

import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

export default function Store() {
    return (
        <div className="min-h-screen bg-background font-body selection:bg-primary/30">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/store_hero.png" alt="Store hero" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <span className="inline-block px-4 py-2 bg-primary text-black font-bold rounded-full mb-6 animate-bounce">
                        SUMMER SALE - 30% OFF EVERYTHING
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 text-shadow-lg">
                        STORE
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                        Support the server and get exclusive cosmetics, ranks, and boosters.
                    </p>
                </div>
            </section>

            {/* RANKS */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* VIP RANK */}
                        <BlockCard className="relative border-green-500/50">
                            <div className="text-center mb-6">
                                <img src="/images/store_rank_vip.png" alt="VIP Rank" className="w-32 h-32 mx-auto mb-4 object-contain" />
                                <h2 className="text-3xl font-display font-bold text-green-600">VIP</h2>
                                <div className="text-4xl font-black mt-2">$9.99</div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {['Green Chat Color', '2x Vote Rewards', 'Access to /fly in Hub', 'Priority Queue'].map(f => (
                                    <li key={f} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600"><Check className="w-3 h-3" /></div>
                                        <span className="text-muted-foreground">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <BlockButton className="w-full bg-green-600 hover:bg-green-700 border-green-800">Buy VIP</BlockButton>
                        </BlockCard>

                        {/* MVP RANK - Featured */}
                        <BlockCard className="relative border-blue-500 transform lg:-translate-y-8 shadow-2xl z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap">
                                MOST POPULAR
                            </div>
                            <div className="text-center mb-6 pt-6">
                                <img src="/images/store_rank_mvp.png" alt="MVP Rank" className="w-40 h-40 mx-auto mb-4 object-contain" />
                                <h2 className="text-4xl font-display font-bold text-blue-600">MVP</h2>
                                <div className="text-5xl font-black mt-2">$24.99</div>
                            </div>
                            <ul className="space-y-4 mb-8 text-lg">
                                <li className="font-bold text-blue-600">Everything in VIP+</li>
                                {['Blue Chat Color', '4x Vote Rewards', 'Create 3 Guilds', 'Portable Workbench', 'Join Full Server'].map(f => (
                                    <li key={f} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Check className="w-4 h-4" /></div>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <BlockButton size="lg" className="w-full bg-blue-600 hover:bg-blue-700 border-blue-800 shadow-xl">Buy MVP</BlockButton>
                        </BlockCard>

                        {/* LEGEND RANK */}
                        <BlockCard className="relative border-yellow-500/50">
                            <div className="text-center mb-6">
                                <img src="/images/store_rank_legend.png" alt="Legend Rank" className="w-32 h-32 mx-auto mb-4 object-contain" />
                                <h2 className="text-3xl font-display font-bold text-yellow-500">LEGEND</h2>
                                <div className="text-4xl font-black mt-2">$49.99</div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="font-bold text-yellow-600">Everything in MVP+</li>
                                {['Gold Chat Color', '6x Vote Rewards', 'Custom Title', 'Particle Trails', 'Keep XP on Death'].map(f => (
                                    <li key={f} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"><Check className="w-3 h-3" /></div>
                                        <span className="text-muted-foreground">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <BlockButton className="w-full bg-yellow-500 hover:bg-yellow-600 border-yellow-700 text-black">Buy Legend</BlockButton>
                        </BlockCard>

                    </div>

                    <div className="mt-20 max-w-4xl mx-auto bg-muted/50 rounded-xl p-8 border border-border flex gap-6 items-start">
                        <Info className="w-8 h-8 text-muted-foreground shrink-0" />
                        <div>
                            <h3 className="font-bold text-lg mb-2">Payment Support</h3>
                            <p className="text-muted-foreground">
                                All payments are handled securely. If you have not received your package within 15 minutes, please contact support on our Discord server. Please note that chargebacks will result in a permanent ban from the network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
