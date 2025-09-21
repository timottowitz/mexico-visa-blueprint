import { Helmet } from "react-helmet-async";
import { 
  motion, 
  useInView, 
  useAnimation, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValue,
  AnimatePresence,
  useMotionTemplate,
  LayoutGroup
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Hero from "@/components/ui/hero";
import ServiceCard from "@/components/ui/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/ui/cta-section";
import { AnimatedBackground, ParallaxText } from "@/components/ui/animated-background";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Globe, Award, MessageSquare, Star } from "lucide-react";
import lawyerProfileImage from "@/assets/lawyer-profile.png";

const Index = () => {
  // Animation controls and refs
  const controls = useAnimation();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Enhanced scroll-based animations with multiple targets
  const { scrollYProgress: globalScrollProgress } = useScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Advanced transform values for richer parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 0.95]);
  const servicesY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const servicesRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.8, 0]);
  
  // Scroll progress indicator
  const scrollProgress = useTransform(globalScrollProgress, [0, 1], ["0%", "100%"]);
  
  // Enhanced spring animations with different physics profiles
  const magneticScale = useSpring(1, { stiffness: 400, damping: 25 });
  const magneticX = useSpring(0, { stiffness: 300, damping: 20 });
  const magneticY = useSpring(0, { stiffness: 300, damping: 20 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Dynamic background gradient based on scroll
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, hsl(var(--primary) / 0.1) 0%, transparent 70%)`;
  
  // Enhanced mouse tracking with magnetic effects
  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    
    // Update mouse position for background gradient
    mouseX.set(clientX);
    mouseY.set(clientY);
    
    // Subtle parallax based on mouse position
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    magneticX.set((clientX - centerX) / 50);
    magneticY.set((clientY - centerY) / 50);
  };
  
  // Magnetic button effect
  const handleMagneticHover = (isHovering: boolean) => {
    magneticScale.set(isHovering ? 1.05 : 1);
  };

  // Statistics counter animation
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    successRate: 0
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Animate counters with spring physics
      const animateCounter = (key: keyof typeof counters, target: number, duration: number) => {
        let start = 0;
        const increment = target / (duration / 50);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCounters(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 50);
      };

      animateCounter('experience', 15, 1500);
      animateCounter('clients', 800, 2000);
      animateCounter('successRate', 98, 1200);
    }
  }, [isInView, controls]);

  // Enhanced animation variants with layout support
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  // Hero section variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        duration: 1.2
      }
    }
  };

  // Layout-aware service card variants
  const serviceCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateY: -15,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Feature card variants
  const featureCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0 20px 40px hsl(var(--primary) / 0.1)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Magnetic button variants
  const magneticButtonVariants = {
    rest: { scale: 1, rotateZ: 0 },
    hover: { 
      scale: 1.05,
      rotateZ: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
      }
    },
    tap: { scale: 0.95 }
  };

  // Text reveal variants
  const textRevealVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  // Statistics variants
  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: i * 0.2,
        duration: 0.8
      }
    })
  };

  // CTA variants
  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Data arrays
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
      icon: Award,
      title: "Expertise in Mexican Immigration Law",
      description: "Licensed attorneys tracking the latest rules and policy changes. We tailor the best visa strategy for your situation—finances, family, work, or investment."
    },
    {
      icon: Globe,
      title: "Bilingual & Bicultural Team",
      description: "Fluent in English and Spanish. We understand North American expectations and Mexican procedures."
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Hundreds of approvals across residency types. Clients commend our responsiveness and results."
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "One-on-one consultations, consulate selection guidance, document checklists, and step-by-step support."
    },
    {
      icon: MessageSquare,
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
    <LayoutGroup>
      <Helmet>
        <title>Expert Mexico Immigration Lawyers | Visa & Residency Services</title>
        <meta
          name="description"
          content="Professional Mexico immigration legal services. Expert lawyers for temporary residency, permanent residency, work visas, and Mexican citizenship. Get your consultation today."
        />
        <meta name="keywords" content="Mexico immigration lawyer, Mexico visa lawyer, temporary residency Mexico, permanent residency Mexico, work visa Mexico, Mexican citizenship, immigration attorney Mexico" />
        <link rel="canonical" href="https://mexico-immigration-lawyers.com/" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Expert Mexico Immigration Lawyers | Visa & Residency Services" />
        <meta property="og:description" content="Professional Mexico immigration legal services. Expert lawyers for temporary residency, permanent residency, work visas, and Mexican citizenship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mexico-immigration-lawyers.com/" />
        <meta property="og:image" content="https://mexico-immigration-lawyers.com/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Mexico Immigration Lawyers | Visa & Residency Services" />
        <meta name="twitter:description" content="Professional Mexico immigration legal services. Get expert help with your Mexico visa and residency needs." />
        <meta name="twitter:image" content="https://mexico-immigration-lawyers.com/twitter-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Mexico Immigration Lawyers",
            "description": "Expert legal services for Mexico immigration, visas, and residency applications",
            "url": "https://mexico-immigration-lawyers.com",
            "telephone": "+52-xxx-xxx-xxxx",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Professional Office Address",
              "addressLocality": "Mexico City",
              "addressCountry": "Mexico"
            },
            "areaServed": "Mexico",
            "serviceType": ["Immigration Law", "Visa Services", "Residency Applications"],
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50 origin-left"
        style={{ scaleX: scrollProgress }}
        layoutId="scroll-progress"
      />

      <AnimatedBackground />
      
      <motion.div 
        ref={containerRef}
        className="min-h-screen relative overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{ 
          background: backgroundGradient,
          x: magneticX,
          y: magneticY
        }}
      >
        {/* Hero Section with Enhanced Animations */}
        <motion.section 
          className="relative"
          style={{ 
            y: heroY, 
            opacity,
            rotateX: heroRotate,
            scale: heroScale
          }}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          layoutId="hero-section"
        >
          <Hero
            eyebrow="Trusted Legal Expertise"
            title="Your Gateway to Mexico Immigration Success"
            subtitle="Expert legal guidance for temporary residency, permanent residency, work visas, and Mexican citizenship. Navigate Mexico's immigration process with confidence."
            primaryCta={{
              text: "Get Free Consultation",
              href: "/consultation"
            }}
            secondaryCta={{
              text: "View Our Services",
              href: "/services"
            }}
          />
        </motion.section>

        {/* Services Section with Layout Animations */}
        <motion.section
          className="py-24 relative z-10"
          style={{ 
            y: servicesY,
            rotateX: servicesRotate
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layoutId="services-section"
        >
          <div className="container mx-auto px-4">
            <ParallaxText className="text-center mb-16" speed={0.3}>
              <motion.div variants={textRevealVariants} layout>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Our Immigration Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive legal solutions for all your Mexico immigration needs
                </p>
              </motion.div>
            </ParallaxText>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              layout
            >
              <AnimatePresence mode="popLayout">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={serviceCardVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => handleMagneticHover(true)}
                    onHoverEnd={() => handleMagneticHover(false)}
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d"
                    }}
                    layoutId={`service-${index}`}
                    custom={index}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section with Magnetic Effects */}
        <motion.section
          className="py-24 bg-secondary/30 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layoutId="why-choose-section"
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={textRevealVariants} layout>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Legal Team?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience, expertise, and dedication to your immigration success
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              layout
            >
              <AnimatePresence mode="popLayout">
                {whyChooseUs.map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    variants={featureCardVariants} 
                    whileHover="hover"
                    layoutId={`feature-${index}`}
                    custom={index}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/10 bg-background/50 backdrop-blur-sm overflow-hidden">
                      <CardHeader className="text-center">
                        <motion.div 
                          className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                          variants={magneticButtonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <motion.div
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          >
                            <item.icon className="h-8 w-8 text-primary" />
                          </motion.div>
                        </motion.div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-center">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Statistics Section with Advanced Springs */}
        <motion.section 
          ref={ref}
          className="py-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layoutId="stats-section"
        >
          {/* Enhanced floating elements with physics */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            animate={{
              y: [-20, -50, -20],
              x: [-10, 30, -10],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
            animate={{
              y: [10, 30, 10],
              x: [-5, -25, -5],
              scale: [1, 0.7, 1],
              rotate: [0, -90, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 2
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center mb-16" variants={textRevealVariants} layout>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Proven Track Record
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our numbers speak for themselves
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-12 text-center"
              variants={containerVariants}
              layout
            >
              <motion.div 
                variants={statVariants} 
                whileHover={{ scale: 1.05 }}
                layoutId="stat-1"
                custom={0}
              >
                <motion.div 
                  className="text-6xl md:text-7xl font-bold text-primary mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 0px hsl(var(--primary) / 0.5)",
                      "0 0 30px hsl(var(--primary) / 0.8)",
                      "0 0 0px hsl(var(--primary) / 0.5)"
                    ],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {counters.experience}+
                </motion.div>
                <p className="text-2xl font-semibold text-muted-foreground">Years Experience</p>
              </motion.div>

              <motion.div 
                variants={statVariants} 
                whileHover={{ scale: 1.05 }}
                layoutId="stat-2"
                custom={1}
              >
                <motion.div 
                  className="text-6xl md:text-7xl font-bold text-accent mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 0px hsl(var(--accent) / 0.5)",
                      "0 0 30px hsl(var(--accent) / 0.8)",
                      "0 0 0px hsl(var(--accent) / 0.5)"
                    ],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: 0.7,
                    ease: "easeInOut"
                  }}
                >
                  {counters.clients}+
                </motion.div>
                <p className="text-2xl font-semibold text-muted-foreground">Clients Helped</p>
              </motion.div>

              <motion.div 
                variants={statVariants} 
                whileHover={{ scale: 1.05 }}
                layoutId="stat-3"
                custom={2}
              >
                <motion.div 
                  className="text-6xl md:text-7xl font-bold text-primary mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 0px hsl(var(--primary) / 0.5)",
                      "0 0 30px hsl(var(--primary) / 0.8)",
                      "0 0 0px hsl(var(--primary) / 0.5)"
                    ],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: 1.4,
                    ease: "easeInOut"
                  }}
                >
                  {counters.successRate}%
                </motion.div>
                <p className="text-2xl font-semibold text-muted-foreground">Success Rate</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-24 bg-background relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          layoutId="testimonials-section"
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={textRevealVariants} layout>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Client Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real experiences from clients we've helped achieve their Mexico immigration goals
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              layout
            >
              <AnimatePresence mode="popLayout">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    variants={featureCardVariants}
                    whileHover="hover"
                    layoutId={`testimonial-${index}`}
                    custom={index}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 + 0.5, type: "spring", stiffness: 300 }}
                            >
                              <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                        <blockquote className="text-muted-foreground mb-4 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="border-t border-primary/10 pt-4">
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA with Layout Animation */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layoutId="cta-section"
        >
          <CTASection />
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
};

export default Index;