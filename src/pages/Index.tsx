
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Users, Heart, Calendar, Home, Handshake, Mail, Phone, Info, Shield, MessageCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import WaitlistForm from "@/components/WaitlistForm";
import CommunityStats from "@/components/CommunityStats";

// Magen David (6-pointed star) component
const MagenDavid = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" transform="translate(0, 1)" />
    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" transform="translate(0, -1) rotate(180 12 12)" />
  </svg>
);

const Index = () => {
  const { toast } = useToast();

  const features = [
    {
      icon: MapPin,
      title: "Seat Sharing with Tradition",
      description: "Respectfully share your synagogue seat when you're away. Help fellow community members and guests find a place to daven, especially during Shabbat and holidays.",
      status: "Available Now",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: Home,
      title: "Hospitality for Special Events",
      description: "Connect families for meals and overnight stays during simchas and celebrations. Offer a bed, share a meal, or find what you need for your guests.",
      status: "Coming Soon",
      statusColor: "bg-gray-100 text-gray-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MagenDavid className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Homat Shmuel Hub</span>
          </div>
          <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">
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
        <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Steps to Help Your Neighbors</h2>
              <p className="text-xl text-gray-600">Your input matters as we build this together</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-blue-600" />
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
        <footer className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand Column */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <MagenDavid className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">Homat Shmuel Hub</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Share what you have. Find what you need. Make Shabbat feel like home for everyone.
                </p>
                <p className="text-sm text-gray-500">
                  Made with ❤️ by neighbors, for neighbors
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">Join Waitlist</a></li>
                  <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#community" className="text-gray-400 hover:text-white transition-colors">Community Stats</a></li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-400">About</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Community Guidelines
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:hello@homatshmuel.community" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      hello@homatshmuel.community
                    </a>
                  </li>
                  <li>
                    <a href="tel:+972-2-123-4567" className="text-gray-400 hover:text-white transition-colors flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      +972-2-123-4567
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-400 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Homat Shmuel, Jerusalem
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 mb-4 md:mb-0">
                  © 2024 Homat Shmuel Hub. Always free for our community.
                </p>
                <div className="bg-blue-900/50 px-4 py-2 rounded-lg border border-blue-800">
                  <p className="text-blue-300 text-sm font-medium">
                    🌟 Community-driven • Privacy-focused • Always free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
