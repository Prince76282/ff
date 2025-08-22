import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faquestion = ({ question, answer }) => {
  const [activeIndex, setActiveIndex] = useState(null);  // Track which accordion item is active

  const handleAccordionChange = (index) => {
    setActiveIndex(index === activeIndex ? null : index);  // Toggle open/close
  };

  return (
    <div id="faqs" className="w-full">
      <Accordion type="single" collapsible value={activeIndex}>
        <AccordionItem value="item-1" className="bg-black text-white border border-gray-700 rounded-lg">
          <AccordionTrigger
            onClick={() => handleAccordionChange("item-1")}  // Update the active index on click
            className="hover:text-gray-300 px-4 py-2"
          >
            {question}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faquestion;
