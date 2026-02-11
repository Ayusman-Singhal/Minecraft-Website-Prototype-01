import { Link } from "wouter";
import { BlockCard } from "@/components/BlockCard";
import { BlockButton } from "@/components/BlockButton";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <BlockCard className="max-w-md w-full text-center py-12">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">404</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Oops! It seems you've drifted too far into deep space. This planet doesn't exist.
        </p>

        <Link href="/">
          <BlockButton className="w-full">
            Return to Base
          </BlockButton>
        </Link>
      </BlockCard>
    </div>
  );
}
