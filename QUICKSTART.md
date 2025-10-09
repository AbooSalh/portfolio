# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites
- Node.js 18+ and npm installed
- Git installed

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/AbooSalh/portfolio.git
cd portfolio
```

### 2. Install Dependencies

**Backend (Strapi):**
```bash
cd backend
npm install
```

**Frontend (Next.js):**
```bash
cd ../frontend
npm install
```

### 3. Start Development Servers

**Terminal 1 - Start Strapi Backend:**
```bash
cd backend
npm run develop
```
✅ Strapi admin panel: http://localhost:1337/admin

**Terminal 2 - Start Next.js Frontend:**
```bash
cd frontend
npm run dev
```
✅ Website: http://localhost:3000

### 4. First-Time Strapi Setup

1. Visit http://localhost:1337/admin
2. Create your admin account
3. You're ready to create content!

## What's Included

### Frontend (Next.js)
- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- ✨ Framer Motion for animations
- 🎬 GSAP for advanced animations
- 💅 Styled Components for CSS-in-JS
- 📱 Fully responsive design
- 🎯 TypeScript support

### Backend (Strapi)
- 🚀 Strapi v5 CMS
- 📊 SQLite database (easily upgradeable)
- 🔐 Built-in authentication
- 📝 Rich content management
- 🌐 RESTful API
- 🔑 API token support

### Example Components Included
1. **AnimatedSection** - Framer Motion fade-in animations
2. **FadeInWhenVisible** - Scroll-triggered animations with Intersection Observer
3. **GSAPScrollAnimation** - GSAP ScrollTrigger demo
4. **StyledCard** - Styled Components with Framer Motion

## Next Steps

### Create Content Types in Strapi
See `backend/CONTENT_TYPES.md` for detailed schemas:
- Projects (showcase your work)
- Skills (your tech stack)
- Experience (work history)
- About (personal info)

### Customize the Frontend
1. Edit `frontend/src/app/page.tsx` for the home page
2. Create new pages in `frontend/src/app/`
3. Add components in `frontend/src/components/`
4. Modify styles in `frontend/src/app/globals.css`

### Connect Frontend to Strapi
Use the included API utility:
```typescript
import { getProjects, getSkills } from '@/lib/strapi';

const projects = await getProjects();
```

## Detailed Guides

- 📖 **Complete Setup**: See `SETUP_GUIDE.md`
- 🎨 **Content Types**: See `backend/CONTENT_TYPES.md`
- 📚 **Main README**: See `README.md`

## Common Commands

### Frontend
```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
```

### Backend
```bash
npm run develop # Development with auto-reload
npm run start   # Production server
npm run build   # Build admin panel
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 1337
npx kill-port 1337
```

### Clear Cache
```bash
# Next.js
cd frontend && rm -rf .next && npm run dev

# Strapi
cd backend && npm run strapi build --clean
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Strapi Docs](https://docs.strapi.io)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

🎉 **You're all set!** Start building your amazing portfolio website.
