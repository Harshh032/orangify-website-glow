
import { Plus, Search, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RecentPage = () => {
  const recentItems = [
    {
      title: "Brain Cancer Insights",
      type: "Notebook",
      time: "5:55pm yesterday"
    },
    {
      title: "Heart Regeneration Insights",
      type: "Notebook",
      time: "11:32am Jun 28"
    },
    {
      title: "Budget Impact Modeling in Multiple Sclerosis",
      type: "Notebook",
      time: "10:35pm Jun 24"
    }
  ];

  const newItems = [
    {
      title: "New notebook",
      description: "Search, extract, chat, and more",
      icon: "📓"
    },
    {
      title: "New research report",
      description: "Ask a question",
      icon: "📊"
    },
    {
      title: "New systematic review",
      description: "Ask, search, screen, and extract",
      icon: "🔍"
    }
  ];

  const tabs = ["All", "Created by you", "Shared with you", "Trash"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Recent</h1>
      
      {/* New Item Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {newItems.map((item, index) => (
          <Card key={index} className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{item.icon}</span>
                <Button variant="ghost" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-1">
          {tabs.map((tab, index) => (
            <Button
              key={tab}
              variant={index === 0 ? "default" : "ghost"}
              size="sm"
              className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
            >
              {tab}
            </Button>
          ))}
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for notebooks, reports, and reviews"
            className="pl-10 w-80"
          />
        </div>
      </div>

      {/* Recent Items List */}
      <div className="space-y-2">
        {recentItems.map((item, index) => (
          <Card key={index} className="cursor-pointer transition-all duration-200 hover:bg-muted/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-xs">📓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">{item.type}</span>
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentPage;
