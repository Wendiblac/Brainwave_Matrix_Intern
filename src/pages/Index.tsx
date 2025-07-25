import { 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Heart,
  Share2,
  Eye
} from "lucide-react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { RecentMessages } from "@/components/Dashboard/RecentMessages";
import { PostComposer } from "@/components/Dashboard/PostComposer";
import { UpcomingPosts } from "@/components/Dashboard/UpcomingPosts";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Wendy! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening with your social media accounts today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Messages"
                value="1,234"
                change="+12% from last week"
                changeType="positive"
                icon={MessageSquare}
              />
              <StatsCard
                title="Scheduled Posts"
                value="28"
                change="+5 this week"
                changeType="positive"
                icon={Calendar}
              />
              <StatsCard
                title="Engagement Rate"
                value="4.2%"
                change="+0.8% from last month"
                changeType="positive"
                icon={Heart}
              />
              <StatsCard
                title="Reach"
                value="45.6K"
                change="+2.1K this week"
                changeType="positive"
                icon={TrendingUp}
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <RecentMessages />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <PostComposer />
                <UpcomingPosts />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
