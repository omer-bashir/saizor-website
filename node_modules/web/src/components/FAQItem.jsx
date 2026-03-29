
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQItem = ({ question, answer, value }) => {
  return (
    <AccordionItem value={value} className="border-border">
      <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-foreground/80 leading-relaxed">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
