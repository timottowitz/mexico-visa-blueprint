import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const serviceLinks = [
    { title: "Temporary Residency", href: "/services/temporary-residency" },
    { title: "Permanent Residency", href: "/services/permanent-residency" },
    { title: "Mexican Citizenship", href: "/services/mexican-citizenship" },
    { title: "Family & Marriage Immigration", href: "/services/family-based-immigration" },
    { title: "Work Visas", href: "/services/work-visas" },
    { title: "Corporate Immigration", href: "/services/corporate-immigration" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">ML</span>
              </div>
              <span className="font-bold text-lg">Mexico Immigration Lawyer</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bilingual law firm serving clients from the United States and Canada. 
              Expert guidance for Mexico immigration, residency, and citizenship.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Av. Paseo de la Reforma 123, Piso 4</p>
                  <p>Col. Polanco, Miguel Hidalgo</p>
                  <p>CDMX 11560, Mexico</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <a href="tel:+525555551234" className="hover:text-accent transition-colors">
                    +52 (55) 5555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div>
                  <a href="tel:18001234567" className="hover:text-accent transition-colors">
                    1-800-123-4567 (US/Canada)
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@mexicoimmigrationlawyer.com" className="hover:text-accent transition-colors">
                  info@mexicoimmigrationlawyer.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <p>Mon–Fri, 9:00–18:00 (CT)</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-accent transition-colors">
                  Client Stories
                </Link>
              </li>
              <li>
                <Link to="/attorneys" className="hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
                  className="hover:text-accent transition-colors text-left"
                >
                  Schedule Consultation
                </button>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-accent transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Mexico Immigration Lawyer. All rights reserved. 
            This website provides general information and is not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;