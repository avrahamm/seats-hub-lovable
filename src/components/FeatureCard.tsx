
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: string;
  statusColor: string;
}

const FeatureCard = ({ icon: Icon, title, description, status, statusColor }: FeatureCardProps) => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-blue-100 rounded-xl flex items-center justify-center">
            <Icon className="h-6 w-6 text-amber-600" />
          </div>
          <Badge className={statusColor}>
            {status}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
