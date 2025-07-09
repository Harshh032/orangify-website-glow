
import { useState } from "react";
import Header from "@/components/Header";
import ResearchTools from "@/components/ResearchTools";
import ResearchInterface from "@/components/ResearchInterface";
import RecentPage from "@/components/RecentPage";
import LibraryPage from "@/components/LibraryPage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Recent");
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool);
  };

  const renderContent = () => {
    if (activeTab === "Recent") {
      return <RecentPage />;
    }
    
    if (activeTab === "Library") {
      return <LibraryPage />;
    }
    
    if (activeTab === "Alerts") {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">Alerts</h1>
          <p className="text-muted-foreground">Set up alerts for new research in your areas of interest.</p>
        </div>
      );
    }

    // Default home page
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedTool ? (
          <div className="space-y-6">
            <button 
              onClick={() => setSelectedTool(null)}
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              ← Back to tools
            </button>
            <ResearchInterface tool={selectedTool} />
          </div>
        ) : (
          <ResearchTools onToolSelect={handleToolSelect} />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
