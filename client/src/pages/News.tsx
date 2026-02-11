import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlockButton } from "@/components/BlockButton";
import { BlockCard } from "@/components/BlockCard";

import { useNews } from "@/hooks/use-content";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

export default function News() {
    const { data: news } = useNews();

    return (
        <div className="min-h-screen bg-background font-body selection:bg-primary/30">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/news_hero.png" alt="News hero" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-background z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <h1 className="text-5xl md:text-6xl font-display font-black text-white mb-4 text-shadow-lg">
                        HEADLINES
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl">
                        Stay up to date with the latest patches, events, and community announcements.
                    </p>
                </div>
            </section>

            {/* NEWS GRID */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {news?.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-card text-card-foreground rounded-2xl overflow-hidden shadow-xl border border-border flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="h-56 bg-muted relative shrink-0">
                                    <img
                                        src={`/images/${item.imageUrl || 'news_placeholder.png'}`}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-muted-foreground mb-2">
                                        {item.publishedAt && format(new Date(item.publishedAt), 'MMMM dd, yyyy')}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                                        {item.content}
                                    </p>
                                    <BlockButton variant="outline" size="sm" className="w-full mt-auto">
                                        Read Article
                                    </BlockButton>
                                </div>
                            </motion.div>
                        )) || (
                                // Loading Skeletons
                                [1, 2, 3].map((n) => (
                                    <div key={n} className="h-96 rounded-2xl bg-muted animate-pulse border border-border" />
                                ))
                            )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
