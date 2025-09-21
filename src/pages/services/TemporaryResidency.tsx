import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/ui/cta-section";
import { Link } from "react-router-dom";
import { FileText, Calendar, MapPin, Users } from "lucide-react";

const TemporaryResidency = () => {
  const eligibilityPathways = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Financial Solvency",
      description: "Show investments, savings, or recurring income at or above consulate-specific thresholds set in UMAs (Mexican index). Thresholds vary annually and by consulate."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Unity", 
      description: "Spouse/partner or children who are Mexican citizens or residents can qualify you without financial proofs; many of these cases can be filed in Mexico."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Job Offer (with INM authorization)",
      description: "A Mexican employer obtains work authorization for you; then you get a consular visa and convert it to a resident card with work rights."
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation & Document Prep",
      description: "Personalized eligibility assessment and a tailored checklist (passport, bank/income proofs, photos, civil documents for family cases, or employer approvals for work cases)."
    },
    {
      number: "2", 
      title: "Consular Stage",
      description: "We help schedule your appointment, select the correct visa category, and prep you for the interview."
    },
    {
      number: "3",
      title: "Enter Mexico & INM", 
      description: "After the visa sticker is issued, enter Mexico and exchange it for your resident card within 30 days. We complete the forms, pay fees, and accompany you to the INM appointment."
    },
    {
      number: "4",
      title: "Renewals",
      description: "Renew in Mexico (no consulate required). We calendar your renewals and handle changes (e.g., add work permission, update marital status) to keep you compliant."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Temporary Residency Mexico — Requirements & Process</title>
        <meta name="description" content="Get Mexico temporary residency (1-4 years) with expert legal help. Financial requirements, application process & INM support. Perfect for retirees & remote workers!" />
      </Helmet>

      <Hero
        title="Temporary Residency Mexico — Requirements & Process"
        subtitle="Temporary Resident Visa (Residente Temporal) allows 1-4 year stays in Mexico. Perfect for retirees, remote workers, investors, and families. Expert legal help with financial requirements, consulate applications, and INM processing."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Overview */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Overview & Key Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Validity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Up to 4 years total; first issuance usually 1 year, then renewable in-country.</p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Work Permission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Not automatic unless your visa is based on a job offer. Remote workers living on foreign income generally do not need Mexican work authorization.</p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Path to Permanent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">After four continuous years as a temporary resident (or sooner in certain family cases), you can apply for permanent residency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Eligibility Pathways */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Eligibility Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eligibilityPathways.map((pathway, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {pathway.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{pathway.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{pathway.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process (How It Works)</h2>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic CTA */}
        <CTASection 
          variant="compact"
          title="Ready to Start Your Temporary Residency Application?"
          description="Get expert guidance on financial requirements, document preparation, and consulate selection from our experienced immigration attorneys."
        />

        {/* How We Help */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Help You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Strategy</h3>
                <p className="text-muted-foreground mb-6">Identify the strongest qualification route and optimize documentation. Our <Link to="/about" className="text-primary hover:text-primary-hover underline">experienced immigration attorneys</Link> evaluate whether temporary residency is right for you, or if <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">permanent residency</Link> might be a better option.</p>
                
                <h3 className="text-xl font-semibold mb-4">Consulate Know-How</h3>
                <p className="text-muted-foreground">We navigate appointment systems and varying consulate criteria. Learn more about the complete process in our <Link to="/faqs" className="text-primary hover:text-primary-hover underline">immigration FAQ section</Link>.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Representation</h3>
                <p className="text-muted-foreground mb-6">Spanish-language filings and INM communications handled by our attorneys. Our <Link to="/contact" className="text-primary hover:text-primary-hover underline">bilingual legal team</Link> ensures nothing gets lost in translation.</p>
                
                <h3 className="text-xl font-semibold mb-4">Post-Visa Support</h3>
                <p className="text-muted-foreground">Guidance on obligations (address changes, adding work permission) and planning your upgrade to <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">permanent residency when eligible</Link>. We also assist with the path to <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">Mexican citizenship</Link> after completing residency requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Interested in Temporary Residency?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact us for an honest eligibility assessment and next steps.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-professional"
                onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
              >
                Schedule a Consultation
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/permanent-residency">Learn About Permanent Residency</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TemporaryResidency;