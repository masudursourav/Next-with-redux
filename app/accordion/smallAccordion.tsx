"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function SmallAccordion({ props }: { props: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`col-span-${isOpen ? "4" : "1"}`}>
      <Accordion
        type="single"
        collapsible
        className="w-full bg-[#284F66]"
        onChange={() => setIsOpen(!isOpen)}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{props}</AccordionTrigger>
          <AccordionContent className="bg-white">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
