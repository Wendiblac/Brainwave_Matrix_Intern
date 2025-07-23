import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Edit, Trash2 } from "lucide-react";

const upcomingPosts = [
  {
    id: 1,
    content: "Excited to announce our new product feature! 🚀 #innovation #tech",
    platforms: ["facebook", "linkedin"],
    scheduledTime: "Today, 2:00 PM",
    status: "scheduled",
  },
  {
    id: 2,
    content: "Behind the scenes of our latest photoshoot ✨ #photography #team",
    platforms: ["instagram"],
    scheduledTime: "Tomorrow, 10:00 AM",
    status: "scheduled",
  },
  {
    id: 3,
    content: "Join our webinar next week! Link in bio 📚 #education #webinar",
    platforms: ["twitter", "linkedin"],
    scheduledTime: "Mar 15, 3:00 PM",
    status: "draft",
  },
];

const platformColors = {
  facebook: "bg-facebook",
  instagram: "bg-instagram", 
  twitter: "bg-twitter",
  linkedin: "bg-linkedin",
};

export function UpcomingPosts() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Upcoming Posts</h3>
        <Button variant="outline" size="sm">
          View Calendar
        </Button>
      </div>

      <div className="space-y-4">
        {upcomingPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 rounded-lg border border-border hover:shadow-md transition-all duration-200 hover:border-primary/20"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-sm text-foreground line-clamp-2 mb-2">
                  {post.content}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {post.platforms.map((platform) => (
                    <div
                      key={platform}
                      className={`h-3 w-3 rounded-full ${platformColors[platform as keyof typeof platformColors]}`}
                    ></div>
                  ))}
                </div>
              </div>
              
              <Badge 
                variant={post.status === "scheduled" ? "default" : "secondary"}
                className="ml-2"
              >
                {post.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {post.scheduledTime}
              </div>
              
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm">
                  <Edit className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}