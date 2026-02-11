import { useServerStats } from "@/hooks/use-content";
import { Users, Signal, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function StatsTicker() {
  const { data: stats } = useServerStats();

  if (!stats) return null;

  return (
    <div className="w-full bg-foreground text-white py-3 border-b-4 border-black/10 overflow-hidden">
      <div className="container mx-auto px-4 flex justify-center md:justify-between items-center text-sm font-bold uppercase tracking-wider">
        <div className="hidden md:flex gap-8">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${stats.serverStatus === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
            <span className="opacity-60">Status:</span>
            <span className={stats.serverStatus === 'online' ? 'text-green-400' : 'text-red-400'}>
              {stats.serverStatus}
            </span>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <Users className="w-4 h-4 text-primary" />
            <span>
              <span className="text-primary text-lg">{stats.onlinePlayers.toLocaleString()}</span> Online
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <Globe className="w-4 h-4 text-secondary" />
            <span>
              <span className="text-secondary text-lg">{stats.registeredUsers.toLocaleString()}</span> Registered
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
