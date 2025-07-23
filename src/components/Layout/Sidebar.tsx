import { 
  Home, 
  Inbox, 
  Calendar, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/", active: true },
  { icon: Inbox, label: "Inbox", href: "/inbox" },
  { icon: Calendar, label: "Scheduler", href: "/scheduler" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: MessageSquare, label: "Templates", href: "/templates" },
  { icon: Zap, label: "Automation", href: "/automation" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r border-border">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-border bg-gradient-primary">
        <h1 className="text-xl font-bold text-white">My Social Hub</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.href}
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-left",
                item.active && "bg-primary text-primary-foreground shadow-primary"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-secondary"></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">john@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}