import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Baby, Clock } from "lucide-react";

const FamilyBasedImmigration = () => {
  const familyTypes = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Marriage to a Mexican Citizen",
      description: "Initial Status: Temporary Residency based on marriage (no financial solvency required). Change of status can often be filed in Mexico.",
      timeline: "Transition to Permanent: After 2 years as a temporary resident based on marriage, apply for Permanent Residency."
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Children and Parents",
      description: "Minor Children: Foreign minor children of a Mexican citizen or permanent resident can qualify for residency.",
      timeline: "Parents of Mexican Children: A foreign parent of a Mexican-born child can qualify for Permanent Residency quickly, usually processed in Mexico."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Other Family Situations",
      description: "Certain siblings/guardianship scenarios may qualify; assessed case-by-case.",
      timeline: "Each case is evaluated individually based on specific circumstances and relationships."
    },
  ];

  const benefits = [
    {
      title: "In-Country Filing",
      description: "Many family cases can be filed at INM without leaving Mexico."
    },
    {
      title: "No Financial Proofs",
      description: "Focus is on authentic civil documents and proof of relationship."
    },
    {
      title: "Faster Path",
      description: "Spouses can reach permanent status in ~2 years; parents of Mexican minors may qualify for permanent immediately."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Family‑Based Immigration (Marriage & Family Visas) — Mexico Immigration Lawyer</title>
        <meta name="description" content="Immigration services for family unity in Mexico. Residency through Mexican spouses, children, or relatives. No financial criteria needed for qualified family visas." />
      </Helmet>

      <Hero
        title="Family & Marriage Immigration"
        subtitle="Mexico welcomes close family members of its citizens and residents. If you have a Mexican spouse or child—or certain other qualifying relations—you may obtain residency through family unity, often without financial proofs and frequently through in-country processing."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Family Types */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Family Immigration Options</h2>
            <div className="space-y-8">
              {familyTypes.map((type, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <div className="text-primary">
                          {type.icon}
                        </div>
                      </div>
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground font-medium">{type.timeline}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process & Benefits */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Process & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Marriage Considerations */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Residency via Marriage to a Mexican Citizen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Valid marriage certificate</li>
                    <li>• Proof of genuine relationship (photos, shared addresses)</li>
                    <li>• Civil documents (apostilled/translated)</li>
                    <li>• No financial solvency requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Initial: Temporary Residency</li>
                    <li>• After 2 years: Eligible for Permanent Residency</li>
                    <li>• Processing: Often completed in Mexico</li>
                    <li>• No consulate visit required in many cases</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Help Your Family */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Help Your Family</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Bilingual Support</h3>
                <p className="text-muted-foreground mb-6">Bilingual liaison for both the foreign applicant and Mexican family member.</p>
                
                <h3 className="text-xl font-semibold mb-4">Document Preparation</h3>
                <p className="text-muted-foreground">Preparation of sponsorship letters, declarations, and precise document formatting.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Representation</h3>
                <p className="text-muted-foreground mb-6">Attendance and representation at INM appointments; translation support.</p>
                
                <h3 className="text-xl font-semibold mb-4">Follow-up</h3>
                <p className="text-muted-foreground">Active follow-up for swift approvals and clear communication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Have a Mexican spouse or family member?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact us to confirm your eligibility and plan your filing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-professional"
                onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
              >
                Schedule a Consultation
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/faqs">View FAQs</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FamilyBasedImmigration;