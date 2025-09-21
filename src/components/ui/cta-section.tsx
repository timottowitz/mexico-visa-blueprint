import { Button } from "@/components/ui/button";
import { Calendar, Phone, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "inline";
  className?: string;
}

const CTASection = ({ 
  title = "Need Help With Your Immigration Case?",
  description = "Our experienced immigration attorneys are ready to help you navigate the Mexico residency process. Get in touch today to discuss your specific situation.",
  variant = "default",
  className = ""
}: CTASectionProps) => {
  const openCalendlyPopup = () => {
    import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup());
  };

  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-r from-primary/5 to-primary-accent/5 rounded-lg p-6 my-8 ${className}`}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">{description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={openCalendlyPopup} size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Consultation
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 hover:border-green-600"
            asChild
          >
            <a href="https://wa.me/52322278690" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+12144734507">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`border-l-4 border-primary bg-primary/5 p-4 my-6 ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="font-semibold text-foreground mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button onClick={openCalendlyPopup} size="sm">
              <Calendar className="mr-1 h-3 w-3" />
              Consult
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-green-500 text-green-600 hover:bg-green-50"
              asChild
            >
              <a href="https://wa.me/52322278690" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1 h-3 w-3" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-r from-primary/10 to-primary-accent/10 rounded-lg p-8 my-12 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      
      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {/* Calendly Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="w-full mb-2"
            onClick={openCalendlyPopup}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Consultation
          </Button>
          <p className="text-sm text-muted-foreground">Book a free 30-minute consultation</p>
        </div>

        {/* WhatsApp Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="w-full mb-2 border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 hover:border-green-600"
            asChild
          >
            <a href="https://wa.me/52322278690" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Chat
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Instant messaging support</p>
        </div>

        {/* Phone Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="w-full mb-2"
            asChild
          >
            <a href="tel:+12144734507">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">Direct phone consultation</p>
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
        <p>
          <strong>US:</strong> +1 (214) 473-4507 | 
          <strong className="ml-2">WhatsApp:</strong> +52-322-278690
        </p>
        <p className="mt-1">Available Monday-Friday, 9 AM - 6 PM (CST)</p>
      </div>
    </div>
  );
};

export default CTASection;