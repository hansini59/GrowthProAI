export interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
  category: string;
  insights: {
    peakHours: string;
    popularItems: string[];
    customerType: string;
  };
  locationInfo: {
    city: string;
    popularAreas: string[];
    demographics: string;
  };
  competition: {
    totalCompetitors: number;
    estimatedMarketShare: string;
    competitionLevel: string;
  };
  seo: {
    monthlySearchVolume: number;
    topKeywords: string[];
    seoScore: number;
    localRanking: number;
  };
  recommendations: Recommendation[];
}

export interface Recommendation {
  type: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

export interface BusinessFormData {
  name: string;
  location: string;
}

export interface ApiResponse extends BusinessData {}

export interface HeadlineResponse {
  headline: string;
}