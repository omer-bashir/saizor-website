
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, price }) => {
  return (
    <div className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col h-full">
      <div className="mb-4">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {price && (
        <p className="text-2xl font-bold text-primary mb-3">{price}</p>
      )}
      <p className="text-sm text-foreground/80 leading-relaxed flex-grow">{description}</p>
      <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-200">
        Learn more
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  );
};

export default ServiceCard;
