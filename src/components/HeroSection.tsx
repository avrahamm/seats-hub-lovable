
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Users, Heart } from "lucide-react";

// Magen David (6-pointed star) component
const MagenDavid = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" transform="translate(0, 1)" />
    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" transform="translate(0, -1) rotate(180 12 12)" />
  </svg>
);

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Heart className="h-4 w-4 mr-2" />
            Free for our community
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to Homat Shmuel's 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              {" "}Community Seat & Hospitality Hub
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Share what you have. Find what you need. Make Shabbat feel like home for everyone.
          </p>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-blue-200 shadow-xl">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              A free platform for Homat Shmuel neighbors – locals, new folks, and guests. Everyone's welcome!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Synagogue Seats with Respect</h3>
                  <p className="text-gray-600">Mark your seat available when you're out. Find a seat or help someone feel at home for Shabbat and holidays.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hospitality for Special Events</h3>
                  <p className="text-gray-600">
                    <span className="text-blue-600 font-medium">(Coming soon)</span> Offer or ask for beds and meals for guests during family celebrations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-blue-800 font-medium text-center">
                🎯 Always free! This is a community thing, built by neighbors for neighbors.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              We're just starting, and your input matters! Join for early access 
              and help us build something special together.
            </p>
            
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Join the Waitlist - It's Free!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-gray-500">
              Be the first to know when we launch and help shape our community platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
