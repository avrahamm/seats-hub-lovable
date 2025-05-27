
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, CheckCircle } from "lucide-react";

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
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you as soon as we launch. Thanks for joining our community!",
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You're On the List! 🎉</h2>
              <p className="text-xl text-gray-600 mb-6">
                Thank you for joining our community, {name}! We'll send you an email at{" "}
                <span className="font-semibold text-blue-600">{email}</span> as soon as we launch.
              </p>
              <p className="text-gray-500">
                Help us spread the word to other Homat Shmuel residents!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-r from-amber-50 to-blue-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur">
          <CardContent className="p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Waitlist</h2>
              <p className="text-xl text-gray-600">
                Get notified when we launch and be among the first to strengthen our community connections!
              </p>
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
                  className="w-full px-4 py-3 text-lg border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 text-lg border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-600 to-blue-600 hover:from-amber-700 hover:to-blue-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isLoading ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              We respect your privacy. No spam, just important updates about our community platform.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
