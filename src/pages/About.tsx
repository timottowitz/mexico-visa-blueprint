import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Award, Users, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centered Service",
      description: "You're not just a case number. We provide Zoom consultations, interview coaching, and measure success by client satisfaction. Most new clients come from referrals by happy former clients."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity & Transparency",
      description: "Complete transparency from day one. Clear fee structures (flat fees for most services), no hidden charges. If you don't need a lawyer for something, we'll tell you honestly."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency & Detail",
      description: "Streamlined systems, meticulous checklists, and double-checking every form. We use secure client portals and case-tracking software for real-time updates and faster approvals."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Up-to-Date Expertise",
      description: "We regularly attend immigration law seminars and stay current on INM guidelines, consular procedures, and policy changes. When rules change overnight, we adapt quickly and inform clients immediately."
    },
  ];

  const reasons = [
    {
      title: "Proven Success",
      description: "1,000+ successful cases from simple tourist visa extensions to complex corporate relocations. Our success stories include family reunifications, retiree coastal living dreams, and seamless business setups. High success rate through expertise and tenacity.",
      testimonial: "\"I highly recommend this firm – they made the visa process easy and stress-free.\" - John D., 2025 residency client"
    },
    {
      title: "Bilingual Communication",
      description: "Clear English and Spanish communication. We translate official letters from authorities so you understand every step. You effectively get a personal interpreter and advocate, reducing anxiety about legal jargon.",
      testimonial: "\"The team was with us every step of the way, and we felt confident knowing they had our backs.\" - Thompson family"
    },
    {
      title: "Local Presence, Global Reach",
      description: "Mexico City HQ near government offices for quick filings. Partner network in Guadalajara, Monterrey, and Cancún. Toll-free North America number and flexible consultation schedules for all time zones.",
      testimonial: null
    },
    {
      title: "Comprehensive Support",
      description: "Beyond immigration paperwork: guidance on Mexican driver's licenses, bank accounts, moving companies. We provide resources and referrals, acting as advisors in your entire Mexico transition. Tax specialist referrals available.",
      testimonial: null
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Mexico Immigration Lawyer — 15+ Years Experience</title>
        <meta name="description" content="Licensed Mexico immigration attorneys in Mexico City with 15+ years experience. 1,000+ successful cases for US & Canadian clients. Bilingual legal services you can trust." />
        <meta name="keywords" content="Mexico immigration lawyer, immigration attorney Mexico City, Mexican immigration law firm, residency lawyer Mexico, work permit attorney Mexico, bilingual immigration lawyer" />
        <link rel="canonical" href="https://mexicoimmigrationlawyer.com/about" />
      </Helmet>

      <Hero
        title="About Mexico Immigration Lawyer — Leading Immigration Firm"
        subtitle="Boutique Mexico immigration law firm with 15+ years experience serving US & Canadian clients. Licensed attorneys in Mexico City providing bilingual legal services for residency, citizenship, and work visas."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Who We Are */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Who We Are</h2>
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mexico Immigration Lawyer is a boutique law firm dedicated exclusively to immigration and nationality law. 
                Based in Mexico City, we bridge the gap between North America and Mexico with bilingual, bicultural service. 
                Our licensed attorneys and experienced staff deliver clear guidance and reliable representation for all your <Link to="/services" className="text-primary hover:text-primary-hover underline">Mexico immigration needs</Link>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="card-professional">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">15+ Years Experience</h3>
                    <p className="text-sm text-muted-foreground">Led by a licensed Mexican immigration lawyer with extensive expertise and National Bar Association membership. We have successfully handled <Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover underline">temporary residency</Link>, <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">permanent residency</Link>, and <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">citizenship cases</Link>.</p>
                  </CardContent>
                </Card>
                
                <Card className="card-professional">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">International Team</h3>
                    <p className="text-sm text-muted-foreground">Mexican attorneys plus U.S. and Canadian consultants for seamless cross-border coordination</p>
                  </CardContent>
                </Card>
                
                <Card className="card-professional">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Experience</h3>
                    <p className="text-sm text-muted-foreground">Many team members have lived abroad or navigated immigration processes, providing unique client insight</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <Card key={index} className="card-professional">
                  <CardHeader>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{reason.description}</p>
                    {reason.testimonial && (
                      <div className="bg-primary/5 border-l-4 border-primary pl-4 py-2 rounded-r">
                        <p className="text-sm italic text-muted-foreground">{reason.testimonial}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Contact Information</h2>
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                        <p className="text-muted-foreground">
                          Calle Pestalozzi 635<br />
                          Col. Narvarte Poniente, Benito Juárez<br />
                          CDMX 03020, México
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                        <p className="text-muted-foreground">Mon–Fri, 9:00–18:00 (CT)</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Contact Numbers</h3>
                        <p className="text-muted-foreground">
                          <a href="https://wa.me/52322278690" className="hover:text-primary transition-colors">
                            WhatsApp: +52-322-278690
                          </a><br />
                          <a href="tel:+12144734507" className="hover:text-primary transition-colors">
                            US Landline: +1 (214) 473-4507
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@mexicoimmigrationlawyer.com" className="hover:text-primary transition-colors">
                            info@mexicoimmigrationlawyer.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community & Professional Involvement */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Community & Professional Involvement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Community Education</h3>
                  <p className="text-sm text-muted-foreground">Free webinars for expat community on "Residency Options 2025" and "New Immigration Rules"</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Professional Associations</h3>
                  <p className="text-sm text-muted-foreground">Active in International Bar Association's Immigration Section and National Bar Association of Immigration Lawyers</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Educational Content</h3>
                  <p className="text-sm text-muted-foreground">Regular articles in expat magazines and websites, combating myths and providing accurate immigration information</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Have questions or ready to begin?</h2>
            <p className="text-lg text-muted-foreground mb-8">Join over 1,000 successful clients who trusted us with their Mexico immigration journey. Whether you need help with <Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover underline">temporary residency</Link>, <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">permanent residency</Link>, <Link to="/services/work-visas" className="text-primary hover:text-primary-hover underline">work visas</Link>, or <Link to="/services/family-based-immigration" className="text-primary hover:text-primary-hover underline">family immigration</Link>, our experienced attorneys are here to help.</p>
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

export default About;