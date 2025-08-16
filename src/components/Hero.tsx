import { Button } from "@/components/ui/button";
import { PlayCircle, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" 
              alt="V AI Interview Bot" 
              className="w-24 h-24 animate-glow"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Master Your
            <span className="text-primary block">Interview Skills</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Practice with AI-powered mock interviews. Get personalized feedback, 
            improve your responses, and land your dream job with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => navigate("/interview")}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Mock Interview
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-muted-foreground text-foreground hover:bg-accent"
              onClick={() => navigate("/demo")}
            >
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <Target className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Feedback</h3>
              <p className="text-muted-foreground">Get instant, detailed analysis of your responses</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Role-Specific Questions</h3>
              <p className="text-muted-foreground">Practice with questions tailored to your field</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <PlayCircle className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Practice anytime, anywhere at your own pace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;