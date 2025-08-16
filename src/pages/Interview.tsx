import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mic, Send, Volume2, Home, RotateCcw, ChevronRight, Briefcase, Code, Users, TrendingUp, Shield, Palette } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Interview = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [userResponse, setUserResponse] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [sessionScore, setSessionScore] = useState({ clarity: 0, relevance: 0, technical: 0, confidence: 0 });
  const [selectedRole, setSelectedRole] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);

  const roleOptions = [
    { id: "software-developer", name: "Software Developer", icon: Code, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { id: "product-manager", name: "Product Manager", icon: Briefcase, color: "bg-green-500/10 text-green-400 border-green-500/20" },
    { id: "ui-ux-designer", name: "UI/UX Designer", icon: Palette, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { id: "data-scientist", name: "Data Scientist", icon: TrendingUp, color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    { id: "cybersecurity", name: "Cybersecurity Analyst", icon: Shield, color: "bg-red-500/10 text-red-400 border-red-500/20" },
    { id: "hr-specialist", name: "HR Specialist", icon: Users, color: "bg-pink-500/10 text-pink-400 border-pink-500/20" }
  ];

  const questionsByRole: Record<string, Array<{text: string, type: string, difficulty: string}>> = {
    "software-developer": [
      { text: "Tell me about yourself and your background in software development.", type: "Behavioral", difficulty: "Basic" },
      { text: "Can you explain the difference between useState and useEffect hooks in React? Please provide an example.", type: "Technical", difficulty: "Intermediate" },
      { text: "Describe a challenging project you worked on and how you overcame the difficulties.", type: "Behavioral", difficulty: "Intermediate" },
      { text: "How would you optimize a React application's performance?", type: "Technical", difficulty: "Advanced" }
    ],
    "product-manager": [
      { text: "Tell me about your experience in product management and your approach to product strategy.", type: "Behavioral", difficulty: "Basic" },
      { text: "How do you prioritize features when you have limited resources and multiple stakeholders?", type: "Situational", difficulty: "Intermediate" },
      { text: "Describe a time when you had to pivot a product strategy. What led to that decision?", type: "Behavioral", difficulty: "Intermediate" },
      { text: "How would you measure the success of a new product feature?", type: "Technical", difficulty: "Advanced" }
    ],
    "ui-ux-designer": [
      { text: "Walk me through your design process from concept to final implementation.", type: "Behavioral", difficulty: "Basic" },
      { text: "How do you ensure your designs are accessible to users with disabilities?", type: "Technical", difficulty: "Intermediate" },
      { text: "Describe a time when stakeholders disagreed with your design decisions. How did you handle it?", type: "Behavioral", difficulty: "Intermediate" },
      { text: "How do you balance user needs with business requirements in your designs?", type: "Situational", difficulty: "Advanced" }
    ],
    "data-scientist": [
      { text: "Tell me about your background in data science and your preferred tools and technologies.", type: "Behavioral", difficulty: "Basic" },
      { text: "Explain the difference between supervised and unsupervised learning with examples.", type: "Technical", difficulty: "Intermediate" },
      { text: "Describe a challenging data problem you solved and your approach.", type: "Behavioral", difficulty: "Intermediate" },
      { text: "How would you handle missing data in a large dataset?", type: "Technical", difficulty: "Advanced" }
    ],
    "cybersecurity": [
      { text: "Tell me about your experience in cybersecurity and your areas of expertise.", type: "Behavioral", difficulty: "Basic" },
      { text: "Explain the concept of zero-trust security and its implementation.", type: "Technical", difficulty: "Intermediate" },
      { text: "Describe how you would respond to a security incident.", type: "Situational", difficulty: "Intermediate" },
      { text: "How do you stay updated with the latest security threats and vulnerabilities?", type: "Behavioral", difficulty: "Advanced" }
    ],
    "hr-specialist": [
      { text: "Tell me about your background in human resources and your approach to talent management.", type: "Behavioral", difficulty: "Basic" },
      { text: "How do you handle conflicts between team members?", type: "Situational", difficulty: "Intermediate" },
      { text: "Describe your experience with recruitment and what makes a good hiring process.", type: "Behavioral", difficulty: "Intermediate" },
      { text: "How do you measure employee satisfaction and engagement?", type: "Technical", difficulty: "Advanced" }
    ]
  };

  const getQuestions = () => {
    if (customRole) {
      return [
        { text: `Tell me about yourself and your background in ${customRole}.`, type: "Behavioral", difficulty: "Basic" },
        { text: `What are the key skills required for a ${customRole} role?`, type: "Technical", difficulty: "Intermediate" },
        { text: `Describe a challenging situation you faced in your ${customRole} experience.`, type: "Behavioral", difficulty: "Intermediate" },
        { text: `How do you stay updated with the latest trends in ${customRole}?`, type: "Behavioral", difficulty: "Advanced" }
      ];
    }
    return questionsByRole[selectedRole] || questionsByRole["software-developer"];
  };

  const questions = getQuestions();
  const currentQ = questions[currentQuestion];

  const getRoleDisplayName = () => {
    if (customRole) return customRole;
    const role = roleOptions.find(r => r.id === selectedRole);
    return role ? role.name : "Software Developer";
  };

  const handleStartInterview = () => {
    if (!selectedRole && !customRole) return;
    setInterviewStarted(true);
  };

  const generateFeedback = () => {
    const scores = {
      clarity: Math.floor(Math.random() * 3) + 7,
      relevance: Math.floor(Math.random() * 3) + 7,
      technical: Math.floor(Math.random() * 3) + 7,
      confidence: Math.floor(Math.random() * 3) + 7
    };
    setSessionScore(scores);
    setShowFeedback(true);
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setUserResponse("I have over 3 years of experience in React development, focusing on building scalable web applications...");
        setIsRecording(false);
        generateFeedback();
      }, 3000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserResponse("");
      setShowFeedback(false);
    }
  };

  if (!interviewStarted) {
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
                  src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" 
                  alt="V AI" 
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold text-foreground">V Interview</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Role Selection */}
            <Card className="bg-card-gradient border-border/50 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground mb-2">Select Your Interview Role</CardTitle>
                <p className="text-muted-foreground">Choose the position you're preparing for or enter your own</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Predefined Roles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {roleOptions.map((role) => {
                    const IconComponent = role.icon;
                    return (
                      <Button
                        key={role.id}
                        variant={selectedRole === role.id ? "default" : "outline"}
                        className={`h-auto p-4 flex flex-col items-center space-y-2 ${
                          selectedRole === role.id ? "ring-2 ring-primary" : ""
                        }`}
                        onClick={() => {
                          setSelectedRole(role.id);
                          setCustomRole("");
                        }}
                      >
                        <IconComponent className="h-6 w-6" />
                        <span className="text-sm font-medium">{role.name}</span>
                      </Button>
                    );
                  })}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-1 h-px bg-border"></div>
                  <span className="text-sm text-muted-foreground">or</span>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                {/* Custom Role Input */}
                <div className="space-y-3">
                  <Label htmlFor="custom-role" className="text-sm font-medium text-foreground">
                    Enter your own role
                  </Label>
                  <Input
                    id="custom-role"
                    placeholder="e.g., Marketing Manager, Financial Analyst, etc."
                    value={customRole}
                    onChange={(e) => {
                      setCustomRole(e.target.value);
                      setSelectedRole("");
                    }}
                    className="bg-input/20"
                  />
                </div>

                {/* Start Interview Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleStartInterview}
                    disabled={!selectedRole && !customRole}
                    className="px-8 py-3"
                  >
                    Start Interview
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

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
                src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" 
                alt="V AI" 
                className="w-8 h-8"
              />
              <span className="text-lg font-semibold text-foreground">V Interview</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
              Live Session
            </Badge>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Question Card */}
          <Card className="bg-card-gradient border-border/50 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" 
                      alt="AI Interviewer" 
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">AI Interviewer</CardTitle>
                    <p className="text-sm text-muted-foreground">{getRoleDisplayName()} Position</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {currentQ.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {currentQ.difficulty}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <img 
                    src="/lovable-uploads/2ac94e5b-f5c3-401c-8f8b-246e5e2feec9.png" 
                    alt="AI" 
                    className="w-4 h-4"
                  />
                </div>
                <div className="bg-muted/50 rounded-lg p-4 flex-1">
                  <p className="text-foreground text-lg leading-relaxed">
                    "{currentQ.text}"
                  </p>
                  <Button variant="ghost" size="sm" className="mt-3 h-8 px-2">
                    <Volume2 className="h-3 w-3 mr-1" />
                    Listen to Question
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Card */}
          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground text-lg">Your Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Button 
                    variant={isRecording ? "destructive" : "outline"}
                    onClick={handleVoiceInput}
                    className="flex-1"
                  >
                    <Mic className="h-4 w-4 mr-2" />
                    {isRecording ? "Stop Recording" : "Voice Response"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Send className="h-4 w-4 mr-2" />
                    Text Response
                  </Button>
                </div>
                
                <div className="min-h-[120px] bg-input/20 rounded-md p-4">
                  {isRecording ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="flex items-center space-x-2 text-primary">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span>Recording your response...</span>
                      </div>
                    </div>
                  ) : userResponse ? (
                    <p className="text-foreground">{userResponse}</p>
                  ) : (
                    <p className="text-muted-foreground italic">
                      Click "Voice Response" to speak your answer or "Text Response" to type...
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Card */}
          {showFeedback && (
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <RotateCcw className="h-5 w-5 mr-2 text-primary" />
                  AI Feedback & Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{sessionScore.clarity}</div>
                    <div className="text-muted-foreground font-medium">Clarity</div>
                    <div className="text-xs text-muted-foreground mt-1">Clear communication</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{sessionScore.relevance}</div>
                    <div className="text-muted-foreground font-medium">Relevance</div>
                    <div className="text-xs text-muted-foreground mt-1">On-topic response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{sessionScore.technical}</div>
                    <div className="text-muted-foreground font-medium">Technical</div>
                    <div className="text-xs text-muted-foreground mt-1">Technical accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{sessionScore.confidence}</div>
                    <div className="text-muted-foreground font-medium">Confidence</div>
                    <div className="text-xs text-muted-foreground mt-1">Delivery confidence</div>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">💡 Improvement Tips:</h4>
                  <ul className="text-muted-foreground space-y-1 text-sm">
                    <li>• Consider providing specific examples to support your points</li>
                    <li>• Try to structure your answer with clear beginning, middle, and end</li>
                    <li>• Include more technical details about implementation</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-6">
                  {currentQuestion < questions.length - 1 ? (
                    <Button onClick={handleNextQuestion} variant="hero">
                      Next Question
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <div className="text-center space-y-3">
                      <p className="text-foreground font-semibold">🎉 Interview Complete!</p>
                      <Button onClick={() => navigate("/")} variant="hero">
                        View Full Report
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interview;