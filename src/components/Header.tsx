import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/5d14997b-75ca-4cc4-840a-9000606abb6c.png" alt="ZooZo AI Interview Bot" className="w-10 h-10" />
          <span className="text-2xl font-bold text-foreground">ZooZo</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          
        </nav>
        
        <div className="flex items-center space-x-4">
          
          
        </div>
      </div>
    </header>;
};
export default Header;