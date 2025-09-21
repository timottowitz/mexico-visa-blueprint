import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import ContactForm from "@/components/ui/contact-form";
import GoogleMap from "@/components/ui/google-map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact — Mexico Immigration Lawyer</title>
        <meta name="description" content="Contact our Mexico immigration law firm for a consultation. Offices in Mexico City, toll‑free phone for USA/Canada, email, and contact form to assist with your immigration needs." />
      </Helmet>

      <Hero
        title="Contact Us"
        subtitle="We're ready to assist with all your Mexico immigration needs. Reach out with questions, to book a consultation, or to begin your application."
        primaryCta={{
          text: "WhatsApp: +52-322-278690",
          href: "https://wa.me/52322278690"
        }}
        secondaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Get in Touch */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Contact Numbers</h3>
                    <p className="text-muted-foreground">
                      <a href="https://wa.me/52322278690" className="hover:text-primary transition-colors block">
                        WhatsApp: +52-322-278690
                      </a>
                      <a href="tel:+12144734507" className="hover:text-primary transition-colors block">
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
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">Mon–Fri, 9:00–18:00 (CT)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Address */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl">Office Address</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Mexico Immigration Lawyer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Calle Pestalozzi 635<br />
                      Colonia Narvarte Poniente<br />
                      Alcaldía Benito Juárez<br />
                      Ciudad de México, C.P. 03020, México
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consultations */}
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl">Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We offer an initial 30-minute consultation (virtual or in-person by appointment). 
                  You'll receive an honest assessment of your options and a transparent quote tailored to your needs.
                </p>
              </CardContent>
            </Card>

            {/* Google Map */}
            <GoogleMap 
              address="Calle Pestalozzi 635, Colonia Narvarte Poniente, Alcaldía Benito Juárez, Ciudad de México, C.P. 03020, México"
              title="Office Location"
            />
          </div>
        </div>

        {/* Quick Links */}
        <section className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Need More Information?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Services Overview</h3>
                  <p className="text-muted-foreground mb-4">Learn about our immigration services for temporary residency, permanent residency, and citizenship.</p>
                  <a href="/services/temporary-residency" className="text-primary hover:text-primary-hover transition-colors font-medium">
                    View Services →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground mb-4">Find answers to common questions about Mexico immigration and our legal services.</p>
                  <a href="/faqs" className="text-primary hover:text-primary-hover transition-colors font-medium">
                    View FAQs →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">About Our Firm</h3>
                  <p className="text-muted-foreground mb-4">Learn more about our team, values, and commitment to immigration law excellence.</p>
                  <a href="/about" className="text-primary hover:text-primary-hover transition-colors font-medium">
                    About Us →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;