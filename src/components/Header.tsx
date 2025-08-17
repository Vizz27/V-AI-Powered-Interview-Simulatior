import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" alt="V AI Interview Bot" className="w-10 h-10" />
          <span className="text-white text-xl font-semibold">V  The AI Powered Interview Simulator</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-white hover:text-primary transition-colors">
            How It Works
          </a>
          
        </nav>
        
        <div className="flex items-center space-x-4">
          
          
        </div>
      </div>
    </header>;
};
export default Header;