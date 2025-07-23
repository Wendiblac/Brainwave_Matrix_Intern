import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Image, Calendar, Send } from "lucide-react";

const platforms = [
  { id: "facebook", name: "Facebook", color: "bg-facebook", checked: true },
  { id: "instagram", name: "Instagram", color: "bg-instagram", checked: true },
  { id: "twitter", name: "Twitter", color: "bg-twitter", checked: false },
  { id: "linkedin", name: "LinkedIn", color: "bg-linkedin", checked: true },
];

export function PostComposer() {
  const [content, setContent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState(
    platforms.filter(p => p.checked).map(p => p.id)
  );

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Quick Post</h3>
        <Badge variant="outline" className="bg-gradient-secondary text-white border-0">
          Composer
        </Badge>
      </div>

      <div className="space-y-4">
        <Textarea
          placeholder="What's happening? Share your thoughts with your audience..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-24 resize-none"
        />

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Publish to:</p>
          <div className="grid grid-cols-2 gap-3">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={platform.id}
                  checked={selectedPlatforms.includes(platform.id)}
                  onCheckedChange={() => togglePlatform(platform.id)}
                />
                <div className={`h-3 w-3 rounded-full ${platform.color}`}></div>
                <label
                  htmlFor={platform.id}
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  {platform.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Image className="h-4 w-4 mr-2" />
              Media
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
          </div>

          <Button 
            className="bg-gradient-primary hover:opacity-90 shadow-primary"
            disabled={!content.trim() || selectedPlatforms.length === 0}
          >
            <Send className="h-4 w-4 mr-2" />
            Post Now
          </Button>
        </div>
      </div>
    </Card>
  );
}