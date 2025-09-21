import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, CheckCircle, Users, Phone, Video, ArrowRight } from "lucide-react";

interface ConsultationType {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  bestFor: string[];
  calendlyUrl: string;
}

const consultationTypes: ConsultationType[] = [
  {
    id: "initial-consultation",
    name: "Initial Consultation",
    duration: "30 minutes",
    price: "Free",
    description: "Get started with a complimentary assessment of your immigration goals and eligibility for various visa types.",
    includes: [
      "Eligibility assessment for all visa types",
      "Overview of application process and timeline",
      "Documentation requirements checklist",
      "Transparent fee quote for your case",
      "Next steps recommendations"
    ],
    bestFor: [
      "First-time Mexico immigration applicants",
      "Those unsure which visa type is best",
      "People wanting to understand the process",
      "Anyone seeking a second opinion"
    ],
    calendlyUrl: "https://calendly.com/mexico-immigration-lawyer/initial-consultation"
  },
  {
    id: "strategy-session",
    name: "Comprehensive Strategy Session",
    duration: "60 minutes",
    price: "$200 USD",
    description: "In-depth consultation for complex cases requiring detailed planning and strategy development.",
    includes: [
      "Detailed case analysis and strategy development",
      "Timeline planning with milestone dates",
      "Risk assessment and mitigation strategies",
      "Alternative pathway analysis",
      "Document preparation guidance",
      "Consulate selection recommendations"
    ],
    bestFor: [
      "Complex cases with multiple pathways",
      "Business owners and investors",
      "Previous visa denials or complications",
      "Corporate immigration planning",
      "Multi-generational family cases"
    ],
    calendlyUrl: "https://calendly.com/mexico-immigration-lawyer/strategy-session"
  },
  {
    id: "document-review",
    name: "Document Review Session",
    duration: "45 minutes",
    price: "$150 USD",
    description: "Expert review of your prepared documentation before submission to ensure completeness and accuracy.",
    includes: [
      "Complete document package review",
      "Translation requirement assessment",
      "Formatting and presentation optimization",
      "Missing document identification",
      "Submission strategy recommendations",
      "Quality assurance checklist"
    ],
    bestFor: [
      "DIY applicants seeking expert review",
      "Those with documents prepared elsewhere",
      "Applicants wanting submission confidence",
      "Cases with tight deadlines"
    ],
    calendlyUrl: "https://calendly.com/mexico-immigration-lawyer/document-review"
  }
];

const ConsultationScheduler = () => {
  return (
    <>
      <Helmet>
        <title>Schedule a Consultation — Mexico Immigration Lawyer</title>
        <meta 
          name="description" 
          content="Schedule your Mexico immigration consultation. Free initial consultation available. Expert legal advice for residency, work visas, and citizenship applications." 
        />
        <meta property="og:title" content="Schedule a Consultation — Mexico Immigration Lawyer" />
        <meta property="og:description" content="Schedule your Mexico immigration consultation with our experienced legal team." />
        <link rel="canonical" href="https://mexicoimmigrationlawyer.com/schedule-consultation" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Schedule Your Immigration Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step toward your Mexico immigration goals. Choose the consultation type that best fits your needs and schedule directly with our experienced legal team.
          </p>
        </div>

        {/* Consultation Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {consultationTypes.map((consultation) => (
            <Card key={consultation.id} className="relative card-hover group">
              <CardHeader>
                {consultation.price === "Free" && (
                  <Badge className="absolute -top-2 -right-2 bg-green-500 hover:bg-green-600">
                    FREE
                  </Badge>
                )}
                <CardTitle className="text-xl text-foreground">{consultation.name}</CardTitle>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{consultation.duration}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">{consultation.price}</div>
                </div>
                <CardDescription className="leading-relaxed">
                  {consultation.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* What's Included */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {consultation.includes.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    Best For
                  </h4>
                  <ul className="space-y-1">
                    {consultation.bestFor.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Schedule Button */}
                <div className="pt-4">
                  <Button 
                    className="w-full group-hover:shadow-lg transition-shadow"
                    onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Consultation Formats */}
        <div className="bg-gradient-to-r from-primary/5 to-primary-accent/5 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-8">
            Flexible Consultation Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Video Consultation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Meet with our attorneys via secure video call from anywhere in the world. Perfect for international clients and those who prefer face-to-face interaction.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Screen sharing for document review</li>
                <li>• Secure, encrypted platform</li>
                <li>• Recording available upon request</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone Consultation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Traditional phone consultation for straightforward cases or when video isn't convenient. We can call you anywhere in the US, Canada, or Mexico.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Toll-free numbers available</li>
                <li>• International calling included</li>
                <li>• Follow-up email summary provided</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-8">
            What to Expect During Your Consultation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Case Assessment</h3>
              <p className="text-sm text-muted-foreground">
                We'll review your background, goals, and current situation to understand your immigration needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Options Review</h3>
              <p className="text-sm text-muted-foreground">
                We'll explain all available visa pathways and recommend the best strategy for your situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Timeline & Process</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive a clear timeline and step-by-step overview of the application process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Next Steps</h3>
              <p className="text-sm text-muted-foreground">
                We'll provide clear next steps and a transparent quote for legal representation.
              </p>
            </div>
          </div>
        </div>

        {/* Preparation Tips */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-foreground">How to Prepare for Your Consultation</CardTitle>
            <CardDescription>
              Make the most of your consultation time by coming prepared with these items and information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Documents to Have Ready</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Current passport (all pages)</li>
                  <li>• Recent bank statements (last 3-6 months)</li>
                  <li>• Income documentation (pay stubs, tax returns)</li>
                  <li>• Marriage certificate (if applicable)</li>
                  <li>• Previous visa/immigration history</li>
                  <li>• Any correspondence with Mexican authorities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Information to Consider</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Your timeline and target move date</li>
                  <li>• Intended location in Mexico</li>
                  <li>• Work plans (remote, local employment, etc.)</li>
                  <li>• Family members who will accompany you</li>
                  <li>• Long-term goals (permanent residency, citizenship)</li>
                  <li>• Any specific concerns or questions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Alternative */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Prefer to Contact Us Directly?
          </h3>
          <p className="text-muted-foreground mb-6">
            If you have questions before scheduling or prefer to discuss your case via email or phone first, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us First
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://wa.me/52322278690">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp: +52-322-278690
              </Button>
            </a>
            <a href="tel:+12144734507">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                US: +1 (214) 473-4507
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationScheduler;