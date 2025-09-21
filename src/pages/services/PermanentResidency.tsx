import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Briefcase, Shield, Users } from "lucide-react";

const PermanentResidency = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "No Expiration",
      description: "One-time issuance with no annual renewals."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Work Flexibility", 
      description: "Work for any employer or independently without extra permits."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stability",
      description: "Ideal for retirees and long-term residents; a common stepping stone to citizenship."
    },
  ];

  const qualificationPaths = [
    {
      title: "Graduation from Temporary",
      description: "After 4 consecutive years as a temporary resident, request a change to permanent at INM (often 2 years if married to a Mexican citizen and meeting marriage-based rules)."
    },
    {
      title: "Direct Permanent (Financial)",
      description: "Some consulates grant permanent residency directly for applicants showing higher financial solvency (thresholds are consulate-specific and UMA-indexed)."
    },
    {
      title: "Family Unity",
      description: "Parents of a Mexican minor child can qualify for permanent residency quickly. Other family-based routes may apply depending on relationships and ages."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Permanent Residency Mexico — Residente Permanente Guide</title>
        <meta name="description" content="Get permanent residency in Mexico with no renewals needed. Expert legal help with financial requirements, family cases & work authorization. Start your application today!" />
      </Helmet>

      <Hero
        title="Permanent Residency Mexico — Residente Permanente"
        subtitle="Permanent Resident status (Residente Permanente) grants indefinite residency in Mexico with no renewals needed. Includes work authorization, travel freedom, and path to Mexican citizenship with expert legal assistance."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Why Permanent Residency */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Permanent Residency?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Paths to Qualify */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Paths to Qualify</h2>
            <div className="space-y-8">
              {qualificationPaths.map((path, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm mr-4">
                        {index + 1}
                      </div>
                      {path.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{path.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Scenarios */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Application Scenarios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-lg">Transition in Mexico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We prepare your "Change of Condition" at INM, submit proofs, and accompany you to appointments.</p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-lg">Direct via Consulate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We prepare your file for the Permanent Resident visa category, guide your interview, and handle the post-entry card issuance with INM.</p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-lg">Family-Based in Mexico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">For eligible family cases, we often file directly with INM without requiring you to leave the country.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ongoing Guidance */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ongoing Guidance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">CURP</h3>
                <p className="text-muted-foreground mb-6">We assist with obtaining your CURP after approval. This document is essential for many aspects of life in Mexico and is required for <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">Mexican citizenship applications</Link>.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
                <p className="text-muted-foreground">We brief you on address notifications, travel patterns relevant to future <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">citizenship eligibility</Link>, and options to <Link to="/services/family-based-immigration" className="text-primary hover:text-primary-hover underline">sponsor relatives</Link> once permanent. Our <Link to="/services" className="text-primary hover:text-primary-hover underline">comprehensive immigration services</Link> support your long-term plans in Mexico.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to make Mexico your permanent home?</h2>
            <p className="text-lg text-muted-foreground mb-8">Schedule a consultation to evaluate your eligibility and plan the fastest route.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-professional"
                onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
              >
                Schedule a Consultation
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/mexican-citizenship">Learn About Mexican Citizenship</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PermanentResidency;