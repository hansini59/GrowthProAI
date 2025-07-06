import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, TrendingUp, Home, BarChart3 } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Building2 className="w-8 h-8 text-purple-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">GrowthProAI</h1>
            <TrendingUp className="w-8 h-8 text-emerald-400" />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              to="/results"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/results'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Results</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;