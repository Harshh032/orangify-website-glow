
import { Search, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Elicit</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-1">
              {['Recent', 'Library', 'Alerts'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => onTabChange(tab)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">Holly Varnell</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
