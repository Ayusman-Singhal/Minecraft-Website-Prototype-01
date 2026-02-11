import { Link } from "wouter";
import { BlockButton } from "./BlockButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="font-display text-2xl font-bold tracking-tight text-foreground leading-tight">
            AETHER<span className="text-primary">IA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-semibold text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/about" className="font-semibold text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/news" className="font-semibold text-muted-foreground hover:text-primary transition-colors">News</Link>
          <Link href="/store" className="font-semibold text-muted-foreground hover:text-primary transition-colors">Store</Link>
          <BlockButton variant="primary" size="sm" onClick={() => window.open('https://discord.gg', '_blank')}>
            Join Discord
          </BlockButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground rounded-md hover:bg-muted/40 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/" className="font-bold text-lg" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="font-bold text-lg" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/news" className="font-bold text-lg" onClick={() => setIsOpen(false)}>News</Link>
              <Link href="/store" className="font-bold text-lg" onClick={() => setIsOpen(false)}>Store</Link>
              <BlockButton className="w-full" onClick={() => { window.open('https://discord.gg', '_blank'); setIsOpen(false); }}>Join Discord</BlockButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
