import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon?: ReactNode;
  image?: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ServiceCard = ({ icon, image, title, description, href, className }: ServiceCardProps) => {
  return (
    <Card className={`card-hover group ${className || ""}`}>
      <CardHeader className="pb-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <div className="text-primary">
              {icon}
            </div>
          </div>
        )}
        {image && (
          <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
            <img 
              src={image} 
              alt={`${title} - Mexico immigration legal service illustration showing professional consultation and document assistance`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </CardDescription>
        <Button asChild variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover group">
          <Link to={href} className="flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;