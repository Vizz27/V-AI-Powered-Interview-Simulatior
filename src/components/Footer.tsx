import { Github, Twitter, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border/50 py-12 bg-indigo-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" alt="V AI Interview Bot" className="w-8 h-8" />
              
            </div>
            <p className="mb-6 max-w-md text-slate-50">
              Master your interview skills with AI-powered practice sessions. 
              Get personalized feedback and land your dream job with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/vizz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Vizz27" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:vishwanath27ramnath@gmail.com" className="text-white hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-fuchsia-500">Other Projects</h3>
            <ul className="space-y-2">
              <li>
                
              </li>
              <li>
                <a href="https://v-resume-reviewer.lovable.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">V Resume Reviewer</a>
              </li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p className="text-slate-50">&copy; 2024 V AI Interview Bot. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;