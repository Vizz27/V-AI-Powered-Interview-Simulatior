import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck, MessageCircle, BarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Choose Your Role",
      description: "Select your job role and experience level to get personalized questions",
      step: "01"
    },
    {
      icon: MessageCircle,
      title: "Practice Interview",
      description: "Engage with our AI interviewer using voice or text responses",
      step: "02"
    },
    {
      icon: BarChart,
      title: "Get Feedback",
      description: "Receive instant analysis and tips to improve your performance",
      step: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How <span className="text-primary">ZooZo</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with your AI-powered interview practice in just three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card-gradient rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 text-center h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Start Your First Interview
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;