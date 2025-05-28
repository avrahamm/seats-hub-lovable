
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle, Heart } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Waitlist signup:", { name, email });
      setIsSubmitted(true);
      setIsLoading(false);
      
      toast({
        title: "Welcome to our community! 🎉",
        description: "We'll let you know as soon as we launch. Thanks for helping us build this together!",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You're In! Welcome to Our Community! 🎉</h2>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for joining us, {name}! We'll send you an email at{" "}
                <span className="font-semibold text-blue-600">{email}</span> as soon as we launch.
              </p>
              <p className="text-gray-500 mb-4">
                Help us spread the word to other Homat Shmuel neighbors!
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">
                  💡 Your feedback will help shape how this platform grows
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community (It's Free!)</h2>
              <p className="text-xl text-gray-600 mb-4">
                Be the first to know when we launch and help us build something special together!
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <p className="text-blue-700 font-medium">
                  🌟 Your input matters as we grow this platform with community feedback
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isLoading ? "Joining..." : "Join the Community - Free Forever!"}
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              We respect your privacy. No spam, just community updates. Always free!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
