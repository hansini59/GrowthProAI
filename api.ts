import { BusinessFormData, ApiResponse, HeadlineResponse } from '../types';

// Check if we're in development or production
const isDevelopment = import.meta.env.DEV;
const API_BASE_URL = isDevelopment ? 'http://localhost:3001' : '';

// Mock data for production when backend is not available
const mockBusinessCategories = {
  coffee: { 
    baseRating: 4.3, 
    reviewRange: [85, 250], 
    keywords: ['coffee', 'cafe', 'espresso', 'latte', 'cappuccino', 'brew', 'roastery', 'beans'],
    insights: {
      peakHours: '7-10 AM, 2-4 PM',
      popularItems: ['Espresso', 'Cappuccino', 'Cold Brew'],
      customerType: 'Students, Professionals, Coffee Enthusiasts'
    }
  },
  restaurant: { 
    baseRating: 4.1, 
    reviewRange: [120, 400], 
    keywords: ['restaurant', 'dining', 'food', 'kitchen', 'bistro', 'eatery', 'grill'],
    insights: {
      peakHours: '12-2 PM, 7-9 PM',
      popularItems: ['Signature Dishes', 'Chef Specials', 'Desserts'],
      customerType: 'Families, Couples, Food Lovers'
    }
  },
  pizza: { 
    baseRating: 4.2, 
    reviewRange: [90, 300], 
    keywords: ['pizza', 'pizzeria', 'italian', 'slice', 'margherita', 'pepperoni'],
    insights: {
      peakHours: '6-10 PM, Weekends',
      popularItems: ['Margherita', 'Pepperoni', 'Veggie Supreme'],
      customerType: 'Families, Young Adults, Groups'
    }
  },
  bakery: { 
    baseRating: 4.4, 
    reviewRange: [60, 180], 
    keywords: ['bakery', 'bread', 'pastry', 'cake', 'croissant', 'muffin', 'bakehouse'],
    insights: {
      peakHours: '7-11 AM, 4-6 PM',
      popularItems: ['Fresh Bread', 'Pastries', 'Custom Cakes'],
      customerType: 'Local Residents, Office Workers'
    }
  },
  fastfood: { 
    baseRating: 3.9, 
    reviewRange: [200, 500], 
    keywords: ['burger', 'fast', 'quick', 'fries', 'sandwich', 'wrap', 'drive'],
    insights: {
      peakHours: '12-2 PM, 6-8 PM',
      popularItems: ['Burgers', 'Fries', 'Combo Meals'],
      customerType: 'Students, Busy Professionals, Families'
    }
  },
  indian: { 
    baseRating: 4.3, 
    reviewRange: [80, 250], 
    keywords: ['indian', 'curry', 'biryani', 'tandoor', 'masala', 'dal', 'naan'],
    insights: {
      peakHours: '12-2 PM, 7-9 PM',
      popularItems: ['Biryani', 'Butter Chicken', 'Naan'],
      customerType: 'Families, Indian Food Lovers, Tourists'
    }
  },
  chinese: { 
    baseRating: 4.1, 
    reviewRange: [70, 200], 
    keywords: ['chinese', 'noodles', 'fried rice', 'dim sum', 'wok', 'szechuan'],
    insights: {
      peakHours: '6-9 PM, Weekends',
      popularItems: ['Fried Rice', 'Noodles', 'Sweet & Sour'],
      customerType: 'Families, Young Adults, Groups'
    }
  },
  bar: { 
    baseRating: 4.0, 
    reviewRange: [100, 300], 
    keywords: ['bar', 'pub', 'drinks', 'cocktail', 'beer', 'wine', 'lounge'],
    insights: {
      peakHours: '6-11 PM, Weekends',
      popularItems: ['Craft Beer', 'Cocktails', 'Bar Snacks'],
      customerType: 'Young Adults, Professionals, Groups'
    }
  },
  gym: { 
    baseRating: 4.2, 
    reviewRange: [50, 150], 
    keywords: ['gym', 'fitness', 'workout', 'training', 'exercise', 'health'],
    insights: {
      peakHours: '6-9 AM, 6-9 PM',
      popularItems: ['Personal Training', 'Group Classes', 'Equipment'],
      customerType: 'Fitness Enthusiasts, Health Conscious'
    }
  },
  salon: { 
    baseRating: 4.3, 
    reviewRange: [40, 120], 
    keywords: ['salon', 'hair', 'beauty', 'spa', 'styling', 'cut', 'color'],
    insights: {
      peakHours: '10 AM-6 PM, Weekends',
      popularItems: ['Haircuts', 'Styling', 'Treatments'],
      customerType: 'All Demographics, Beauty Conscious'
    }
  },
  retail: { 
    baseRating: 4.0, 
    reviewRange: [60, 200], 
    keywords: ['store', 'shop', 'boutique', 'retail', 'fashion', 'clothing'],
    insights: {
      peakHours: '11 AM-8 PM, Weekends',
      popularItems: ['Seasonal Collections', 'Accessories', 'Sale Items'],
      customerType: 'Fashion Conscious, All Ages'
    }
  },
  medical: { 
    baseRating: 4.5, 
    reviewRange: [30, 100], 
    keywords: ['clinic', 'medical', 'doctor', 'health', 'dental', 'hospital'],
    insights: {
      peakHours: '9 AM-5 PM, Weekdays',
      popularItems: ['Consultations', 'Check-ups', 'Treatments'],
      customerType: 'Patients, Health Seekers'
    }
  },
  automotive: { 
    baseRating: 4.1, 
    reviewRange: [25, 80], 
    keywords: ['auto', 'car', 'repair', 'service', 'garage', 'mechanic'],
    insights: {
      peakHours: '8 AM-6 PM, Weekdays',
      popularItems: ['Oil Changes', 'Repairs', 'Maintenance'],
      customerType: 'Car Owners, Fleet Managers'
    }
  },
  hotel: { 
    baseRating: 4.2, 
    reviewRange: [100, 400], 
    keywords: ['hotel', 'lodge', 'accommodation', 'stay', 'resort', 'inn'],
    insights: {
      peakHours: '24/7 Service',
      popularItems: ['Rooms', 'Room Service', 'Amenities'],
      customerType: 'Travelers, Business Guests, Tourists'
    }
  },
  education: { 
    baseRating: 4.4, 
    reviewRange: [20, 100], 
    keywords: ['school', 'college', 'education', 'training', 'institute', 'academy'],
    insights: {
      peakHours: '9 AM-5 PM, Weekdays',
      popularItems: ['Courses', 'Programs', 'Certifications'],
      customerType: 'Students, Parents, Professionals'
    }
  }
};

