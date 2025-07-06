import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample business data
const businessData = {
  rating: 4.3,
  reviews: 127,
  headline: "Why Your Business is Your Location's Best Choice in 2025"
};

// Sample headlines for regeneration
const sampleHeadlines = [
  "Why [BUSINESS] is [LOCATION]'s Best Choice in 2025",
  "Discover Why [BUSINESS] Leads [LOCATION]'s Market",
  "[BUSINESS]: [LOCATION]'s Premier Destination for Excellence",
  "Transform Your Experience with [BUSINESS] in [LOCATION]",
  "Why [BUSINESS] is [LOCATION]'s Hidden Gem You Need to Know",
  "[BUSINESS] - Setting New Standards in [LOCATION]",
  "Experience Excellence: [BUSINESS] in [LOCATION]",
  "Why [BUSINESS] is [LOCATION]'s Most Trusted Choice"
];

// POST /business-data endpoint
app.post('/business-data', (req, res) => {
  console.log('POST /business-data called with:', req.body);
  
  const { name, location } = req.body;
  
  if (!name || !location) {
    return res.status(400).json({ 
      error: 'Both name and location are required' 
    });
  }

  // Generate random rating between 3.5 and 5.0
  const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
  
  // Generate random reviews between 50 and 300
  const reviews = Math.floor(Math.random() * 250) + 50;
  
  // Generate personalized headline
  const randomHeadline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  const headline = randomHeadline.replace('[BUSINESS]', name).replace('[LOCATION]', location);

  const response = {
    rating: parseFloat(rating),
    reviews: reviews,
    headline: headline
  };

  console.log('Sending response:', response);
  res.json(response);
});

// GET /regenerate-headline endpoint
app.get('/regenerate-headline', (req, res) => {
  console.log('GET /regenerate-headline called with:', req.query);
  
  const { name, location } = req.query;
  
  if (!name || !location) {
    return res.status(400).json({ 
      error: 'Both name and location parameters are required' 
    });
  }

  // Generate a new random headline
  const randomHeadline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  const headline = randomHeadline.replace('[BUSINESS]', name).replace('[LOCATION]', location);

  const response = { headline };
  console.log('Sending headline response:', response);
  res.json(response);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'GrowthProAI Business Dashboard API',
    version: '1.0.0',
    endpoints: {
      'POST /business-data': 'Get business insights',
      'GET /regenerate-headline': 'Generate new SEO headline',
      'GET /health': 'Health check'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 GrowthProAI Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
});