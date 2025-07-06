📊 GrowthProAI — Local Business SEO Dashboard
A responsive, interactive Full Stack web dashboard simulating how local businesses might view their Google Business and SEO insights. Built with modern web technologies and featuring a clean, production-ready interface.

🚀 Live Demo
👉 View Live Application (https://legendary-longma-3c40c2.netlify.app/)

✨ Features
Core Functionality
Frontend (React + Tailwind CSS)

Input form to enter Business Name and Location

Display card showing:

Simulated Google Rating

Number of Customer Reviews

Latest AI-generated SEO Headline

Regenerate Headline button to fetch a new AI headline

Backend (Node.js + Express)

POST /business-data API to simulate business data response

GET /regenerate-headline API to simulate random AI headlines

🛠️ Technology Stack
Layer	Technology
Frontend	React 18 + TypeScript
Styling	Tailwind CSS
Backend	Node.js + Express
API Requests	Axios
CORS Handling	cors (Node.js package)
Deployment	Vercel (Frontend) / Render (Backend) (Optional)

🏗️ Project Structure
Frontend (src/)

graphql
Copy
Edit
src/
├── components/
│   ├── BusinessForm.tsx          # Input form for business details
│   ├── BusinessCard.tsx          # Card to display business data
│   └── Loader.tsx                # Loading spinner component
├── App.tsx                       # Root application component
├── main.tsx                      # Application entry point
└── index.css                     # Tailwind CSS and global styles
Backend (/backend)

bash
Copy
Edit
backend/
├── app.js                        # Express server setup
├── routes/
│   ├── businessData.js           # POST /business-data endpoint
│   └── headline.js               # GET /regenerate-headline endpoint
├── data/
│   └── headlines.js              # Static array of sample headlines
└── package.json                  # Node project dependencies
🚀 Getting Started
📦 Prerequisites
Node.js 16+

npm or yarn

📥 Installation
Clone the repository

bash
Copy
Edit
git clone <repository-url>
cd growthproai-dashboard
Install dependencies

Frontend

bash
Copy
Edit
cd frontend
npm install
npm run dev
Backend

bash
Copy
Edit
cd backend
npm install
node app.js
📖 Usage Guide
📋 Creating a Business Profile
Enter Business Name and Location

Click Submit

View simulated data in the business card:

Google Rating

Number of Reviews

AI-generated Headline

Click Regenerate SEO Headline to fetch a new tagline

🔑 API Reference
Endpoint	Method	Request Body / Params	Response
/business-data	POST	{ "name": "Cake & Co", "location": "Mumbai" }	{ "rating": 4.3, "reviews": 127, "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025" }
/regenerate-headline	GET	Query: ?name=Cake & Co&location=Mumbai	{ "headline": "New SEO headline here" }

🎨 Customization
Headlines:
Modify backend/data/headlines.js to add or update headline options.

Tailwind Theme:
Customize colors in tailwind.config.js

Card & Form Styling:
Adjust component-specific Tailwind utility classes in BusinessForm.tsx and BusinessCard.tsx

🧪 Development
Available Scripts
Frontend

bash
Copy
Edit
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
Backend

bash
Copy
Edit
node app.js        # Run Express server
🐛 Troubleshooting
CORS Errors

Ensure cors middleware is used in app.js

API Requests Failing

Verify backend server is running (default port 3000)

Check endpoint URLs in frontend match backend port and routes

Tailwind Not Working

Verify Tailwind is properly configured in postcss.config.js and tailwind.config.js

📦 Bonus Features (Optional)
Loading Spinner: Show loader while waiting for API responses

Form Validation: Prevent empty submissions

Deploy Frontend on Vercel, Backend on Render or Glitch

Use Zustand or React Context for global state (if scaling up)

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to your branch

Open a Pull Request

