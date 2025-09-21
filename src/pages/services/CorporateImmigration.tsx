import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Shield, Users } from "lucide-react";

const CorporateImmigration = () => {
  const companyServices = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Program Setup",
      description: "Employer Registration, visa policy guidance, process templates."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Case Management",
      description: "End-to-end handling for each transferee; proactive status tracking."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Compliance",
      description: "Notifications to INM for changes; audit readiness; documentation standards."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Bulk Transfers",
      description: "Coordinate multiple hires and consulate appointments; on-site support where feasible."
    },
  ];

  const investorServices = [
    {
      title: "Investor Residency",
      description: "Structure and document investments to meet consular criteria."
    },
    {
      title: "Company Formation",
      description: "Coordinate with corporate counsel; synchronize immigration timelines."
    },
    {
      title: "Executive Relocation",
      description: "White-glove service for leadership and dependents."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Immigration Services — Mexico Immigration Lawyer</title>
        <meta name="description" content="Legal services for companies and investors moving personnel to Mexico. Employer registration, business owner visas, and corporate immigration solutions." />
      </Helmet>

      <Hero
        title="Corporate Immigration Services"
        subtitle="Expanding into Mexico or relocating foreign staff requires precise immigration planning. We act as your strategic partner for transfers, ensuring executives, employees, and their families obtain visas smoothly and remain compliant."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Services for Companies */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Services for Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyServices.map((service, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Investors & Owners */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Investors & Owners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {investorServices.map((service, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Partner Support */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Ongoing Partner Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Renewals & Upgrades</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Renewals & upgrades to permanent residency</li>
                    <li>• Training for HR teams</li>
                    <li>• Immigration policy manuals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Audit Defense</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Maintain compliant records</li>
                    <li>• Support any inspections</li>
                    <li>• Proactive compliance monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Our Corporate Services */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Corporate Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Strategic Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We act as an extension of your HR team, providing strategic immigration guidance aligned with your business objectives.</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Scalable Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">From single executive transfers to large-scale relocations, our processes scale to meet your company's needs.</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Compliance Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Stay ahead of regulatory changes with our proactive compliance monitoring and audit-ready documentation.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Relocating talent to Mexico?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact our Corporate Immigration team for a tailored plan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-professional"
                onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
              >
                Schedule a Consultation
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services/work-visas">Learn About Work Visas</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CorporateImmigration;