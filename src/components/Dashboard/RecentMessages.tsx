import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Reply } from "lucide-react";

const messages = [
  {
    id: 1,
    platform: "facebook",
    user: "Sarah Johnson",
    message: "Love your latest product launch! When will it be available?",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    platform: "instagram",
    user: "mike_photos",
    message: "Amazing content! Can you share the camera settings?",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: 3,
    platform: "twitter",
    user: "@techguru",
    message: "Great insights in your latest blog post. Would love to collaborate!",
    time: "1 hour ago",
    unread: false,
  },
  {
    id: 4,
    platform: "linkedin",
    user: "Alex Chen",
    message: "Interested in your consulting services. Let's connect!",
    time: "3 hours ago",
    unread: false,
  },
];

const platformColors = {
  facebook: "bg-facebook",
  instagram: "bg-instagram", 
  twitter: "bg-twitter",
  linkedin: "bg-linkedin",
};

export function RecentMessages() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Messages</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
              message.unread ? "bg-primary/5 border-primary/20" : "bg-muted/30 border-border"
            }`}
          >
            <div className={`h-3 w-3 rounded-full ${platformColors[message.platform as keyof typeof platformColors]} mt-2`}></div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-foreground">{message.user}</p>
                <span className="text-xs text-muted-foreground">{message.time}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {message.message}
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {message.platform}
                </Badge>
                {message.unread && (
                  <Badge variant="default" className="text-xs bg-primary">
                    New
                  </Badge>
                )}
              </div>
            </div>

            <Button variant="ghost" size="sm" className="shrink-0">
              <Reply className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}