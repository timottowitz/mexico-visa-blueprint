import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const BreadcrumbNav = () => {
  const location = useLocation();
  
  const breadcrumbs = useMemo(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    
    // Map paths to readable labels
    const pathLabels: Record<string, string> = {
      "services": "Services",
      "temporary-residency": "Temporary Residency",
      "permanent-residency": "Permanent Residency", 
      "mexican-citizenship": "Mexican Citizenship",
      "family-based-immigration": "Family & Marriage Immigration",
      "work-visas": "Work Visas",
      "corporate-immigration": "Corporate Immigration",
      "about": "About Us",
      "faqs": "FAQs",
      "contact": "Contact",
    };
    
    let currentPath = "";
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      const isLast = index === paths.length - 1;
      
      items.push({
        label: pathLabels[path] || path,
        href: isLast ? undefined : currentPath,
      });
    });
    
    return items;
  }, [location.pathname]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-muted/30 border-b" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium flex items-center">
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;