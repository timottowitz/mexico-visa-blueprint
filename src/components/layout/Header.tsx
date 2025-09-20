import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const servicePages = [
    { title: "Temporary Residency", href: "/services/temporary-residency" },
    { title: "Permanent Residency", href: "/services/permanent-residency" },
    { title: "Mexican Citizenship", href: "/services/mexican-citizenship" },
    { title: "Family & Marriage Immigration", href: "/services/family-based-immigration" },
    { title: "Work Visas", href: "/services/work-visas" },
    { title: "Corporate Immigration", href: "/services/corporate-immigration" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ML</span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:block">
                Mexico Immigration Lawyer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {servicePages.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      to={service.href}
                      className={`block px-4 py-2 text-sm ${
                        isActivePath(service.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/blog") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>

            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/testimonials") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Testimonials
            </Link>

            <Link
              to="/attorneys"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/attorneys") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Attorneys
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About Us
            </Link>

            <Link
              to="/faqs"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/faqs") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActivePath("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="btn-professional">
              <Link to="/schedule-consultation">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus-professional"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-3 py-2">
                <div className="text-base font-medium text-muted-foreground mb-2">Services</div>
                <div className="ml-4 space-y-1">
                  {servicePages.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        isActivePath(service.href) ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/blog"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/blog") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/testimonials"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/testimonials") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>

              <Link
                to="/attorneys"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/attorneys") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Attorneys
              </Link>

              <Link
                to="/about"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/about") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/faqs"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/faqs") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>

              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActivePath("/contact") ? "text-primary bg-accent-muted" : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="px-3 py-2">
                <Button asChild className="btn-professional w-full" onClick={() => setIsMenuOpen(false)}>
                  <Link to="/schedule-consultation">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;