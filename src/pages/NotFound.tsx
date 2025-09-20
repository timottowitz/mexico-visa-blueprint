import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild size="lg" className="btn-professional w-full">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Need help finding what you're looking for?</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/services/temporary-residency" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/faqs" className="hover:text-primary transition-colors">
              FAQs
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
