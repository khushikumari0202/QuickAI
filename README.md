 ## 🌠 QuickAI – Full Stack AI SaaS App 

A full‑featured AI SaaS application built using PostgreSQL, Express, React, and Node.js (PERN Stack).
This app offers a suite of AI‑powered tools for text generation, image creation, and document analysis — integrated with secure authentication, subscription billing, and a cloud database.

Live link: 
[https://quick-ai-one-chi.vercel.app]

## 🚀 Features
- Authentication & Billing
- User authentication with Clerk (email and Google Sign‑in)
- Profile & account management
- Subscription‑based premium access using Clerk Billing

## Core AI Tools
1. **Article Generator** – Create AI‑generated articles based on topic & length
2. **Blog Title Generator** – Generate blog titles from keywords and categories
3. **Image Generator** – Create AI images from text prompts (premium users)
4. **Background Remover** – Remove image backgrounds
5. **Object Remover** – Remove selected objects from images
6. **Resume Analyzer** – Upload a resume to receive detailed AI‑based review

 ## Additional Features
- Creation history dashboard
- Community page with public shared images & like functionality
- Responsive design built with Vite + React + TailwindCSS
- Assets stored in a serverless PostgreSQL database (Neon)

## 🛠️ Tech Stack
- **Frontend:-**	React.js (Vite) + Tailwind CSS
- **Backend:-**	Node.js + Express.js
- **Database:-**	Neon Serverless PostgreSQL
- **Authentication & Billing:-**	Clerk
- **Deployment:-**	Vercel
- **Icons:-**	Lucid React Icons
- **Fonts:-**	Google Fonts (Outfit)

## 🚀 Installation & Setup
1. Clone the Repository
```
git clone https://github.com/khushikumari0202/QuickAI
cd quickai
```
2. Client Setup
```
cd client
npm install
```
3. Environment Variables
Create a .env file in the client/ directory and add your Clerk publishable key:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

4. Run the Application
```
npm run dev
```
Frontend runs at:
```
http://localhost:5173
```

## Folder Structure
---
```
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
```
## ⚡Key Packages

**Frontend**
- react
- react-router-dom
- tailwindcss
- lucid-react
- @clerk/clerk-react


**Backend**
- express
- pg (PostgreSQL)
- dotenv
- cors
- axios

**Deployment**
- Deployed for free using Vercel
- Database hosted on Neon.tech
- Authentication and billing handled by Clerk

## 🙋‍♀️ Author & Acknowledgements

* **Khushi Kumari**

  * LinkedIn: [Khushi Kumari](https://www.linkedin.com/in/khushi-kumari-582a02241/)
  * GitHub: [@khushikumari0202](https://github.com/khushikumari0202)

If you like this project, please **⭐ Star** this repository, contribute via pull requests, or share it!
