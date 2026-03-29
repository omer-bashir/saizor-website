
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, company }) => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 break-inside-avoid mb-6">
      <Quote className="w-8 h-8 text-primary/40 mb-4" />
      <p className="text-sm leading-relaxed text-foreground/90 mb-4">
        "{quote}"
      </p>
      <div className="pt-4 border-t border-border">
        <p className="font-semibold text-sm">{author}</p>
        <p className="text-xs text-foreground/60 mt-1">
          {role} at {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