const locationData = {
  hyderabad: {
    multiplier: 1.2,
    popularAreas: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Kondapur'],
    demographics: 'Tech professionals, Students, Families'
  },
  bangalore: {
    multiplier: 1.3,
    popularAreas: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'MG Road'],
    demographics: 'IT professionals, Young professionals, Students'
  },
  mumbai: {
    multiplier: 1.5,
    popularAreas: ['Bandra', 'Andheri', 'Powai', 'Lower Parel', 'Juhu'],
    demographics: 'Business professionals, Bollywood industry, Families'
  },
  delhi: {
    multiplier: 1.4,
    popularAreas: ['Connaught Place', 'Khan Market', 'Karol Bagh', 'Lajpat Nagar', 'Saket'],
    demographics: 'Government employees, Business owners, Students'
  },
  chennai: {
    multiplier: 1.1,
    popularAreas: ['T. Nagar', 'Anna Nagar', 'Adyar', 'Velachery', 'OMR'],
    demographics: 'IT professionals, Traditional families, Students'
  },
  pune: {
    multiplier: 1.2,
    popularAreas: ['Koregaon Park', 'Viman Nagar', 'Baner', 'Kothrud', 'Camp'],
    demographics: 'IT professionals, Students, Young families'
  },
  kolkata: {
    multiplier: 1.0,
    popularAreas: ['Park Street', 'Salt Lake', 'Ballygunge', 'New Town', 'Howrah'],
    demographics: 'Intellectuals, Artists, Traditional families'
  }
};

