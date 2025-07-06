import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import BusinessCard from '../components/BusinessCard';
import { BusinessData, BusinessFormData } from '../types';
import { businessApi } from '../services/api';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [businessInfo, setBusinessInfo] = useState<BusinessFormData | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get data from sessionStorage
    const storedBusinessData = sessionStorage.getItem('businessData');
    const storedBusinessInfo = sessionStorage.getItem('businessInfo');

    if (storedBusinessData && storedBusinessInfo) {
      setBusinessData(JSON.parse(storedBusinessData));
      setBusinessInfo(JSON.parse(storedBusinessInfo));
    } else {
      // If no data found, redirect to home page
      navigate('/');
    }
  }, [navigate]);

  const handleRegenerateHeadline = async () => {
    if (!businessInfo) return;
    
    setIsRegenerating(true);
    setError(null);
    
    try {
      const response = await businessApi.regenerateHeadline(businessInfo.name, businessInfo.location);
      
      if (businessData) {
        const updatedData = {
          ...businessData,
          headline: response.headline
        };
        setBusinessData(updatedData);
        
        // Update sessionStorage with new data
        sessionStorage.setItem('businessData', JSON.stringify(updatedData));
      }
    } catch (err) {
      setError('Failed to regenerate headline. Please try again.');
      console.error('Error regenerating headline:', err);
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleNewAnalysis = () => {
    // Clear stored data and navigate to home
    sessionStorage.removeItem('businessData');
    sessionStorage.removeItem('businessInfo');
    navigate('/');
  };

  if (!businessData || !businessInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <AlertCircle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-800 mb-2">No Data Found</h2>
          <p className="text-slate-600 mb-6">
            Please submit your business information first to view results.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <button
            onClick={handleNewAnalysis}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            New Analysis
          </button>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Business Insights</h2>
          <p className="text-slate-600">
            Here are the insights for your business based on our analysis
          </p>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-2xl mx-auto mb-8 p-4 bg-rose-50 border border-rose-200 rounded-lg">
          <p className="text-rose-700 text-center">{error}</p>
        </div>
      )}

      {/* Results */}
      <div className="max-w-2xl mx-auto">
        <BusinessCard
          data={businessData}
          businessInfo={businessInfo}
          onRegenerateHeadline={handleRegenerateHeadline}
          isRegenerating={isRegenerating}
        />
      </div>

      {/* Additional Actions */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md p-6 border border-purple-200/50">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">What's Next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-sky-50 rounded-lg border border-sky-200/50">
              <h4 className="font-medium text-sky-800 mb-2">Improve Your Rating</h4>
              <p className="text-sm text-sky-600">
                Focus on customer service and encourage satisfied customers to leave reviews
              </p>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200/50">
              <h4 className="font-medium text-emerald-800 mb-2">Use SEO Headlines</h4>
              <p className="text-sm text-emerald-600">
                Implement the generated headlines in your website and marketing materials
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <button
              onClick={handleNewAnalysis}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Analyze Another Business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;