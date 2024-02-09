import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SmallAccordion from "./smallAccordion";
export default function page() {
  return (
    <div className="p-40">
      <Accordion type="single" collapsible className="w-944px bg-[#284F66]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent className="bg-white">
            <div className="grid grid-cols-4 gap-4">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <SmallAccordion key={i} props={`props-${i}`} />
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
