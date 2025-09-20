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
      description: "Personal attention, transparent timelines and pricing, and responsive communication."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity & Transparency",
      description: "Clear roadmaps, upfront fees, and practical advice."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency & Detail",
      description: "Rigorous checklists and quality control that reduce delays."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Up-to-Date Expertise",
      description: "We monitor policy changes and adapt quickly."
    },
  ];

  const reasons = [
    {
      title: "Proven Success",
      description: "1,000+ matters across residency, citizenship, and corporate transfers."
    },
    {
      title: "Bilingual Communication",
      description: "Fluent English and Spanish; plain-language explanations."
    },
    {
      title: "Local Presence, Global Reach",
      description: "Mexico City HQ with partner support in major cities; toll-free line for U.S./Canada."
    },
    {
      title: "Comprehensive Support",
      description: "Beyond paperwork—referrals for housing, banking, and tax guidance."
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Our Firm — Mexico Immigration Lawyer</title>
        <meta name="description" content="Mexico Immigration Lawyer is a bilingual law firm based in Mexico City, specializing in immigration law for expats. Learn about our experienced team and our commitment to clients." />
      </Helmet>

      <Hero
        title="About Our Law Firm"
        subtitle="Mexico Immigration Lawyer is a boutique law firm dedicated exclusively to immigration and nationality law. Based in Mexico City, we bridge the gap between North America and Mexico with bilingual, bicultural service."
        primaryCta={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Who We Are */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mexico Immigration Lawyer is a boutique law firm dedicated exclusively to immigration and nationality law. 
              Based in Mexico City, we bridge the gap between North America and Mexico with bilingual, bicultural service. 
              Our licensed attorneys and experienced staff deliver clear guidance and reliable representation.
            </p>
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
                    <p className="text-muted-foreground">{reason.description}</p>
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
                          Av. Paseo de la Reforma 123, Piso 4<br />
                          Col. Polanco, Miguel Hidalgo<br />
                          CDMX 11560, Mexico
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
                        <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:+525555551234" className="hover:text-primary transition-colors">
                            +52 (55) 5555-1234
                          </a><br />
                          <a href="tel:18001234567" className="hover:text-primary transition-colors">
                            1-800-123-4567 (US/Canada)
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

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Have questions or ready to begin?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contact us to schedule a consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-professional">
                <Link to="/contact">Schedule a Consultation</Link>
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