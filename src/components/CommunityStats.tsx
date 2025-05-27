
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Heart, Star } from "lucide-react";

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Community Members",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      number: "12",
      label: "Local Synagogues",
      color: "text-amber-600"
    },
    {
      icon: Heart,
      number: "100+",
      label: "Acts of Kindness",
      color: "text-green-600"
    },
    {
      icon: Star,
      number: "95%",
      label: "Satisfaction Rate",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-md bg-white/80 backdrop-blur text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
