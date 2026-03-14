import type { FaqItem } from "@/types/content";
import { SectionShell } from "@/components/shared/section-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQAccordionProps = {
  title?: string;
  description?: string;
  items: FaqItem[];
};

export function FAQAccordion({
  title = "Preguntas frecuentes",
  description = "Respondemos dudas comunes antes de iniciar implementación.",
  items,
}: FAQAccordionProps) {
  return (
    <SectionShell eyebrow="FAQ" title={title} description={description}>
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}
