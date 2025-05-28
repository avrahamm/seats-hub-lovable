
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Users, Heart, Star, Calendar, Home, Handshake } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import WaitlistForm from "@/components/WaitlistForm";
import CommunityStats from "@/components/CommunityStats";

const Index = () => {
  const { toast } = useToast();

  const features = [
    {
      icon: MapPin,
      title: "Seat Sharing with Tradition",
      description: "Respectfully share your synagogue seat when you're away. Help fellow community members and guests find a place to daven, especially during Shabbat and holidays.",
      status: "Available Now",
      statusColor: "bg-green-100 text-green-800"
    },
    {
      icon: Home,
      title: "Hospitality for Special Events",
      description: "Connect families for meals and overnight stays during simchas and celebrations. Offer a bed, share a meal, or find what you need for your guests.",
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
          <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
            Always Free
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
                How Seat-Sharing Works (Practically & Respectfully)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Share what you have, find what you need. Built with respect for our customs 
                and traditions, designed to bring our community closer together.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Steps to Help Your Neighbors</h2>
              <p className="text-xl text-gray-600">Your input matters as we build this together</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
                  <p className="text-gray-600">Connect with your Homat Shmuel neighbors - locals, newcomers, and guests are all welcome!</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Share & Discover</h3>
                  <p className="text-gray-600">Mark your seat available or find open seats for your guests. It's that simple!</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Build Together</h3>
                  <p className="text-gray-600">Help us grow this platform with your feedback and make Shabbat feel like home for everyone.</p>
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
                Share what you have. Find what you need. Make Shabbat feel like home for everyone.
              </p>
              <p className="text-sm text-gray-500">
                Made with ❤️ by neighbors, for neighbors • Always free for our community
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
