import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-purple-200/50 mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-slate-500">
          <p>© 2025 GrowthProAI - Mini Local Business Dashboard</p>
          <p className="text-sm mt-1">Discover your business insights and SEO potential</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;