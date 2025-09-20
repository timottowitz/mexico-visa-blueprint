import { Helmet } from "react-helmet-async";
import Hero from "@/components/ui/hero";
import FAQAccordion from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQs = () => {
  const faqItems = [
    {
      id: "q1",
      question: "Do I need a visa to live in Mexico long-term?",
      answer: "Yes. Tourists can typically enter for short stays, but living in Mexico beyond 180 days requires a resident visa (temporary or permanent). The tourist permit cannot be converted to residency in most cases, except in specific family or authorized scenarios."
    },
    {
      id: "q2", 
      question: "How long can I stay in Mexico on a tourist permit (FMM)?",
      answer: "Up to 180 days, at the discretion of the immigration officer. Always verify the number of days granted on your entry record."
    },
    {
      id: "q3",
      question: "Can I exit and re-enter to get another 180 days?",
      answer: "While possible, repeated \"border runs\" are risky and may result in fewer days or additional scrutiny. If you plan to remain in Mexico, obtaining legal residency is recommended."
    },
    {
      id: "q4",
      question: "What's the difference between Temporary and Permanent Residency?",
      answer: "Temporary Residency allows residence for up to 4 years (renewable within that period). Permanent Residency has no expiration and includes open work authorization. Many applicants become permanent after time as a temporary resident or via qualifying family/financial routes."
    },
    {
      id: "q5",
      question: "How can I qualify for a Temporary Resident visa?",
      answer: "Common routes include financial solvency (income/savings measured against UMA thresholds), family unity (Mexican spouse/child), a Mexican job offer with INM authorization, student status, or significant assets/investment."
    },
    {
      id: "q6",
      question: "Can I qualify for Permanent Residency directly?",
      answer: "Some can apply directly via higher financial solvency at certain consulates or via family unity (e.g., parent of a Mexican minor). Otherwise, most applicants transition after 4 years as temporary residents."
    },
    {
      id: "q7",
      question: "My spouse is Mexican—what are my options?",
      answer: "You can typically obtain Temporary Residency based on marriage without financial proofs, often filing in Mexico. After ~2 years, you may upgrade to Permanent Residency if requirements are met."
    },
    {
      id: "q8",
      question: "Does Temporary Residency allow me to work?",
      answer: "Only if your residency includes permission to work. Work-authorized status is usually tied to a job offer or can be added later via INM if you begin lucrative activities in Mexico. Permanent residents may work for any employer."
    },
    {
      id: "q9",
      question: "Do I need to leave Mexico to apply for residency?",
      answer: "Most first-time applications are made at a Mexican consulate abroad. Exceptions include many family unity cases and certain authorized in-country changes."
    },
    {
      id: "q10",
      question: "How long does the residency process take?",
      answer: "Timelines vary. Consular stages can take days to weeks; the INM card issuance in Mexico often takes several weeks. Work cases include an additional INM authorization step."
    },
    {
      id: "q11",
      question: "Does Mexico allow dual citizenship?",
      answer: "Yes. Mexico permits dual citizenship. U.S. and Canadian citizens generally keep their original nationality when naturalizing as Mexican citizens."
    },
    {
      id: "q12",
      question: "When can I apply for Mexican citizenship?",
      answer: "Typically after 5 years of legal residency, or after 2 years if married to a Mexican citizen and meeting requirements. Applicants take Spanish and civics exams and file with SRE."
    },
    {
      id: "q13",
      question: "Do I need an immigration lawyer?", 
      answer: "Not mandatory, but recommended. Rules vary by consulate and change periodically. Legal guidance can prevent delays and rejections by ensuring complete, correctly prepared applications."
    },
    {
      id: "q14",
      question: "What if my application is denied?",
      answer: "We assess the reason for denial and may appeal, correct deficiencies, or reapply with stronger evidence. Many issues are resolvable with the right strategy."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mexico Immigration FAQs — Your Questions Answered</title>
        <meta name="description" content="Frequently asked questions about moving to Mexico, visas, residency requirements, and hiring a Mexican immigration lawyer. Clear answers from our legal team." />
      </Helmet>

      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Mexico immigration, visa requirements, residency processes, and our legal services. Our experienced team provides clear, practical guidance for your immigration journey."
        primaryCta={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
      />

      <div className="container mx-auto px-4 py-16">
        {/* FAQ Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Still have questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for personalized answers about your specific immigration situation. 
              We're here to help guide you through the Mexico immigration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-professional">
                <Link to="/contact">Schedule a Consultation</Link>
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