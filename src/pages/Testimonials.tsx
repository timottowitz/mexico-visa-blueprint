import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, ArrowRight, MapPin, Calendar } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  caseStudy?: {
    challenge: string;
    solution: string;
    outcome: string;
    timeline: string;
  };
  date: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah-johnson",
    name: "Sarah & Michael Johnson",
    location: "Austin, Texas → Puerto Vallarta, Mexico",
    service: "Permanent Residency",
    rating: 5,
    quote: "The team at Mexico Immigration Lawyer made our dream of retiring in Mexico a reality. Their expertise and personal attention throughout the entire process was exceptional. We couldn't have navigated the complex requirements without them.",
    caseStudy: {
      challenge: "Sarah and Michael, both 62, wanted to retire to Puerto Vallarta but were concerned about meeting the financial requirements for permanent residency. They had retirement accounts but weren't sure if their income streams would qualify under Mexican immigration law.",
      solution: "Our team reviewed their complete financial profile and identified that their combination of pension income, Social Security, and investment returns exceeded the permanent residency requirements. We helped structure their documentation to clearly demonstrate financial solvency and guided them through the direct permanent residency application at the Houston consulate.",
      outcome: "Approved for permanent residency on their first application. They successfully moved to Puerto Vallarta and are now enjoying their retirement dream with complete legal status and work authorization.",
      timeline: "6 weeks from initial consultation to resident card in hand"
    },
    date: "2024-08-15",
    featured: true
  },
  {
    id: "james-martinez",
    name: "James Martinez",
    location: "Vancouver, Canada → Mexico City, Mexico",
    service: "Work Visa & Corporate Immigration",
    rating: 5,
    quote: "As a tech executive relocating to manage our Mexico City office, I needed someone who understood both the corporate immigration process and individual work authorization. The team delivered flawlessly, handling everything from my company's employer registration to my family's dependent visas.",
    caseStudy: {
      challenge: "James was promoted to Country Manager for Mexico but his company had never transferred employees to Mexico before. They needed to establish employer registration with INM while simultaneously processing James's work visa and dependent visas for his wife and two children.",
      solution: "We handled the complete corporate setup, obtaining the company's employer registration and then processing James's work authorization through INM. Simultaneously, we prepared applications for his family members as dependents, ensuring everyone could relocate together.",
      outcome: "James received his work-authorized temporary residency, and his entire family relocated successfully. His company is now compliant with Mexican employment law and continues to use our services for additional transfers.",
      timeline: "8 weeks from company setup to family relocation completion"
    },
    date: "2024-07-22"
  },
  {
    id: "maria-rodriguez",
    name: "Maria Rodriguez",
    location: "Miami, Florida → Playa del Carmen, Mexico",
    service: "Family-Based Immigration",
    rating: 5,
    quote: "When I married my Mexican husband, I thought the immigration process would be straightforward. It wasn't until we faced unexpected complications that we realized we needed professional help. The attorneys not only resolved our issues but got me permanent residency faster than we ever expected.",
    caseStudy: {
      challenge: "Maria's marriage-based temporary residency application was initially denied due to insufficient documentation of their relationship. The consulate requested additional evidence, and they were unsure how to proceed without jeopardizing their case.",
      solution: "We analyzed the denial letter and identified the specific documentation gaps. We helped them compile compelling evidence of their genuine relationship and filed a new application with a comprehensive relationship portfolio, including affidavits, financial interdependence proof, and detailed timeline documentation.",
      outcome: "Not only was the second application approved, but we were able to process her upgrade to permanent residency after just two years of marriage-based temporary residency, giving her full work authorization and eliminating future renewals.",
      timeline: "4 months from consultation to permanent resident card"
    },
    date: "2024-06-10"
  },
  {
    id: "robert-chen",
    name: "Robert Chen",
    location: "San Francisco, California → Guadalajara, Mexico",
    service: "Temporary Residency & Investment",
    rating: 5,
    quote: "As a remote tech worker looking to establish residency in Mexico, I was overwhelmed by the financial documentation requirements. The team not only helped me qualify but also provided invaluable guidance on maintaining compliance and planning for permanent residency.",
    date: "2024-05-28"
  },
  {
    id: "linda-thompson",
    name: "Linda Thompson",
    location: "Phoenix, Arizona → San Miguel de Allende, Mexico",
    service: "Mexican Citizenship",
    rating: 5,
    quote: "After five years as a permanent resident, I decided to pursue Mexican citizenship. The naturalization process was more complex than I anticipated, especially the civics exam. The team's exam preparation and SRE filing support made all the difference.",
    date: "2024-04-18"
  },
  {
    id: "david-williams",
    name: "David & Susan Williams",
    location: "Toronto, Canada → Mérida, Mexico",
    service: "Permanent Residency",
    rating: 5,
    quote: "We researched DIY approaches but quickly realized the stakes were too high to risk mistakes. Best decision we made was hiring Mexico Immigration Lawyer. They made what seemed impossible feel manageable and kept us informed every step of the way.",
    date: "2024-03-14"
  }
];

