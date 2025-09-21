import { Helmet } from "react-helmet-async";
import { 
  motion, 
  useInView, 
  useAnimation, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValue,
  AnimatePresence
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
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress into different values
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const servicesY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [1, 1, 0.5, 0]);
  
  // Spring animations for smooth interactions
  const heroScale = useSpring(1, { stiffness: 300, damping: 20 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Mouse tracking for subtle interactions
  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 20);
    mouseY.set((clientY - innerHeight / 2) / 20);
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

  // Enhanced animation variants with proper types
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 60, 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-15, 15, -15],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as any
      }
    }
  };

  // Advanced stagger animations for services
  const servicesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        when: "beforeChildren" as const
      }
    }
  };

  const serviceCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15
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
      <motion.div 
        ref={containerRef}
        className="relative z-10"
        onMouseMove={handleMouseMove}
        style={{ perspective: 1000 }}
      >
        <Helmet>
          <title>Mexico Immigration Lawyer — Visa & Residency Experts in Mexico</title>
          <meta name="description" content="Expert Mexico immigration lawyer helping US & Canadian citizens get residency, work visas & citizenship. Bilingual attorneys with 15+ years experience. Free consultation!" />
        </Helmet>

        {/* Enhanced Hero Section with Parallax */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1.2
          }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Hero 
              title="Mexico Immigration Lawyer — Visa & Residency Experts"
              subtitle="Get expert legal assistance for Mexico residency, work visas, and citizenship. Bilingual attorneys with 15+ years experience helping US & Canadian citizens."
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Services Section with Advanced Animations */}
        <motion.section 
          className="py-20 bg-background"
          style={{ y: servicesY }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.div
                variants={itemVariants}
                className="relative inline-block"
              >
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Our Mexico Immigration Services
                </motion.h2>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "6rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                From temporary visas to permanent residency and citizenship, we provide comprehensive legal assistance for all Mexico immigration needs.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={servicesContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={serviceCardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="group"
                >
                  <motion.div
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      icon={service.icon}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Why Choose Us Section */}
        <motion.section 
          className="py-20 bg-muted/30 relative overflow-hidden"
        >
          {/* Floating background elements */}
          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
                whileHover={{ 
                  scale: 1.02,
                  textShadow: "0 0 20px rgba(var(--primary), 0.3)"
                }}
              >
                Why Choose Our Legal Team?
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                Experience, expertise, and dedication to getting you through Mexico's immigration system successfully.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {whyChooseUs.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 border-0 shadow-lg backdrop-blur-sm bg-background/80 hover:bg-background group-hover:shadow-2xl">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="text-primary p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.1
                          }}
                          transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                        >
                          {feature.icon}
                        </motion.div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Statistics Section with Advanced Counter Animation */}
        <motion.section 
          ref={ref}
          className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Animated background patterns */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-16"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 30px rgba(255,255,255,0.5)"
              }}
            >
              Proven Results You Can Trust
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div 
                variants={itemVariants} 
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-5xl md:text-7xl font-bold mb-4 group-hover:text-yellow-300 transition-colors"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: 0.5,
                    duration: 1
                  }}
                >
                  {counters.experience}+
                </motion.div>
                <motion.div 
                  className="text-xl opacity-90 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 1 }}
                >
                  Years Experience
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-5xl md:text-7xl font-bold mb-4 group-hover:text-yellow-300 transition-colors"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: 0.7,
                    duration: 1
                  }}
                >
                  {counters.clients}+
                </motion.div>
                <motion.div 
                  className="text-xl opacity-90 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 1.2 }}
                >
                  Successful Clients
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants} 
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-5xl md:text-7xl font-bold mb-4 group-hover:text-yellow-300 transition-colors"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: 0.9,
                    duration: 1
                  }}
                >
                  {counters.successRate}%
                </motion.div>
                <motion.div 
                  className="text-xl opacity-90 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 1.4 }}
                >
                  Success Rate
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Testimonials Section */}
        <motion.section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
              >
                What Our Clients Say
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                Hear from families and individuals who successfully obtained their Mexico residency with our help.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                      }
                    }}
                    className="group"
                  >
                    <Card className="h-full border-0 shadow-lg bg-background/80 backdrop-blur-sm group-hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-8">
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.3 }}
                        >
                          <motion.div 
                            className="flex text-yellow-500 mb-4"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                              delay: index * 0.3 + 0.2,
                              type: "spring",
                              stiffness: 300
                            }}
                          >
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  delay: index * 0.3 + 0.3 + i * 0.1,
                                  type: "spring",
                                  stiffness: 400
                                }}
                              >
                                <Star className="w-5 h-5 fill-current" />
                              </motion.div>
                            ))}
                          </motion.div>
                          <motion.p 
                            className="text-muted-foreground italic text-lg leading-relaxed"
                            whileHover={{ color: "var(--foreground)" }}
                            transition={{ duration: 0.3 }}
                          >
                            "{testimonial.quote}"
                          </motion.p>
                        </motion.div>
                        <motion.div 
                          className="border-t pt-6"
                          whileHover={{ borderColor: "var(--primary)" }}
                        >
                          <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {testimonial.location}
                          </p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
          }}
          whileHover={{ scale: 1.01 }}
        >
          <CTASection />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Index;