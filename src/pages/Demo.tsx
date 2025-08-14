import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Send, Volume2, Home, Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "AI asks a question",
      description: "Watch how our AI interviewer presents realistic questions",
      action: "Question presented"
    },
    {
      title: "Candidate responds",
      description: "See different ways to provide your answer",
      action: "Response recorded"
    },
    {
      title: "Instant feedback",
      description: "Get immediate analysis and improvement tips",
      action: "Feedback generated"
    }
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    
    // Simulate demo progression
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= demoSteps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="p-2">
              <Home className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5d14997b-75ca-4cc4-840a-9000606abb6c.png" 
                alt="ZooZo AI" 
                className="w-8 h-8"
              />
              <span className="text-lg font-semibold text-foreground">ZooZo Demo</span>
            </div>
          </div>
          
          <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
            Interactive Demo
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Demo Introduction */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              See ZooZo in <span className="text-primary">Action</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience how our AI-powered interview system works step by step
            </p>
            
            <Button 
              onClick={startDemo} 
              variant="hero" 
              size="lg" 
              disabled={isPlaying}
              className="text-lg px-8 py-6"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Demo Running...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Start Interactive Demo
                </>
              )}
            </Button>
          </div>

          {/* Demo Progress */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4">
              {demoSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-all ${
                    index <= currentStep ? 'bg-primary/10 text-primary' : 'bg-muted/20 text-muted-foreground'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Interface */}
          <Card className="bg-card-gradient border-border/50 shadow-2xl">
            <CardHeader className="border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/5d14997b-75ca-4cc4-840a-9000606abb6c.png" 
                      alt="ZooZo AI" 
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">AI Interviewer</CardTitle>
                    <p className="text-sm text-muted-foreground">Software Developer - React Demo</p>
                  </div>
                </div>
                <Badge variant="secondary" className={`${
                  isPlaying ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-muted/20'
                }`}>
                  {isPlaying ? 'Demo Active' : 'Demo Ready'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* AI Question */}
                <div className={`transition-all duration-500 ${currentStep >= 0 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <img 
                        src="/lovable-uploads/5d14997b-75ca-4cc4-840a-9000606abb6c.png" 
                        alt="AI" 
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 flex-1">
                      <p className="text-foreground">
                        "Can you explain the difference between useState and useEffect hooks in React? 
                        Please provide an example of when you would use each one."
                      </p>
                      <Button variant="ghost" size="sm" className="mt-2 h-8 px-2">
                        <Volume2 className="h-3 w-3 mr-1" />
                        Listen
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* User Response Area */}
                <div className={`transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="bg-accent/30 rounded-lg p-4 border-2 border-dashed border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Your Response</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Mic className="h-4 w-4 mr-1" />
                          Voice
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="h-4 w-4 mr-1" />
                          Text
                        </Button>
                      </div>
                    </div>
                    
                    <div className="min-h-[100px] bg-input/20 rounded-md p-3">
                      {currentStep >= 1 ? (
                        <p className="text-foreground">
                          "useState is used for managing component state, like storing form data or toggle states. 
                          useEffect is for side effects like API calls or subscriptions. For example, useState for 
                          a counter: const [count, setCount] = useState(0), and useEffect for fetching data when 
                          component mounts: useEffect(() =&gt; fetchData(), [])."
                        </p>
                      ) : (
                        <p className="text-muted-foreground italic">
                          Click "Voice" to speak your answer or "Text" to type your response...
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Feedback Preview */}
                <div className={`transition-all duration-500 ${currentStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Instant AI Feedback</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">8.5</div>
                        <div className="text-muted-foreground">Clarity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">9.0</div>
                        <div className="text-muted-foreground">Relevance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">8.0</div>
                        <div className="text-muted-foreground">Technical</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">8.5</div>
                        <div className="text-muted-foreground">Confidence</div>
                      </div>
                    </div>
                    
                    {currentStep >= 2 && (
                      <div className="bg-muted/30 rounded-lg p-3">
                        <h5 className="font-medium text-foreground mb-2">💡 Improvement Tips:</h5>
                        <ul className="text-muted-foreground space-y-1 text-xs">
                          <li>• Excellent explanation of both hooks with clear examples</li>
                          <li>• Consider mentioning dependency arrays for useEffect</li>
                          <li>• Great technical accuracy and practical examples</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Call to Action */}
          <div className="text-center mt-8 space-y-4">
            <p className="text-muted-foreground">
              Ready to start your own interview practice?
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => navigate("/interview")} 
                variant="hero" 
                size="lg"
              >
                Start Real Interview
              </Button>
              <Button 
                onClick={() => navigate("/")} 
                variant="outline" 
                size="lg"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;