const Testimonials = () => {
  const featuredTestimonial = testimonials.find(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <>
      <Helmet>
        <title>Client Testimonials — Mexico Immigration Lawyer Success Stories</title>
        <meta 
          name="description" 
          content="Read success stories from our clients who achieved their Mexico immigration goals. Detailed case studies of residency, work visas, and citizenship applications." 
        />
        <meta property="og:title" content="Client Testimonials — Mexico Immigration Lawyer Success Stories" />
        <meta property="og:description" content="Read success stories from our clients who achieved their Mexico immigration goals." />
        <link rel="canonical" href="https://mexicoimmigrationlawyer.com/testimonials" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from clients who successfully achieved their Mexico immigration goals with our expert legal guidance and personalized support.
          </p>
        </div>

        {/* Featured Case Study */}
        {featuredTestimonial && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Featured Success Story</h2>
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{featuredTestimonial.name}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{featuredTestimonial.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">{featuredTestimonial.service}</Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(featuredTestimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <Quote className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <blockquote className="text-lg italic text-foreground">
                    "{featuredTestimonial.quote}"
                  </blockquote>
                </div>
              </CardHeader>
              
              {featuredTestimonial.caseStudy && (
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="text-sm text-muted-foreground">{featuredTestimonial.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                      <p className="text-sm text-muted-foreground">{featuredTestimonial.caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Outcome</h4>
                      <p className="text-sm text-muted-foreground mb-3">{featuredTestimonial.caseStudy.outcome}</p>
                      <div className="flex items-center text-sm font-medium text-primary">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredTestimonial.caseStudy.timeline}
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        )}

        {/* Detailed Case Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Detailed Case Studies</h2>
          <div className="space-y-8">
            {regularTestimonials.filter(t => t.caseStudy).map((testimonial) => (
              <Card key={testimonial.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">{testimonial.service}</Badge>
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Quote className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                    <blockquote className="italic text-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </CardHeader>
                
                {testimonial.caseStudy && (
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Challenge</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{testimonial.caseStudy.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Solution</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{testimonial.caseStudy.solution}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">Outcome</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed mb-2">{testimonial.caseStudy.outcome}</p>
                        <div className="flex items-center text-xs font-medium text-primary">
                          <Calendar className="h-3 w-3 mr-1" />
                          {testimonial.caseStudy.timeline}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Client Reviews Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">More Client Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTestimonials.filter(t => !t.caseStudy).map((testimonial) => (
              <Card key={testimonial.id} className="card-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{testimonial.service}</Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span className="text-xs">{testimonial.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-start mb-4">
                    <Quote className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-1" />
                    <blockquote className="text-sm italic text-foreground leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground font-medium">Successful Cases</div>
            <div className="text-sm text-muted-foreground">Across all visa types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-foreground font-medium">Approval Rate</div>
            <div className="text-sm text-muted-foreground">For properly documented cases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+ Years</div>
            <div className="text-foreground font-medium">Average Experience</div>
            <div className="text-sm text-muted-foreground">Per team member</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who achieved their Mexico immigration goals with our expert guidance. Schedule a consultation to discuss your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/schedule-consultation">
              <Button size="lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;