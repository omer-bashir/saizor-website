
import React from 'react';

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
