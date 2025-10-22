QuickAI – Full Stack AI SaaS App (PERN Stack)
A full‑featured AI SaaS application built using PostgreSQL, Express, React, and Node.js (PERN stack).
This app offers a suite of AI‑powered tools for text generation, image creation, and document analysis — integrated with secure authentication, subscription billing, and a cloud database.

Features
Authentication & Billing
User authentication with Clerk (email and Google Sign‑in)

Profile & account management

Subscription‑based premium access using Clerk Billing

Core AI Tools
Article Generator – Create AI‑generated articles based on topic & length

Blog Title Generator – Generate blog titles from keywords and categories

Image Generator – Create AI images from text prompts (premium users)

Background Remover – Remove image backgrounds

Object Remover – Remove selected objects from images

Resume Analyzer – Upload a resume to receive detailed AI‑based review

Additional Features
Creation history dashboard

Community page with public shared images & like functionality

Responsive design built with Vite + React + TailwindCSS

Assets stored in a serverless PostgreSQL database (Neon)

Tech Stack
Layer	Technology Used
Frontend	React.js (Vite) + Tailwind CSS
Backend	Node.js + Express.js
Database	Neon Serverless PostgreSQL
Authentication & Billing	Clerk
Deployment	Vercel
Icons	Lucid React Icons
Fonts	Google Fonts (Outfit)
Installation & Setup
1. Clone the Repository
bash
git clone https://github.com/yourusername/quickai.git
cd quickai
2. Client Setup
bash
cd client
npm install
3. Environment Variables
Create a .env file in the client/ directory and add your Clerk publishable key:

text
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
4. Run the Application
bash
npm run dev
Frontend runs at:
http://localhost:5173

Folder Structure
text
quickai/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── server/
    ├── index.js
    ├── routes/
    ├── controllers/
    ├── models/
    └── package.json
Key Packages
Frontend
react

react-router-dom

tailwindcss

lucid-react

@clerk/clerk-react

Backend
express

pg (PostgreSQL)

dotenv

cors

axios

Deployment
Deployed for free using Vercel

Database hosted on Neon.tech

Authentication and billing handled by Clerk

Screenshots
Landing page with hero section

AI Tools Dashboard

Premium Subscription Checkout

Image Generator

Resume Analyzer

Community Feed

(Screenshots available in project assets or demo video)

Credits
Tutorial by GreatStack Dev

YouTube: @GreatStackDev

Website: https://greatstack.dev/p/quickai

Assets sourced from:

Pexels

Unsplash

Freepik

License
This project is intended for learning purposes.
