import React, { useState } from 'react';
import { BusinessFormData } from '../types';
import { MapPin, Building2, Sparkles } from 'lucide-react';

interface BusinessFormProps {
  onSubmit: (data: BusinessFormData) => void;
  isLoading: boolean;
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<BusinessFormData>({
    name: '',
    location: ''
  });

  const [errors, setErrors] = useState<Partial<BusinessFormData>>({});

  // Sample suggestions for better UX
  const businessSuggestions = [
    'Coffee Hyderabad', 'Biryani Paradise', 'Tech Solutions', 'Fitness First Gym',
    'Beauty Salon', 'Pizza Corner', 'Dental Clinic', 'Auto Repair Shop'
  ];

  const locationSuggestions = [
    'Hyderabad', 'Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune', 'Kolkata', 'Gurgaon'
  ];

  const validate = () => {
    const newErrors: Partial<BusinessFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Business name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Business name must be at least 2 characters';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    } else if (formData.location.trim().length < 2) {
      newErrors.location = 'Location must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof BusinessFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSuggestionClick = (field: keyof BusinessFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-purple-500" />
              <span>Business Name *</span>
            </div>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Coffee Hyderabad, Mario's Pizza, Tech Solutions"
            className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 text-lg bg-white/80 backdrop-blur-sm ${
              errors.name ? 'border-rose-400 bg-rose-50/80' : 'border-purple-200 hover:border-purple-300'
            }`}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-rose-600 flex items-center space-x-1">
              <span>⚠️</span>
              <span>{errors.name}</span>
            </p>
          )}
          
          {/* Business Name Suggestions */}
          <div className="mt-3">
            <p className="text-xs text-slate-500 mb-2">Popular examples:</p>
            <div className="flex flex-wrap gap-2">
              {businessSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionClick('name', suggestion)}
                  className="px-3 py-1 text-xs bg-purple-50 text-purple-700 rounded-full hover:bg-purple-100 transition-colors border border-purple-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-3">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span>Location *</span>
            </div>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Hyderabad, Mumbai, Bangalore"
            className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 text-lg bg-white/80 backdrop-blur-sm ${
              errors.location ? 'border-rose-400 bg-rose-50/80' : 'border-emerald-200 hover:border-emerald-300'
            }`}
          />
          {errors.location && (
            <p className="mt-2 text-sm text-rose-600 flex items-center space-x-1">
              <span>⚠️</span>
              <span>{errors.location}</span>
            </p>
          )}
          
          {/* Location Suggestions */}
          <div className="mt-3">
            <p className="text-xs text-slate-500 mb-2">Major cities:</p>
            <div className="flex flex-wrap gap-2">
              {locationSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSuggestionClick('location', suggestion)}
                  className="px-3 py-1 text-xs bg-emerald-50 text-emerald-700 rounded-full hover:bg-emerald-100 transition-colors border border-emerald-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Analyzing Business...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Get Comprehensive Business Insights</span>
            </>
          )}
        </button>
      </form>

      {/* Feature Preview */}
      <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
        <h4 className="font-semibold text-slate-800 mb-2 flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span>What You'll Get:</span>
        </h4>
        <ul className="text-sm text-slate-600 space-y-1">
          <li>• Detailed business ratings and review analysis</li>
          <li>• AI-generated SEO headlines for better visibility</li>
          <li>• Market competition and location insights</li>
          <li>• Growth recommendations and actionable tips</li>
          <li>• Customer demographics and peak hours data</li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessForm;