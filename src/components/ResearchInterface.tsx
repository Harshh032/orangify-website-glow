
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface ResearchInterfaceProps {
  tool: string;
}

const ResearchInterface = ({ tool }: ResearchInterfaceProps) => {
  const [query, setQuery] = useState("");
  const [populateSteps, setPopulateSteps] = useState(true);

  const getToolConfig = () => {
    switch (tool) {
      case 'find-papers':
        return {
          title: 'Find Papers',
          placeholder: 'Ask a research question to search and explore academic literature',
          examples: ['GLP-1R mechanisms', 'Magnesium effects on sleep', 'Online vs. in-person CBT']
        };
      case 'research-report':
        return {
          title: 'Research Report',
          placeholder: 'Ask a research question to generate a structured research report',
          examples: ['What are the effects of meditation on anxiety?', 'How does remote work impact productivity?', 'What are the latest developments in CRISPR technology?']
        };
      case 'systematic-review':
        return {
          title: 'Systematic Review',
          placeholder: 'Ask a research question to screen and extract data from papers',
          examples: ['Effectiveness of cognitive behavioral therapy for depression', 'Impact of exercise on cardiovascular health', 'Machine learning applications in healthcare']
        };
      default:
        return {
          title: 'Research Query',
          placeholder: 'Enter your research question...',
          examples: []
        };
    }
  };

  const config = getToolConfig();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-2">
        <CardContent className="p-6">
          <div className="space-y-4">
            <Textarea
              placeholder={config.placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-32 resize-none text-base"
            />
            
            {tool === 'systematic-review' && (
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="populate-steps"
                  checked={populateSteps}
                  onCheckedChange={(checked) => setPopulateSteps(checked as boolean)}
                />
                <label htmlFor="populate-steps" className="text-sm text-muted-foreground">
                  Populate steps with suggestions based on research question
                </label>
              </div>
            )}
            
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {config.examples.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-3">
            Try a couple of free examples to see what this is all about
          </p>
          <div className="flex flex-wrap gap-2">
            {config.examples.map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setQuery(example)}
                className="text-sm hover:bg-primary/10 hover:border-primary/20"
              >
                {example}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchInterface;
