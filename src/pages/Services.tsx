import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import ServiceCard from "@/components/ui/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Globe, Award, MessageSquare, Star, FileText, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Temporary Residency Mexico",
      description: "Obtain 1–4 year Mexico residency visas (Residente Temporal) for retirees, remote workers, and investors. Expert guidance through financial requirements and consulate applications.",
      href: "/services/temporary-residency",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Permanent Residency Mexico",
      description: "Secure indefinite Mexico residency (Residente Permanente) with work authorization. Assistance with direct applications or transitions from temporary residency.",
      href: "/services/permanent-residency",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Mexico Work Visas & Permits",
      description: "Employment-based immigration solutions including work permits, employer registration, and temporary residency with work authorization for foreign employees.",
      href: "/services/work-visas",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Family Immigration Mexico",
      description: "Family reunification through marriage visas, spouse residency, and family-based immigration. Often no financial requirements for qualified family cases.",
      href: "/services/family-based-immigration",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Mexican Citizenship Services",
      description: "Expert assistance with Mexican citizenship by naturalization, including Spanish language preparation, civics exams, and naturalization process guidance.",
      href: "/services/mexican-citizenship",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Corporate Immigration Mexico",
      description: "Business immigration solutions for companies: executive transfers, investor visas, employer registration, and comprehensive corporate relocation services.",
      href: "/services/corporate-immigration",
      icon: <Globe className="w-6 h-6" />
    },
  ];

  const processSteps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "Comprehensive evaluation of your immigration goals and eligibility for various Mexico visa options with our experienced immigration attorneys."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strategy Development",
      description: "Customized immigration strategy based on your specific situation, whether seeking Mexico residency visa, work permits, or Mexican citizenship."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Document Preparation",
      description: "Meticulous preparation of all required documents, translations, and applications with our bilingual legal team ensuring compliance."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Application & Follow-up",
      description: "Complete representation throughout the process including consulate appointments, INM processing, and post-approval resident card assistance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mexico Immigration Services — Complete Visa & Residency Solutions</title>
        <meta name="description" content="Complete Mexico immigration services: residency, work visas, citizenship & family immigration. Licensed attorneys with 15+ years experience. Free consultation available!" />
        <meta name="keywords" content="Mexico immigration services, Mexico residency visa, immigration attorney Mexico, temporary residency Mexico, permanent residency Mexico, Mexico work visa, Mexican citizenship, family immigration Mexico" />
        <link rel="canonical" href="https://mexico-visa-blueprint.lovable.app/services" />
      </Helmet>

      <Hero
        title="Mexico Immigration Services — Complete Legal Solutions"
        subtitle="Comprehensive immigration attorney services for US and Canadian citizens seeking Mexico residency, work visas, and citizenship. Expert legal guidance from licensed Mexico immigration lawyers with 15+ years experience."
        primaryCta={{
          text: "Schedule Free Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
        secondaryCta={{
          text: "Call +1 (214) 473-4507",
          href: "tel:+12144734507"
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Services Overview */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Expert Mexico Immigration Attorney Services</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              As leading immigration attorneys in Mexico, we provide comprehensive legal services for all aspects of Mexican immigration law. 
              From Mexico residency visas to Mexican citizenship by naturalization, our bilingual legal team ensures successful outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </section>

        {/* Mexico Residency Options */}
        <section className="mb-20 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mexico Residency Visa Options — Expert Legal Guidance</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Mexico immigration lawyers specialize in all types of residency visas for US and Canadian citizens seeking to live in Mexico legally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Temporary Residency Mexico (Residente Temporal)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Duration:</strong> 1-4 years, renewable annually<br />
                    <strong>Ideal for:</strong> Retirees, remote workers, investors<br />
                    <strong>Requirements:</strong> Financial solvency or family ties
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Mexico visa assistance for financial documentation</li>
                    <li>• Consulate application and interview preparation</li>
                    <li>• INM resident card processing support</li>
                    <li>• Annual renewal guidance and representation</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services/temporary-residency">Learn About Temporary Residency</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Permanent Residency Mexico (Residente Permanente)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    <strong>Duration:</strong> Indefinite, no renewals needed<br />
                    <strong>Benefits:</strong> Work authorization included<br />
                    <strong>Paths:</strong> Direct application or temporary upgrade
                  </p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Immigration attorney guidance for qualification assessment</li>
                    <li>• Direct permanent residency applications</li>
                    <li>• Temporary to permanent residency transitions</li>
                    <li>• Family-based permanent residency cases</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/services/permanent-residency">Learn About Permanent Residency</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work & Business Immigration */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mexico Work Visas & Business Immigration</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive work authorization solutions for individuals and corporations seeking employment-based immigration to Mexico.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Mexico Work Permits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Employer-sponsored work visas and temporary residency with work authorization for foreign employees in Mexico.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• INM work permit applications</li>
                    <li>• Employer registration assistance</li>
                    <li>• Work visa consulate processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Corporate Immigration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Executive transfers, investor visas, and comprehensive corporate relocation services for businesses expanding to Mexico.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Executive transfer visas</li>
                    <li>• Investor residency applications</li>
                    <li>• Bulk employee relocations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Business Owner Visas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Immigration solutions for entrepreneurs and business owners establishing operations in Mexico.
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Self-sponsored work visas</li>
                    <li>• Investment-based residency</li>
                    <li>• Business formation coordination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Immigration Process */}
        <section className="mb-20 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mexico Immigration Process — Step by Step</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                When you hire our Mexico immigration attorneys, you get comprehensive support through every step of the immigration process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Family & Citizenship Services */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Family Immigration Mexico — Marriage & Family Visas</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Specialized legal services for family-based immigration including marriage visas for spouses of Mexican citizens, 
                  family reunification, and dependent visas. Our immigration attorneys handle family cases with sensitivity and expertise.
                </p>
                <ul className="text-muted-foreground space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Marriage Visas:</strong> Residency for spouses of Mexican citizens with no financial requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Family Reunification:</strong> Visas for children and parents of Mexican citizens or residents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>In-Country Processing:</strong> Many family cases can be filed without leaving Mexico</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link to="/services/family-based-immigration">Family Immigration Services</Link>
                </Button>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Mexican Citizenship by Naturalization</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expert guidance for obtaining Mexican citizenship through naturalization. Our immigration attorneys assist with 
                  eligibility assessment, Spanish language preparation, civics exam coaching, and complete naturalization process support.
                </p>
                <ul className="text-muted-foreground space-y-3 mb-6">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eligibility Assessment:</strong> Determine qualification after 2-5 years of residency</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exam Preparation:</strong> Spanish language and Mexican civics exam coaching</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Dual Citizenship:</strong> Maintain US or Canadian citizenship while becoming Mexican</span>
                  </li>
                </ul>
                <Button asChild size="lg">
                  <Link to="/services/mexican-citizenship">Citizenship Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Immigration Attorneys */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Hire Our Mexico Immigration Lawyers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-professional">
                <CardContent className="pt-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Licensed Immigration Attorneys</h3>
                  <p className="text-muted-foreground text-sm">
                    Licensed Mexico immigration lawyers with 15+ years experience and 1,000+ successful cases for US and Canadian clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="pt-6 text-center">
                  <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">Bilingual Legal Services</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete bilingual support in English and Spanish for all immigration matters, consulate appointments, and INM proceedings.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardContent className="pt-6 text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">End-to-End Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive Mexico visa assistance from initial consultation through resident card receipt and ongoing compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <Card className="card-professional bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
              <CardContent className="py-12 px-8">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Mexico Immigration Journey?</h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Get expert legal guidance from experienced Mexico immigration attorneys. Schedule your free consultation to discuss 
                  your Mexico residency visa options and immigration strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="btn-accent"
                    onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Link to="/contact">Contact Our Immigration Attorneys</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;