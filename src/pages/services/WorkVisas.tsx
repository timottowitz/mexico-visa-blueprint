import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Users, FileCheck, Briefcase } from "lucide-react";

const WorkVisas = () => {
  const processSteps = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Employer Registration",
      description: "The Mexican employer must hold a valid INM Employer Registration (Constancia de Empleador)."
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "INM Work Permit",
      description: "Employer obtains pre-approval (sometimes referenced by a NUT number). This is required before the consulate issues your visa."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consulate Issuance",
      description: "You attend a Mexican consulate with the approval to receive your 'work visa' sticker."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Resident Card in Mexico",
      description: "Within 30 days of entry, exchange the visa for a Temporary Resident Card with work permission."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Work Visas for Mexico — Immigration Lawyer Services</title>
        <meta name="description" content="Professional assistance with Mexican work visas and permits. Guidance for employer‑sponsored visas, INM work authorization, and permits for foreign employees in Mexico." />
      </Helmet>

      <Hero
        title="Work Visas & Permits in Mexico"
        subtitle="If you're employed by, or assigned to, a Mexican entity, you need the correct work-authorized residency. We support both individuals and employers end-to-end—from employer registration and INM work authorization to consular issuance and the resident card in Mexico."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* How Work Authorization Works */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">How Work Authorization Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Card className="card-professional">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    <strong>Renewals & Upgrades:</strong> Typically issued for 1 year and renewable. 
                    After ~4 years, you can pursue permanent residency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Building className="w-6 h-6 mr-3 text-primary" />
                    For Employers (Corporate Support)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Obtain/maintain Employer Registration</li>
                    <li>• Prepare work permit applications</li>
                    <li>• Coordinate group or phased transfers</li>
                    <li>• Manage dependent visas</li>
                    <li>• Post-arrival compliance: address/role changes, renewals, and notifications to INM</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    For Individuals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Credential prep (apostilles/translations if needed)</li>
                    <li>• Consulate guidance</li>
                    <li>• INM support</li>
                    <li>• Clear briefings for entry and FMM notation</li>
                    <li>• Long-term planning for renewals or permanent residency</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Cases */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Special Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Investor/Owner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set up a Mexican company and sponsor yourself as an executive/manager where appropriate.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Remote Workers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If paid abroad by a non-Mexican entity, residency via economic solvency may be more suitable; 
                    add work permission later only if you will perform lucrative activities in Mexico.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Need a Mexican work visa?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact us for a streamlined, on-time process for you or your team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-professional"
                onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
              >
                Schedule a Consultation
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/corporate-immigration">Corporate Immigration Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkVisas;