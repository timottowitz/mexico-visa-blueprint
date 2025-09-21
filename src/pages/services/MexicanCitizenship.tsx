import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, BookOpen, Home } from "lucide-react";

const MexicanCitizenship = () => {
  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Passport & Mobility",
      description: "Enjoy a Mexican passport and regional travel convenience."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "No Immigration Maintenance", 
      description: "No residency renewals or INM reporting; you are a national."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property & Family",
      description: "Own in restricted zones directly; streamline immigration for certain relatives."
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Evaluation & Planning",
      description: "Verify timelines and gather required civil documents (apostilles/translations where necessary)."
    },
    {
      number: "2", 
      title: "Application Filing (SRE)",
      description: "Prepare and submit the naturalization application (in Spanish) with fees and supporting evidence."
    },
    {
      number: "3",
      title: "Exams", 
      description: "Prepare for Spanish language and civics tests using official study guides and practice sessions we provide."
    },
    {
      number: "4",
      title: "Approval & Oath",
      description: "Attend the ceremony, receive your Naturalization Certificate, and proceed to first passport and national ID."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Mexican Citizenship & Naturalization — Mexico Immigration Lawyer</title>
        <meta name="description" content="Guide to obtaining Mexican citizenship. Eligibility after 2–5 years residency, dual citizenship benefits, and how our immigration lawyers assist with naturalization." />
      </Helmet>

      <Hero
        title="Mexican Citizenship / Naturalization"
        subtitle="Becoming a naturalized Mexican citizen grants full civic rights, a Mexican passport, and the ability to own property nationwide without a trust. Mexico permits dual citizenship, so most U.S. and Canadian citizens can keep their original nationality."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Why Consider Citizenship */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Consider Citizenship?</h2>
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

        {/* Eligibility */}
        <section className="mb-16 section-gradient py-16 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Eligibility</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-primary" />
                    Standard Route
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    5 consecutive years of legal residency (temporary and/or permanent) immediately before applying, 
                    with presence requirements near the time of application.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Home className="w-6 h-6 mr-3 text-primary" />
                    Marriage Exception
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    2 years of residency if married to a Mexican citizen and meeting cohabitation requirements.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Card className="card-professional">
                <CardHeader>
                  <CardTitle className="text-xl">Additional Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Valid residency during the process</li>
                    <li>• Basic Spanish proficiency</li>
                    <li>• Knowledge of Mexican history/civics via exams</li>
                    <li>• Clean criminal background</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Process Overview</h2>
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

        {/* How We Help */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">How We Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Document Compliance</h3>
                <p className="text-muted-foreground mb-6">Ensure legalization/translation standards.</p>
                
                <h3 className="text-xl font-semibold mb-4">Application Crafting</h3>
                <p className="text-muted-foreground">Accurate Spanish filings and persuasive cover letters where appropriate.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Exam Preparation</h3>
                <p className="text-muted-foreground mb-6">Study materials, practice tests, and optional tutoring.</p>
                
                <h3 className="text-xl font-semibold mb-4">Post-Approval Steps</h3>
                <p className="text-muted-foreground">Passport/ID setup and updating prior registrations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Interested in becoming a Mexican citizen?</h2>
            <p className="text-lg text-muted-foreground mb-8">Book a citizenship eligibility assessment.</p>
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

export default MexicanCitizenship;