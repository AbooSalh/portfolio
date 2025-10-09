# Portfolio Setup Guide

This guide will help you set up and customize your portfolio website.

## Initial Setup

### 1. Install Dependencies

Both frontend and backend have their dependencies already installed. If you need to reinstall:

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### 2. Start Development Servers

**Terminal 1 - Start Strapi Backend:**
```bash
cd backend
npm run develop
```

The Strapi admin panel will open at: http://localhost:1337/admin

**Terminal 2 - Start Next.js Frontend:**
```bash
cd frontend
npm run dev
```

The website will be available at: http://localhost:3000

## Setting Up Strapi CMS

### First Time Setup

1. Navigate to http://localhost:1337/admin
2. Create your admin account
3. You'll be directed to the Strapi admin dashboard

### Creating Content Types

Create these collection types in Strapi for your portfolio:

#### 1. Projects
- **Display name:** Projects
- **Fields:**
  - `title` (Text) - Required
  - `slug` (UID, attached to title) - Required
  - `description` (Rich Text)
  - `shortDescription` (Text)
  - `technologies` (JSON or Relation)
  - `images` (Media - Multiple)
  - `thumbnail` (Media - Single)
  - `projectUrl` (Text)
  - `githubUrl` (Text)
  - `featured` (Boolean)
  - `publishedAt` (DateTime)

#### 2. Skills
- **Display name:** Skills
- **Fields:**
  - `name` (Text) - Required
  - `category` (Enumeration: Frontend, Backend, Tools, Other)
  - `level` (Number - 1-100)
  - `icon` (Media - Single)

#### 3. Experience
- **Display name:** Experience
- **Fields:**
  - `company` (Text) - Required
  - `position` (Text) - Required
  - `description` (Rich Text)
  - `startDate` (Date)
  - `endDate` (Date)
  - `current` (Boolean)
  - `logo` (Media - Single)

#### 4. About (Single Type)
- **Display name:** About
- **Fields:**
  - `bio` (Rich Text)
  - `profileImage` (Media - Single)
  - `resume` (Media - Single)
  - `socialLinks` (JSON)

### Configure API Permissions

1. Go to Settings → Users & Permissions Plugin → Roles → Public
2. Enable read permissions for your content types:
   - Projects: find, findOne
   - Skills: find, findOne
   - Experience: find, findOne
   - About: find

### Generate API Token (Optional)

For authenticated requests:
1. Settings → API Tokens
2. Create new API Token
3. Copy the token
4. Add to `frontend/.env.local`: `NEXT_PUBLIC_STRAPI_API_TOKEN=your_token_here`

## Customizing the Frontend

### Animation Libraries

#### Framer Motion
Located in: `frontend/src/components/AnimatedSection.tsx`

Example usage:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

#### GSAP
Located in: `frontend/src/components/GSAPScrollAnimation.tsx`

Example usage:
```tsx
import gsap from 'gsap';

useEffect(() => {
  gsap.to(element, { x: 100, duration: 1 });
}, []);
```

### Styling Options

1. **Tailwind CSS** - Use utility classes
2. **Styled Components** - See `frontend/src/components/StyledCard.tsx`
3. **CSS Modules** - Create `Component.module.css` files

### Adding New Pages

Create new pages in `frontend/src/app/`:
```bash
frontend/src/app/
├── page.tsx           # Home page
├── projects/
│   └── page.tsx       # Projects listing
│   └── [slug]/
│       └── page.tsx   # Individual project
├── about/
│   └── page.tsx       # About page
└── contact/
    └── page.tsx       # Contact page
```

## Deployment

### Frontend (Next.js)

**Option 1: Vercel (Recommended)**
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy

**Option 2: Netlify**
1. Connect repository
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/.next`
4. Set environment variables

### Backend (Strapi)

**Important:** Change database to PostgreSQL/MySQL for production

1. Update `backend/config/database.ts`
2. Deploy to:
   - Railway
   - Heroku
   - DigitalOcean
   - AWS/GCP/Azure

**Environment Variables for Production:**
- `DATABASE_URL`
- `JWT_SECRET`
- `ADMIN_JWT_SECRET`
- `API_TOKEN_SALT`
- `APP_KEYS`

## Next Steps

1. ✅ Setup complete
2. 📝 Create content in Strapi
3. 🎨 Customize components and styling
4. 🔗 Connect frontend to Strapi API
5. 📱 Add responsive design tweaks
6. 🚀 Deploy to production

## Useful Commands

### Frontend
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run linter
```

### Backend
```bash
npm run develop      # Development with auto-reload
npm run start        # Production server
npm run build        # Build admin panel
npm run strapi       # Strapi CLI
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Styled Components](https://styled-components.com/docs)

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Next.js)
npx kill-port 3000

# Kill process on port 1337 (Strapi)
npx kill-port 1337
```

### Clear Strapi Cache
```bash
cd backend
npm run strapi build --clean
```

### Reset Next.js Cache
```bash
cd frontend
rm -rf .next
npm run dev
```
