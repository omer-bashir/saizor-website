
import React from 'react';

const TrustBadge = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-card/50 rounded-xl border border-border/50 backdrop-blur-sm transition-all duration-200 hover:bg-card hover:border-primary/30">
      {Icon && <Icon className="w-5 h-5 text-primary flex-shrink-0" />}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default TrustBadge;