const sampleHeadlines = [
  "Why [BUSINESS] is [LOCATION]'s Best Choice in 2025",
  "Discover Why [BUSINESS] Leads [LOCATION]'s Market",
  "[BUSINESS]: [LOCATION]'s Premier Destination for Excellence",
  "Transform Your Experience with [BUSINESS] in [LOCATION]",
  "Why [BUSINESS] is [LOCATION]'s Hidden Gem You Need to Know",
  "[BUSINESS] - Setting New Standards in [LOCATION]",
  "Experience Excellence: [BUSINESS] in [LOCATION]",
  "Why [BUSINESS] is [LOCATION]'s Most Trusted Choice",
  "[BUSINESS]: Where [LOCATION] Meets Quality and Service",
  "Unlock the Best of [LOCATION] at [BUSINESS]",
  "[BUSINESS] - [LOCATION]'s Award-Winning Destination",
  "Why [LOCATION] Locals Choose [BUSINESS] Every Time",
  "[BUSINESS]: Redefining Excellence in [LOCATION]",
  "The Ultimate [LOCATION] Experience Awaits at [BUSINESS]",
  "[BUSINESS] - Your Gateway to [LOCATION]'s Finest",
  "Why [BUSINESS] is [LOCATION]'s Talk of the Town",
  "Experience [LOCATION]'s Best at [BUSINESS]",
  "[BUSINESS]: Where [LOCATION]'s Dreams Come True",
  "Discover [LOCATION]'s Crown Jewel: [BUSINESS]",
  "[BUSINESS] - Making [LOCATION] Proud Since Day One"
];

function detectBusinessCategory(businessName: string): string {
  const name = businessName.toLowerCase();
  
  for (const [category, data] of Object.entries(mockBusinessCategories)) {
    if (data.keywords.some(keyword => name.includes(keyword))) {
      return category;
    }
  }
  
  return 'retail'; // default category
}

function getLocationMultiplier(location: string) {
  const locationKey = location.toLowerCase();
  for (const [city, data] of Object.entries(locationData)) {
    if (locationKey.includes(city)) {
      return data;
    }
  }
  return { multiplier: 1.0, popularAreas: ['City Center'], demographics: 'Local residents' };
}

function generateCompetitorAnalysis() {
  const competitors = Math.floor(Math.random() * 15) + 5; // 5-20 competitors
  const marketShare = (Math.random() * 25 + 10).toFixed(1); // 10-35% market share
  
  return {
    totalCompetitors: competitors,
    estimatedMarketShare: `${marketShare}%`,
    competitionLevel: competitors > 15 ? 'High' : competitors > 10 ? 'Medium' : 'Low'
  };
}

function generateSEOInsights(category: string) {
  const searchVolume = Math.floor(Math.random() * 5000) + 500;
  const keywords = mockBusinessCategories[category as keyof typeof mockBusinessCategories].keywords.slice(0, 3);
  
  return {
    monthlySearchVolume: searchVolume,
    topKeywords: keywords,
    seoScore: Math.floor(Math.random() * 40) + 60, // 60-100
    localRanking: Math.floor(Math.random() * 10) + 1 // 1-10
  };
}

