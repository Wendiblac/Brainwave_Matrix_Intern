import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      {/* Search */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search messages, posts, or analytics..."
            className="pl-9"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-primary">
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
        
        <Button variant="outline" size="sm">
          <Bell className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}