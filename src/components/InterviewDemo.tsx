import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Send, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
const InterviewDemo = () => {
  const navigate = useNavigate();
  return <section className="py-20 bg-indigo-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-50 md:text-5xl">
            Experience the <span className="text-primary">Future</span> of Interview Prep
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-slate-50">
            See how our AI interviewer provides realistic practice sessions with instant feedback
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border/50 shadow-2xl">
            <CardHeader className="border-b border-border/50 bg-slate-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <img src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" alt="V AI" className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">AI Interviewer</CardTitle>
                    <p className="text-sm text-slate-950">Software Developer - React</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-green-400 border-green-500/20 bg-green-950">
                  Live Session
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 bg-fuchsia-50">
              <div className="space-y-6">
                {/* AI Question */}
                <div className="flex space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-50">
                    <img src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" alt="AI" className="w-4 h-4" />
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
                
                {/* User Response Area */}
                <div className="bg-accent/30 rounded-lg p-4 border-2 border-dashed border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-950">Your Response</span>
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
                  
                  <div className="min-h-[100px] bg-input/20 rounded-md p-3 text-muted-foreground italic">
                    Click "Voice" to speak your answer or "Text" to type your response...
                  </div>
                </div>
                
                {/* Feedback Preview */}
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2">Instant AI Feedback</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">8.5</div>
                      <div className="text-muted-foreground">Clarity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">9.0</div>
                      <div className="text-muted-foreground">Relevance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">7.5</div>
                      <div className="text-muted-foreground">Technical</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">8.0</div>
                      <div className="text-muted-foreground">Confidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <Button variant="hero" size="lg" onClick={() => navigate("/demo")}>
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default InterviewDemo;