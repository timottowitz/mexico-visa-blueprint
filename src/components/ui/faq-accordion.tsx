import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

const FAQAccordion = ({ items, className }: FAQAccordionProps) => {
  return (
    <div className={className}>
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item) => (
          <AccordionItem 
            key={item.id} 
            value={item.id}
            className="card-professional border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;