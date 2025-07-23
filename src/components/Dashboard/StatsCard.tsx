import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, changeType, icon: Icon }: StatsCardProps) {
  const changeColor = {
    positive: "text-success",
    negative: "text-destructive",
    neutral: "text-muted-foreground",
  }[changeType];

  return (
    <Card className="p-6 hover:shadow-md transition-all duration-200 border-border/50 hover:border-primary/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
          <p className={`text-xs font-medium mt-1 ${changeColor}`}>
            {change}
          </p>
        </div>
        <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </Card>
  );
}