import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlockButton } from "@/components/BlockButton";
import { BlockCard } from "@/components/BlockCard";

import { motion } from "framer-motion";
import { Shield, Sparkles, Users } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background font-body selection:bg-primary/30">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/about_hero.png" alt="About hero" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-black text-white mb-6 text-shadow-lg"
                    >
                        OUR STORY
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/80 max-w-2xl mx-auto"
                    >
                        From a small survival island to a galaxy-spanning empire.
                    </motion.p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="text-4xl font-display font-bold mb-6">The Legend of Aetheria</h2>
                            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                                It started with a single block in the void. Aetheria was founded on the principle that every player deserves their own corner of the universe. We wanted to create a server where creativity knows no bounds and the community comes first.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Today, we host thousands of players daily across our unique Skyblock realms. Our custom engine allows for seamless travel between islands, epic boss battles, and a player-driven economy that actually makes sense.
                            </p>
                        </div>
                        <BlockCard className="bg-muted/30 border-dashed">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/20 rounded-lg text-primary"><Shield className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">99.9% Uptime</h3>
                                        <p className="text-muted-foreground">Always online, always lag-free.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-secondary/20 rounded-lg text-secondary"><Users className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Friendly Community</h3>
                                        <p className="text-muted-foreground">Active staff and helpful players.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-orange-500/20 rounded-lg text-orange-500"><Sparkles className="w-6 h-6" /></div>
                                    <div>
                                        <h3 className="font-bold text-lg">Custom Enchants</h3>
                                        <p className="text-muted-foreground">Over 200+ custom coded abilities.</p>
                                    </div>
                                </div>
                            </div>
                        </BlockCard>
                    </div>

                    {/* TEAM MEMBERS */}
                    {(() => {
                        const team = [
                            {
                                name: "IronJack",
                                role: "Owner",
                                description: "Forged in PvP, built this world from bedrock up.",
                                color: "text-red-500",
                                bgColor: "bg-red-500/10",
                                borderColor: "border-red-500/30",
                                // Steve skin (classic MC)
                                avatar: "https://mc-heads.net/avatar/MHF_Steve/128"
                            },
                            {
                                name: "BlazeKnight",
                                role: "Admin",
                                description: "Keeps the peace and bans griefers before breakfast.",
                                color: "text-orange-500",
                                bgColor: "bg-orange-500/10",
                                borderColor: "border-orange-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Blaze/128"
                            },
                            {
                                name: "SlothCoder",
                                role: "Lead Dev",
                                description: "Writes plugins at 3 AM fueled by cookies and coffee.",
                                color: "text-blue-500",
                                bgColor: "bg-blue-500/10",
                                borderColor: "border-blue-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Ocelot/128"
                            },
                            {
                                name: "PixelJim",
                                role: "Dev",
                                description: "Custom items wizard. If it exists, he can code it.",
                                color: "text-cyan-500",
                                bgColor: "bg-cyan-500/10",
                                borderColor: "border-cyan-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Pig/128"
                            },
                            {
                                name: "FrostByte",
                                role: "Builder",
                                description: "Turns empty voids into entire civilizations overnight.",
                                color: "text-indigo-500",
                                bgColor: "bg-indigo-500/10",
                                borderColor: "border-indigo-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Golem/128"
                            },
                            {
                                name: "LunaWolf",
                                role: "Moderator",
                                description: "Community guardian — fair, friendly, and always watching.",
                                color: "text-purple-500",
                                bgColor: "bg-purple-500/10",
                                borderColor: "border-purple-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Wolf/128"
                            },
                            {
                                name: "CreeperQueen",
                                role: "Moderator",
                                description: "Quietly explosive personality. Don't mess with chat rules.",
                                color: "text-green-500",
                                bgColor: "bg-green-500/10",
                                borderColor: "border-green-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Creeper/128"
                            },
                            {
                                name: "EndyMcVoid",
                                role: "Support",
                                description: "Teleports into your DMs to solve any ticket, any time.",
                                color: "text-violet-500",
                                bgColor: "bg-violet-500/10",
                                borderColor: "border-violet-500/30",
                                avatar: "https://mc-heads.net/avatar/MHF_Enderman/128"
                            },
                        ];

                        return (
                            <>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-display font-bold mb-4">Meet the Team</h2>
                                    <p className="text-muted-foreground">The builders behind the blocks.</p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {team.map((member, i) => (
                                        <motion.div
                                            key={member.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            <BlockCard className={`text-center group hover:${member.borderColor} transition-colors h-full`}>
                                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-xl overflow-hidden border-4 border-background shadow-lg group-hover:scale-105 transition-transform" style={{ imageRendering: 'pixelated' }}>
                                                    <img
                                                        src={member.avatar}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover"
                                                        style={{ imageRendering: 'pixelated' }}
                                                    />
                                                </div>
                                                <h3 className="font-display font-bold text-lg md:text-xl mb-1">{member.name}</h3>
                                                <span className={`inline-block px-3 py-1 ${member.bgColor} ${member.color} rounded-full text-xs font-bold uppercase tracking-wider mb-3`}>
                                                    {member.role}
                                                </span>
                                                <p className="text-muted-foreground text-sm leading-relaxed hidden sm:block">{member.description}</p>
                                            </BlockCard>
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </div>
            </section>

            <Footer />
        </div>
    );
}
