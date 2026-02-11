import { useQuery } from "@tanstack/react-query";

// Types
export interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  publishedAt: string | Date;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

export interface ServerStats {
  onlinePlayers: number;
  registeredUsers: number;
  serverStatus: "online" | "maintenance" | "offline";
}

// Static Data
const MOCK_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Welcome to Aetheria!",
    content: "Start your adventure today. Join our Discord community to meet other players.",
    category: "Announcement",
    imageUrl: "news_hero.png",
    publishedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Patch Notes v1.2",
    content: "New islands discovered! Pirates have been spotted in the northern archipelago.",
    category: "Update",
    imageUrl: "feature_cards.png",
    publishedAt: new Date(Date.now() - 86400000).toISOString()
  }
];

const MOCK_FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Expand your own island and farm resources",
    description: "Your adventure begins on a modest 4x4 island. As you level up and master the land, watch your domain grow. Engage in farming and agriculture to sustain and enhance your island.",
    imageUrl: "feature_cards.png",
    order: 1
  },
  {
    id: 2,
    title: "Explore a boundless archipelago",
    description: "Set sail with your own boat and explore islands brimming with jovial pirates and hidden secrets. Delight in a tropical, cartoon-inspired world.",
    imageUrl: "hero_bg.png",
    order: 2
  },
  {
    id: 3,
    title: "Quests & Combat",
    description: "Battle through hordes of monsters and formidable bosses. Level up to gain character points and customize your abilities.",
    imageUrl: "character_blue.png",
    order: 3
  },
  {
    id: 4,
    title: "1000+ Items & Professions",
    description: "Craft, trade, and master unique items. Equip belts, rings, amulets, and backpacks alongside Minecraft's base items.",
    imageUrl: "inventory_ui.png",
    order: 4
  }
];

const MOCK_STATS: ServerStats = {
  onlinePlayers: 1243,
  registeredUsers: 45201,
  serverStatus: "online"
};

// Hooks
export function useNews() {
  return useQuery({
    queryKey: ["news"],
    queryFn: async () => MOCK_NEWS,
  });
}

export function useNewsItem(id: number) {
  return useQuery({
    queryKey: ["news", id],
    queryFn: async () => MOCK_NEWS.find(n => n.id === id),
    enabled: !!id,
  });
}

export function useFeatures() {
  return useQuery({
    queryKey: ["features"],
    queryFn: async () => MOCK_FEATURES,
  });
}

export function useServerStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: async () => MOCK_STATS,
    // No refetch interval needed for static data
  });
}
