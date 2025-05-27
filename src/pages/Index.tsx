
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Users, Heart, Star, Calendar, Home } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import WaitlistForm from "@/components/WaitlistForm";
import CommunityStats from "@/components/CommunityStats";

const Index = () => {
  const { toast } = useToast();

  const features = [
    {
      icon: MapPin,
      title: "Synagogue Seat Sharing",
      description: "Mark your seat as available when you're away. Help guests and visitors find a place to daven with the community.",
      status: "Available Now",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: Home,
      title: "Shabbat Hospitality",
      description: "Connect families for Shabbat meals and overnight stays during simchas and special occasions.",
      status: "Coming Soon",
      statusColor: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-amber-600 fill-current" />
            <span className="text-2xl font-bold text-gray-900">Homat Shmuel Hub</span>
          </div>
          <Badge variant="outline" className="text-amber-700 border-amber-200">
            Early Access
          </Badge>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Community Stats */}
        <CommunityStats />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Strengthening Our Community, One Connection at a Time
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you need a place to sit for davening or want to share the joy of Shabbat, 
                our platform makes it easy to support each other.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Simple steps to help your neighbors</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Join the Community</h3>
                  <p className="text-gray-600">Sign up and verify your Homat Shmuel residency to access all features.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Share & Discover</h3>
                  <p className="text-gray-600">Mark your seat as available or find open seats for your guests.</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Build Connections</h3>
                  <p className="text-gray-600">Strengthen community bonds through acts of kindness and hospitality.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <WaitlistForm />

        {/* Footer */}
        <footer className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-amber-400 fill-current" />
                <span className="text-xl font-bold">Homat Shmuel Hub</span>
              </div>
              <p className="text-gray-400 mb-6">
                Building stronger community connections, one neighbor at a time.
              </p>
              <p className="text-sm text-gray-500">
                Made with ❤️ for the Homat Shmuel community
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
