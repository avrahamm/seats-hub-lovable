
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200">
            <MapPin className="h-4 w-4 mr-2" />
            Homat Shmuel Community
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to Homat Shmuel's 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-blue-600">
              {" "}Community Hub
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Easily manage synagogue seats and Shabbat hospitality—helping every neighbor feel at home!
          </p>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-amber-100 shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Synagogue Seat Sharing</h3>
                  <p className="text-gray-600">Mark your seat as available when you're away. Find free seats for guests, especially for Shabbat and holidays.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shabbat Hospitality</h3>
                  <p className="text-gray-600">
                    <span className="text-blue-600 font-medium">(Coming soon)</span> Request or offer a bed for Shabbat guests at family events.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              We're starting small and building together—sign up to join our early access list 
              and help us shape the next stage of our community!
            </p>
            
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-blue-600 hover:from-amber-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
