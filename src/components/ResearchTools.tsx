
import { Search, FileText, BarChart3, Upload, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResearchToolsProps {
  onToolSelect: (tool: string) => void;
}

const ResearchTools = ({ onToolSelect }: ResearchToolsProps) => {
  const mainTools = [
    {
      id: 'find-papers',
      title: 'Find papers',
      icon: Search,
      description: 'Search and explore academic literature'
    },
    {
      id: 'research-report',
      title: 'Research report',
      icon: FileText,
      description: 'Ask a question'
    },
    {
      id: 'systematic-review',
      title: 'Systematic review',
      icon: BarChart3,
      description: 'Ask, search, screen, and extract'
    }
  ];

  const additionalTools = [
    {
      id: 'upload-extract',
      title: 'Upload and extract',
      icon: Upload,
      description: 'Extract data from your papers'
    },
    {
      id: 'summarize-concepts',
      title: 'Summarize concepts',
      icon: Sparkles,
      description: 'Get concept summaries'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mainTools.map((tool) => (
          <Card
            key={tool.id}
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 border-2 hover:border-primary/20"
            onClick={() => onToolSelect(tool.id)}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <tool.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* More Tools */}
      <div>
        <h3 className="text-lg font-semibold mb-4">More tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalTools.map((tool) => (
            <Card
              key={tool.id}
              className="cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary/20"
              onClick={() => onToolSelect(tool.id)}
            >
              <CardContent className="p-4 flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <tool.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{tool.title}</h4>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchTools;
