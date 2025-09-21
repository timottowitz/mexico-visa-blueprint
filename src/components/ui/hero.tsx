import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <section className={`relative overflow-hidden ${className || ""}`}>
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {eyebrow && (
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">
                {eyebrow}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text-shadow leading-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCta && (
                <>
                  {primaryCta.href ? (
                    <Button asChild size="lg" className="btn-accent text-lg px-8 py-3">
                      <Link to={primaryCta.href}>
                        {primaryCta.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      size="lg" 
                      className="btn-accent text-lg px-8 py-3"
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
                    <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-3">
                      <Link to={secondaryCta.href}>
                        {secondaryCta.text}
                      </Link>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-3"
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