import { Github, Twitter, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/5d14997b-75ca-4cc4-840a-9000606abb6c.png" alt="ZooZo AI Interview Bot" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">ZooZo</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Master your interview skills with AI-powered practice sessions. 
              Get personalized feedback and land your dream job with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          
          
          
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ZooZo AI Interview Bot. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;