import { Helmet } from "react-helmet-async";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Hero from "@/components/ui/hero";
import ServiceCard from "@/components/ui/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/ui/cta-section";
import { AnimatedBackground, ParallaxText } from "@/components/ui/animated-background";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Globe, Award, MessageSquare, Star, Clock } from "lucide-react";
import lawyerProfileImage from "@/assets/lawyer-profile.png";
import TestimonialGallery from "@/components/ui/testimonial-gallery";

const Index = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };
  const services = [
    {
      title: "Temporary Residency Visas",
      description: "Obtain 1–4 year residence permits (Residente Temporal), including financial solvency routes for retirees and remote workers.",
      href: "/services/temporary-residency",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Permanent Residency",
      description: "Assistance with Residente Permanente applications for indefinite stay in Mexico, either directly (for qualified applicants) or after four years as a temporary resident.",
      href: "/services/permanent-residency",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Family & Marriage Visas",
      description: "Residency for those with Mexican spouses, children, or close family ties—often without financial criteria and available in-country.",
      href: "/services/family-based-immigration",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Work Visas & Corporate Services",
      description: "Employer-sponsored work authorization, investor/owner pathways, and corporate relocation support.",
      href: "/services/work-visas",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Mexican Citizenship",
      description: "Legal assistance for naturalization after the required residency period, including exam preparation and SRE filings.",
      href: "/services/mexican-citizenship",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Corporate Immigration",
      description: "Comprehensive immigration solutions for companies relocating employees and executives to Mexico.",
      href: "/services/corporate-immigration",
      icon: <Globe className="w-6 h-6" />
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise in Mexican Immigration Law",
      description: "Licensed attorneys tracking the latest rules and policy changes. We tailor the best visa strategy for your situation—finances, family, work, or investment."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Bilingual & Bicultural Team",
      description: "Fluent in English and Spanish. We understand North American expectations and Mexican procedures."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "Hundreds of approvals across residency types. Clients commend our responsiveness and results."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Guidance",
      description: "One-on-one consultations, consulate selection guidance, document checklists, and step-by-step support."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "All-Inclusive Support",
      description: "From consular applications to INM processing, translations, and post-arrival tasks like your resident card and CURP."
    },
  ];

  const testimonials = [
    {
      quote: "Mexico Immigration Lawyer made our family's move to Mexico seamless. Their expertise with marriage-based residency was invaluable, and they handled everything in Spanish for us.",
      name: "Sarah & Carlos M.",
      location: "Toronto, Canada → Mexico City"
    },
    {
      quote: "As a retiree, I was overwhelmed by the residency requirements. The team guided me through every step and helped me secure my temporary residency without any issues.",
      name: "Robert K.",
      location: "Phoenix, USA → Playa del Carmen"
    },
    {
      quote: "Professional, responsive, and reliable. They helped our company transfer three executives to Mexico and handled all the compliance requirements perfectly.",
      name: "Jennifer L.",
      location: "Corporate HR Director"
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Helmet>
          <title>Mexico Immigration Lawyer — Residency Visa & Citizenship Experts 2025</title>
          <meta name="description" content="🥇 Top Mexico immigration lawyer helping 800+ US & Canadian clients get residency visas, work permits & citizenship. Licensed attorneys in Mexico City. Free 30-min consultation!" />
          <meta name="keywords" content="Mexico immigration lawyer, immigration attorney Mexico, Mexico residency visa, permanent residency Mexico, temporary residency Mexico, Mexico work visa, Mexican citizenship, immigration lawyer Mexico City, bilingual immigration attorney" />
          <meta property="og:title" content="Mexico Immigration Lawyer — Residency & Citizenship Experts" />
          <meta property="og:description" content="Licensed Mexico immigration attorneys with 15+ years experience helping Americans & Canadians get Mexico residency, work visas & citizenship." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://mexico-visa-blueprint.lovable.app/assets/lawyer-profile.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mexico Immigration Lawyer — Visa & Residency Experts" />
          <meta name="twitter:description" content="Expert Mexico immigration attorneys helping US & Canadian citizens with residency visas, work permits & citizenship applications." />
          <link rel="canonical" href="https://mexico-visa-blueprint.lovable.app/" />
        </Helmet>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero
          eyebrow="Professional Legal Guidance - Free 30-Min Strategy Session"
          title="Navigate Mexico Immigration with Confidence"
          subtitle="Stop struggling with confusing paperwork and government bureaucracy. Our experienced bilingual attorneys have guided 800+ Americans & Canadians through Mexico's immigration process. Get personalized legal guidance from licensed professionals who understand both systems."
          primaryCta={{
            text: "🎯 Claim Your FREE Strategy Session",
            onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
          }}
          secondaryCta={{
            text: "💬 WhatsApp: +52 32 2278 7690",
            href: "https://wa.me/523222787690"
          }}
        >
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <Star className="w-5 h-5" />
              4.9/5 Stars (200+ Reviews)
            </div>
            <div className="flex items-center gap-2 text-green-600 font-medium">
              <CheckCircle className="w-5 h-5" />
              Licensed Attorneys
            </div>
            <div className="flex items-center gap-2 text-purple-600 font-medium">
              <Globe className="w-5 h-5" />
              Bilingual Support
            </div>
          </div>
        </Hero>
      </motion.div>

      {/* SEO H1 */}
      <div className="container mx-auto px-4 pt-8">
        <h1 className="sr-only">Mexico Immigration Lawyer</h1>
      </div>

      {/* Testimonial Gallery */}
      <TestimonialGallery />

      <div className="container mx-auto px-4 py-16">
        {/* Our Immigration Services */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Mexico Immigration Services — Complete Legal Solutions</h2>
              <p className="text-lg text-muted-foreground">
                As your trusted Mexico immigration attorney, we provide comprehensive legal services to help you achieve your Mexico immigration goals, 
                from temporary residency to full Mexican citizenship.
              </p>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.img 
                src={lawyerProfileImage} 
                alt="Professional Mexico immigration attorney consulting with client in modern office setting"
                className="w-80 h-60 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="h-full"
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional keyword-rich content with enhanced internal linking */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Mexico Residency Visa Options for Americans & Canadians</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our <Link to="/about" className="text-primary hover:text-primary-hover font-medium">licensed Mexico immigration attorneys</Link> specialize in all types of Mexico residency visas for US and Canadian citizens. Whether you need <Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover font-medium">Mexico temporary residency for retirement or remote work</Link>, 
                  <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover font-medium">Mexico permanent residency for long-term living</Link>, or <Link to="/services/work-visas" className="text-primary hover:text-primary-hover font-medium">Mexico work visas for employment authorization</Link>, we provide comprehensive legal guidance throughout the entire immigration process.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong><Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover">Temporary Residency Mexico (Residente Temporal):</Link></strong> 1-4 year Mexico residency visas for retirees, remote workers, and investors</li>
                  <li>• <strong><Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover">Permanent Residency Mexico (Residente Permanente):</Link></strong> Indefinite Mexico residency with work authorization and no renewal requirements</li>
                  <li>• <strong><Link to="/services/work-visas" className="text-primary hover:text-primary-hover">Mexico Work Visas & Employment Authorization:</Link></strong> Professional work permits and employer-sponsored immigration solutions</li>
                  <li>• <strong><Link to="/services/family-based-immigration" className="text-primary hover:text-primary-hover">Family Immigration Mexico:</Link></strong> Marriage visas for spouses of Mexican citizens and family reunification services</li>
                </ul>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">💡 <strong>Expert Tip:</strong> Read our comprehensive <Link to="/blog/temporary-vs-permanent-residency-mexico" className="text-blue-600 hover:text-blue-700 underline">guide comparing temporary vs permanent residency in Mexico</Link> to determine which option best fits your situation and long-term goals.</p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Licensed Mexico Immigration Lawyer Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you hire a <Link to="/about" className="text-primary hover:text-primary-hover font-medium">Mexico immigration lawyer from our experienced legal team</Link>, you get bilingual legal representation, comprehensive <Link to="/services" className="text-primary hover:text-primary-hover font-medium">Mexico visa assistance</Link>, 
                  and strategic guidance for <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover font-medium">Mexican citizenship by naturalization</Link>. Our <Link to="/about" className="text-primary hover:text-primary-hover font-medium">licensed immigration attorneys in Mexico City</Link> handle everything from US consulate applications to INM processing and resident card assistance.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>Complete Mexico Visa Assistance:</strong> Professional application support and legal representation with our <Link to="/contact" className="text-primary hover:text-primary-hover">experienced immigration law firm</Link></li>
                  <li>• <strong><Link to="/about" className="text-primary hover:text-primary-hover">Immigration Attorney Mexico City:</Link></strong> Licensed legal professionals with 15+ years experience and 1,000+ successful residency cases</li>
                  <li>• <strong><Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover">Mexican Citizenship Legal Services:</Link></strong> Naturalization process guidance, Spanish exam preparation, and SRE application support</li>
                  <li>• <strong><Link to="/services/corporate-immigration" className="text-primary hover:text-primary-hover">Corporate Immigration Mexico:</Link></strong> Business visa solutions, executive transfers, and employee relocation services</li>
                </ul>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium">🎯 <strong>Ready to Start?</strong> Learn more about <Link to="/blog/hire-mexico-immigration-lawyer-guide" className="text-green-600 hover:text-green-700 underline">when to hire a Mexico immigration lawyer</Link> and discover our proven approach to successful Mexico residency applications.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Professional CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center my-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Mexico Immigration Journey?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Mexico's immigration requirements can be complex and change frequently. Our experienced attorneys 
              provide personalized guidance to help you understand your options and navigate the process effectively.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4"
              onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
            >
              Schedule Your Free Consultation
            </Button>
            <p className="text-sm text-gray-600 mt-3">
              ✅ 30-minute strategy session • ✅ No obligation • ✅ Professional legal guidance
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.section 
          className="mb-20 section-gradient py-16 -mx-4 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Mexico Immigration Law Firm</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the difference of working with Mexico's most trusted immigration attorneys specializing in US and Canadian client services.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {whyChooseUs.slice(0, 3).map((reason, index) => (
                <motion.div key={index} variants={cardVariants} whileHover="hover">
                  <Card className="card-hover h-full">
                    <CardHeader>
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-primary">
                          {reason.icon}
                        </div>
                      </motion.div>
                      <CardTitle className="text-xl">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {whyChooseUs.slice(3).map((reason, index) => (
                <motion.div key={index + 3} variants={cardVariants} whileHover="hover">
                  <Card className="card-hover h-full">
                    <CardHeader>
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-primary">
                          {reason.icon}
                        </div>
                      </motion.div>
                      <CardTitle className="text-xl">{reason.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional expertise section */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Comprehensive Mexico Immigration Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Mexico Residency Experts</h4>
                  <p className="text-sm text-muted-foreground">Specialized in <Link to="/services/temporary-residency" className="text-primary hover:text-primary-hover underline">temporary</Link> and <Link to="/services/permanent-residency" className="text-primary hover:text-primary-hover underline">permanent residency applications</Link> with high success rates for US and Canadian citizens seeking <Link to="/services" className="text-primary hover:text-primary-hover underline">Mexico residency visas</Link>.</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Immigration Attorney Services</h4>
                  <p className="text-sm text-muted-foreground">Licensed <Link to="/about" className="text-primary hover:text-primary-hover underline">Mexico immigration lawyers</Link> providing bilingual legal representation for all aspects of Mexican immigration law and <Link to="/services" className="text-primary hover:text-primary-hover underline">visa assistance</Link>.</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Mexican Citizenship Assistance</h4>
                  <p className="text-sm text-muted-foreground">Expert guidance for <Link to="/services/mexican-citizenship" className="text-primary hover:text-primary-hover underline">Mexican citizenship by naturalization</Link>, including Spanish language preparation and civics exam support for qualifying residents. Learn more about our <Link to="/faqs" className="text-primary hover:text-primary-hover underline">citizenship requirements</Link>.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Social Proof Section - Moved Up for Better CTR */}
        <motion.section 
          className="mb-20 bg-gradient-to-br from-blue-50 to-indigo-50 py-16 -mx-4 px-4 rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                <CheckCircle className="w-5 h-5" />
                PROVEN RESULTS: High Success Rate
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Join 800+ Americans & Canadians Living Their Dream in Mexico
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. See what our clients say about their successful Mexico residency journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={cardVariants} whileHover="hover">
                  <Card className="card-hover h-full border-2 border-white shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-green-600">APPROVED ✅</span>
                      </div>
                      <blockquote className="text-muted-foreground mb-4 italic font-medium">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.location}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              className="text-center bg-white rounded-lg p-6 shadow-md"
              variants={itemVariants}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">800+</div>
                  <div className="text-sm text-gray-600">Success Cases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$2,800</div>
                  <div className="text-sm text-gray-600">Avg. Total Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">4.9★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Professional Trust-Building CTA */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-6">
              ✅ Professional Legal Guidance Available
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Navigate Mexico Immigration with Confidence
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized legal guidance from experienced bilingual attorneys who understand both Mexican immigration law and North American client needs. 
              We provide transparent advice and comprehensive support throughout your immigration journey.
            </p>
            <div className="space-y-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-blue-600 text-xl px-12 py-6 font-semibold shadow-lg"
                onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
              >
                Schedule Your Free Consultation
              </Button>
              <p className="text-sm opacity-75">
                💬 WhatsApp: +52 32 2278 7690 • 📞 Call +1 (555) 123-4567 • ⭐ 4.9/5 Rating
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Step 1: Strategy Call</div>
                <div className="text-sm opacity-75">We analyze your situation</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Step 2: Document Prep</div>
                <div className="text-sm opacity-75">We handle all paperwork</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <Star className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Step 3: Application Support</div>
                <div className="text-sm opacity-75">Professional representation</div>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-3xl"></div>
        </motion.div>
      </div>
      </div>
    </>
  );
};

export default Index;