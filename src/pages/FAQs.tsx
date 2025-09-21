import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import FAQAccordion from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQs = () => {
  // Organize FAQs by category for better navigation
  const visaResidencyFAQs = [
    {
      id: "visa-q1",
      question: "What is the difference between a Visitor Permit (FMM) and a Residency Visa?",
      answer: "A Visitor Permit (FMM - Forma Migratoria Múltiple) is for tourists and short-term business visitors, allowing stays up to 180 days without work or long-term residence rights. A Residency Visa is for those intending to live in Mexico for more than 180 days and is the first step to becoming a temporary or permanent resident."
    },
    {
      id: "visa-q2",
      question: "What's the main difference between Temporary and Permanent Residency?",
      answer: "Temporary Residency (Residencia Temporal) is for those living in Mexico for more than 180 days but less than four years. It's issued for one year initially and renewable for up to three more years. Permanent Residency (Residencia Permanente) is for indefinite stays, doesn't expire, doesn't need renewal, and automatically grants work permission."
    },
    {
      id: "visa-q3",
      question: "Can I apply for residency while in Mexico on a tourist permit?",
      answer: "Generally, no. The standard process requires applying at a Mexican consulate in your home country. Once approved, you travel to Mexico and exchange your visa for a residency card at INM within 30 days. Exceptions exist primarily for those with close family ties to Mexican citizens or residents (vínculo familiar process)."
    },
    {
      id: "visa-q4",
      question: "What are the financial requirements for residency?",
      answer: "Financial requirements are updated periodically and vary by consulate. You must prove economic solvency through minimum monthly income over six months or minimum average balance in investments/bank accounts over twelve months. The amounts are significant and it's crucial to check the latest figures at your specific consulate."
    }
  ];

  const applicationProcessFAQs = [
    {
      id: "process-q1",
      question: "How long does the residency application process take?",
      answer: "Timeline varies greatly. Consular interview and visa approval can take days to weeks. Once in Mexico, exchanging your visa for a residency card (canje process) at INM can take additional weeks to months, depending on local office workload."
    },
    {
      id: "process-q2",
      question: "I have my residency visa. What do I do when I arrive in Mexico?",
      answer: "Critical: Ensure the immigration officer processes your entry as a resident, not a tourist. Present your passport with residency visa sticker. You have 30 calendar days from entry to begin the canje process at an INM office to get your physical residency card. Failure to do so invalidates your visa."
    },
    {
      id: "process-q3",
      question: "What happens if I overstay my Visitor Permit (FMM)?",
      answer: "Overstaying is a violation of immigration law. To leave, you must go to an INM office or airport immigration desk to pay a fine based on days overstayed. You cannot apply for residency from within Mexico if your FMM has expired."
    }
  ];

  const workInvestmentFAQs = [
    {
      id: "work-q1",
      question: "Can I work with a Temporary Resident card?",
      answer: "Not automatically. Standard Temporary Residency obtained through economic solvency doesn't include work permission (permiso para trabajar). You need either a job offer from a Mexican employer who sponsors your visa application, or if you already have residency, you can apply to add work permissions. Permanent residents automatically have work rights."
    },
    {
      id: "work-q2",
      question: "How do I get a work permit in Mexico?",
      answer: "The process must be initiated by a Mexican employer registered with INM. The company submits a job offer on your behalf. Once INM approves, you're authorized for a consular interview abroad to get a visa. You cannot start this process without an employer sponsor."
    },
    {
      id: "work-q3",
      question: "Can I start a business in Mexico as a foreigner?",
      answer: "Yes, foreigners can own and operate businesses in Mexico. However, this requires navigating corporate law, tax regulations (SAT), and immigration procedures. Having residency and work permissions is crucial. We highly recommend seeking both legal and accounting advice."
    }
  ];

  const citizenshipFAQs = [
    {
      id: "citizenship-q1",
      question: "How can I become a Mexican citizen?",
      answer: "You can apply for naturalization after having legal residency for a certain period. General requirement is five consecutive years of residency (temporary or permanent) immediately preceding application. This reduces to two years if married to a Mexican citizen or have a Mexican-born child."
    },
    {
      id: "citizenship-q2",
      question: "What does the naturalization process involve?",
      answer: "Applicants must prove physical presence in Mexico for at least 18 months of the last two years. You'll take a Spanish language test and Mexican history/culture exam. Applicants over 60 are typically exempt from the culture exam."
    }
  ];

  const legalServicesFAQs = [
    {
      id: "legal-q1",
      question: "Do I need a lawyer to handle my immigration process?",
      answer: "While possible to complete alone, it can be challenging due to language barriers, bureaucratic complexities, and frequent regulation changes. A qualified lawyer prevents costly mistakes, handles paperwork and appointments, and provides guidance, saving significant time and stress."
    },
    {
      id: "legal-q2",
      question: "How much does an immigration lawyer cost in Mexico?",
      answer: "Fees vary based on case complexity, lawyer experience, and location, ranging from hundreds to several thousand US dollars. Always ask for a clear breakdown of what's included (government fees, legal fees, expenses) before hiring."
    },
    {
      id: "legal-q3",
      question: "What questions should I ask before hiring a lawyer?",
      answer: "Key questions: What's your experience with cases like mine? Can you provide references? What are total fees and what do they include? What's the estimated timeline? How will we communicate and who's my primary contact?"
    }
  ];

  // Combine all FAQs for the accordion
  const allFAQs = [
    ...visaResidencyFAQs,
    ...applicationProcessFAQs,
    ...workInvestmentFAQs,
    ...citizenshipFAQs,
    ...legalServicesFAQs
  ];

  return (
    <>
        <Helmet>
        <title>Mexico Immigration FAQs — Expert Answers & Guide</title>
        <meta name="description" content="Get answers to Mexico immigration questions: residency requirements, work permits, citizenship process & legal costs. Expert FAQ from experienced immigration lawyers." />
          <meta name="keywords" content="Mexico immigration FAQ, temporary residency Mexico, permanent residency Mexico, work permit Mexico, Mexican citizenship, immigration lawyer Mexico" />
        </Helmet>

        <Hero
          title="Mexico Immigration FAQs — Expert Answers & Guide"
          subtitle="Comprehensive answers to the most common questions about Mexican immigration, visa requirements, residency processes, work permits, and our legal services. Navigate the complex immigration system with expert guidance."
        primaryCta={{
          text: "Schedule a Consultation",
          onClick: () => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())
        }}
        />

        <div className="container mx-auto px-4 py-16">
          {/* Disclaimer */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="card-professional border-l-4 border-l-primary p-6 bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer:</strong> This information is for educational purposes only and does not constitute legal advice. 
                  Immigration laws and requirements change frequently. Please consult with a qualified immigration attorney for advice on your specific situation.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="card-professional p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Visas & Residency</h3>
                  <p className="text-sm text-muted-foreground">Tourist permits, temporary and permanent residency basics</p>
                </div>
                <div className="card-professional p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Application Process</h3>
                  <p className="text-sm text-muted-foreground">Step-by-step guidance through immigration procedures</p>
                </div>
                <div className="card-professional p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Work & Investment</h3>
                  <p className="text-sm text-muted-foreground">Work permits, business ownership, and employment</p>
                </div>
                <div className="card-professional p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Citizenship</h3>
                  <p className="text-sm text-muted-foreground">Naturalization process and requirements</p>
                </div>
                <div className="card-professional p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Legal Services</h3>
                  <p className="text-sm text-muted-foreground">Working with immigration lawyers and costs</p>
                </div>
              </div>
              
              <FAQAccordion items={allFAQs} />
            </div>
          </section>

          {/* Still Have Questions */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Still have questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us for personalized answers about your specific immigration situation. 
                We're here to help guide you through the Mexico immigration process with expert legal advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="btn-professional"
                  onClick={() => import('@/utils/calendly').then(({ openCalendlyPopup }) => openCalendlyPopup())}
                >
                  Schedule a Consultation
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/temporary-residency">View Our Services</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
    </>
  );
};

export default FAQs;