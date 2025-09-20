import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BreadcrumbNav from "@/components/ui/breadcrumb-nav";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import TemporaryResidency from "./pages/services/TemporaryResidency";
import PermanentResidency from "./pages/services/PermanentResidency";
import MexicanCitizenship from "./pages/services/MexicanCitizenship";
import FamilyBasedImmigration from "./pages/services/FamilyBasedImmigration";
import WorkVisas from "./pages/services/WorkVisas";
import CorporateImmigration from "./pages/services/CorporateImmigration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <BreadcrumbNav />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/services/temporary-residency" element={<TemporaryResidency />} />
                <Route path="/services/permanent-residency" element={<PermanentResidency />} />
                <Route path="/services/mexican-citizenship" element={<MexicanCitizenship />} />
                <Route path="/services/family-based-immigration" element={<FamilyBasedImmigration />} />
                <Route path="/services/work-visas" element={<WorkVisas />} />
                <Route path="/services/corporate-immigration" element={<CorporateImmigration />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
