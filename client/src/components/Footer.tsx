import { Link } from "wouter";
import { Twitter, Youtube, Disc } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-3xl font-bold mb-6 text-primary">AETHERIA</h2>
            <p className="text-card-foreground/70 text-lg max-w-md mb-8">
              Join the ultimate space adventure. Build your island, explore the archipelago, and battle with friends in a boundless universe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-muted/40 rounded-xl hover:bg-primary hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-muted/40 rounded-xl hover:bg-primary hover:text-black transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-muted/40 rounded-xl hover:bg-primary hover:text-black transition-colors">
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/wiki" className="text-black/60 hover:text-black transition-colors">Wiki</Link></li>
              <li><Link href="/rules" className="text-black/60 hover:text-black transition-colors">Server Rules</Link></li>
              <li><Link href="/support" className="text-black/60 hover:text-black transition-colors">Support</Link></li>
              <li><Link href="/status" className="text-black/60 hover:text-black transition-colors">Status</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-black">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-black/60 hover:text-black transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-black/60 hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/impressum" className="text-black/60 hover:text-black transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-black/60 text-sm">
          <p>© 2024 Aetheria. Not affiliated with Mojang AB.</p>
          <p>Designed with pixel love.</p>
        </div>
      </div>
    </footer>
  );
}