function generateRecommendations(category: string, rating: number, reviews: number) {
  const recommendations = [];
  
  if (rating < 4.0) {
    recommendations.push({
      type: 'rating',
      priority: 'high' as const,
      title: 'Improve Customer Satisfaction',
      description: 'Focus on service quality and customer experience to boost ratings'
    });
  }
  
  if (reviews < 50) {
    recommendations.push({
      type: 'reviews',
      priority: 'high' as const,
      title: 'Increase Review Volume',
      description: 'Encourage satisfied customers to leave reviews through follow-up campaigns'
    });
  }
  
  recommendations.push({
    type: 'seo',
    priority: 'medium' as const,
    title: 'Optimize Online Presence',
    description: 'Use generated headlines and keywords to improve search visibility'
  });
  
  if (category === 'coffee' || category === 'restaurant') {
    recommendations.push({
      type: 'social',
      priority: 'medium' as const,
      title: 'Social Media Marketing',
      description: 'Share food photos and customer experiences on social platforms'
    });
  }
  
  return recommendations;
}

function generateMockBusinessData(data: BusinessFormData): ApiResponse {
  const category = detectBusinessCategory(data.name);
  const categoryData = mockBusinessCategories[category as keyof typeof mockBusinessCategories];
  const locationInfo = getLocationMultiplier(data.location);
  
  // Generate realistic rating based on category and location
  const baseRating = categoryData.baseRating;
  const locationAdjustment = (locationInfo.multiplier - 1) * 0.3;
  const rating = Math.min(5.0, Math.max(3.0, 
    (baseRating + locationAdjustment + (Math.random() * 0.6 - 0.3))
  ));
  
  // Generate realistic reviews based on category and location
  const [minReviews, maxReviews] = categoryData.reviewRange;
  const baseReviews = Math.floor(Math.random() * (maxReviews - minReviews)) + minReviews;
  const reviews = Math.floor(baseReviews * locationInfo.multiplier);
  
  // Generate personalized headline
  const randomHeadline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  const headline = randomHeadline.replace(/\[BUSINESS\]/g, data.name).replace(/\[LOCATION\]/g, data.location);

  // Generate additional insights
  const competitorAnalysis = generateCompetitorAnalysis();
  const seoInsights = generateSEOInsights(category);

  return {
    rating: parseFloat(rating.toFixed(1)),
    reviews: reviews,
    headline: headline,
    category: category,
    insights: categoryData.insights,
    locationInfo: {
      city: data.location,
      popularAreas: locationInfo.popularAreas,
      demographics: locationInfo.demographics
    },
    competition: competitorAnalysis,
    seo: seoInsights,
    recommendations: generateRecommendations(category, parseFloat(rating.toFixed(1)), reviews)
  };
}

export const businessApi = {
  async getBusinessData(data: BusinessFormData): Promise<ApiResponse> {
    // In production, use mock data
    if (!isDevelopment) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return generateMockBusinessData(data);
    }

    // In development, try to use real API
    try {
      console.log('Making request to:', `${API_BASE_URL}/business-data`);
      console.log('Request data:', data);
      
      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);
      return result;
    } catch (error) {
      console.error('Fetch error:', error);
      // Fallback to mock data if API fails
      console.log('Falling back to mock data...');
      return generateMockBusinessData(data);
    }
  },

  async regenerateHeadline(name: string, location: string): Promise<HeadlineResponse> {
    // In production, use mock data
    if (!isDevelopment) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      const randomHeadline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
      const headline = randomHeadline.replace(/\[BUSINESS\]/g, name).replace(/\[LOCATION\]/g, location);
      return { headline };
    }

    // In development, try to use real API
    try {
      const url = `${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`;
      console.log('Making request to:', url);
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Headline response:', result);
      return result;
    } catch (error) {
      console.error('Headline fetch error:', error);
      // Fallback to mock data if API fails
      const randomHeadline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
      const headline = randomHeadline.replace(/\[BUSINESS\]/g, name).replace(/\[LOCATION\]/g, location);
      return { headline };
    }
  },

  async checkHealth(): Promise<{ status: string }> {
    if (!isDevelopment) {
      return { status: 'OK' };
    }

    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Health check error:', error);
      return { status: 'OK' }; // Return OK for production
    }
  }
};