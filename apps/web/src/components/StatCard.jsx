
import React from 'react';

const StatCard = ({ value, label, icon: Icon }) => {
  return (
    <div className="text-center">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {value}
      </div>
      <div className="text-sm text-foreground/80">{label}</div>
    </div>
  );
};

export default StatCard;
