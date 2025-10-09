# Portfolio Website

A modern, animated personal portfolio website built with Next.js and Strapi CMS.

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **GSAP** - Professional-grade animation platform
- **Styled Components** - CSS-in-JS styling
- **React Intersection Observer** - Scroll animations
- **React Scroll** - Smooth scrolling
- **React Lottie Player** - Lottie animations

### Backend
- **Strapi v5** - Headless CMS for content management
- **TypeScript** - Type-safe API development
- **SQLite** - Default database (can be changed to PostgreSQL/MySQL)

## Project Structure

```
portfolio/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/      # App Router pages
│   │   └── components/ # React components
│   ├── public/       # Static assets
│   └── package.json
├── backend/          # Strapi CMS
│   ├── src/
│   │   ├── api/      # API endpoints
│   │   └── admin/    # Admin panel customizations
│   ├── config/       # Configuration files
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbooSalh/portfolio.git
   cd portfolio
   ```

2. **Setup Backend (Strapi)**
   ```bash
   cd backend
   npm install
   npm run develop
   ```
   
   The Strapi admin panel will be available at http://localhost:1337/admin
   
   First time setup:
   - Create your admin account
   - Start creating content types for your portfolio (Projects, Skills, Experience, etc.)

3. **Setup Frontend (Next.js)**
   
   Open a new terminal:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   
   The Next.js app will be available at http://localhost:3000

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `npm run develop` - Start development server with auto-reload
- `npm run start` - Start production server
- `npm run build` - Build admin panel
- `npm run strapi` - Run Strapi CLI commands

## Animation Libraries Usage

### Framer Motion
Perfect for component animations, page transitions, and gesture-based interactions.

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### GSAP
Ideal for complex timelines and scroll-triggered animations.

```tsx
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const ref = useRef(null);
useEffect(() => {
  gsap.to(ref.current, { x: 100, duration: 1 });
}, []);
```

### Intersection Observer
For triggering animations when elements come into view.

```tsx
import { useInView } from 'react-intersection-observer';

const { ref, inView } = useInView({ triggerOnce: true });
```

## Styling Approaches

This project supports multiple styling methods:

1. **Tailwind CSS** - Utility classes for rapid development
2. **Styled Components** - Component-scoped CSS-in-JS
3. **CSS Modules** - Scoped CSS files (built-in with Next.js)

Choose the approach that best fits each component's needs.

## Deployment

### Frontend (Next.js)
- **Vercel** (Recommended): `vercel deploy`
- **Netlify**: Connect your repository
- **AWS/GCP/Azure**: Use Docker or standard Node.js hosting

### Backend (Strapi)
- Update database to PostgreSQL/MySQL for production
- Deploy to:
  - Railway
  - Heroku
  - DigitalOcean
  - AWS/GCP/Azure
  - Or any Node.js hosting service

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### Backend (.env)
Created automatically - configure database and other settings as needed.

## Contributing

This is a personal portfolio project, but suggestions are welcome!

## License

MIT
