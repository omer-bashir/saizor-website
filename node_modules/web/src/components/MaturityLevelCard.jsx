
import React from 'react';

const MaturityLevelCard = ({ level, title, description, isActive }) => {
  return (
    <div className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
      isActive 
        ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20' 
        : 'border-border bg-card hover:border-primary/30'
    }`}>
      <div className={`text-5xl font-bold mb-3 ${
        isActive ? 'text-primary' : 'text-foreground/20'
      }`} style={{ fontVariantNumeric: 'tabular-nums' }}>
        {level}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default MaturityLevelCard;
