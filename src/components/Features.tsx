import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MessageSquare, BarChart3, Brain, Clock, Zap } from "lucide-react";
const Features = () => {
  const features = [{
    icon: Brain,
    title: "AI Interview Simulation",
    description: "Realistic interview scenarios powered by advanced AI technology",
    details: "Experience natural conversations with our AI interviewer that adapts to your responses"
  }, {
    icon: Mic,
    title: "Voice & Text Input",
    description: "Practice speaking or typing your responses",
    details: "Choose your preferred method - voice recognition or text input for maximum flexibility"
  }, {
    icon: BarChart3,
    title: "Instant Feedback",
    description: "Get detailed analysis of your performance",
    details: "Receive scores on clarity, relevance, confidence, and technical accuracy"
  }, {
    icon: MessageSquare,
    title: "Role-Specific Questions",
    description: "Tailored questions for different job roles and industries",
    details: "From software development to management - practice with relevant questions"
  }, {
    icon: Clock,
    title: "Flexible Difficulty",
    description: "Adjustable complexity levels from basic to expert",
    details: "Start with fundamentals and progress to advanced interview scenarios"
  }, {
    icon: Zap,
    title: "Immediate Results",
    description: "No waiting - get your feedback instantly",
    details: "Real-time analysis helps you improve on the spot and track progress"
  }];
  return <section id="features" className="py-20 bg-indigo-950">
      <div className="container mx-auto px-6 bg-indigo-950">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-fuchsia-500 md:text-6xl">
            Powerful Features for
            <span className="text-primary block">Interview Success</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-slate-50">
            Everything you need to ace your next interview, powered by cutting-edge AI technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-slate-50">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-50">
                  {feature.details}
                </p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Features;