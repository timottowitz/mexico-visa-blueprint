import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-consultation.png";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  className?: string;
  children?: ReactNode;
}

const Hero = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className,
  children,
}: HeroProps) => {
  const heroBackground = backgroundImage || heroImage;
  
  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          {eyebrow && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white hero-text-shadow leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCta && (
                <>
                  {primaryCta.href ? (
                    <Button asChild size="lg" className="btn-accent text-lg px-8 py-3 shadow-lg">
                      <Link to={primaryCta.href}>
                        {primaryCta.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      size="lg" 
                      className="btn-accent text-lg px-8 py-3 shadow-lg"
                      onClick={primaryCta.onClick}
                    >
                      {primaryCta.text}
                    </Button>
                  )}
                </>
              )}
              
              {secondaryCta && (
                <>
                  {secondaryCta.href ? (
                    <Button asChild variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-3 backdrop-blur-sm">
                      <Link to={secondaryCta.href}>
                        {secondaryCta.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-3 backdrop-blur-sm"
                      onClick={secondaryCta.onClick}
                    >
                      {secondaryCta.text}
                    </Button>
                  )}
                </>
              )}
            </div>
          )}
          
          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;