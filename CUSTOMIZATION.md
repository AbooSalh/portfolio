# Customization Guide

This guide will help you personalize your portfolio with your own information, projects, and styling.

## Quick Start Customization

### 1. Personal Information (Hero Section)

Edit `components/Hero.tsx`:

```typescript
// Change your name
<h1>Your Name</h1>

// Update your title/tagline
<p>Your Title & Description</p>

// Update your bio
<p>Your introduction text here...</p>

// Update social links
<a href="https://github.com/your-username">
<a href="https://linkedin.com/in/your-profile">
<a href="mailto:your-email@example.com">
```

### 2. About Section

Edit `components/About.tsx`:

```typescript
// Update your about text
<p className="text-gray-400 max-w-2xl mx-auto">
  Your description...
</p>

// Update the features to match your strengths
const features = [
  {
    icon: YourIcon,
    title: 'Your Skill',
    description: 'Your description',
  },
  // ... add more
];

// Update "My Journey" section
<p>Your personal journey and story...</p>
```

### 3. Skills Section

Edit `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 90 }, // 0-100
      // ... add more skills
    ],
  },
  // ... add more categories
];
```

### 4. Projects Section

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo-url.com',
    gradient: 'from-purple-500 to-pink-500', // Choose gradient colors
  },
  // ... add more projects
];
```

Available gradient options:
- `from-purple-500 to-pink-500`
- `from-blue-500 to-cyan-500`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-red-500`
- `from-yellow-500 to-amber-500`

### 5. Contact Information

Edit `components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (XXX) XXX-XXXX',
    href: 'tel:+1XXXXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Country',
    href: '#',
  },
];
```

### 6. Footer

Edit `components/Footer.tsx`:

```typescript
// Update social links
<a href="https://github.com/your-username">
<a href="https://linkedin.com/in/your-profile">
<a href="mailto:your-email@example.com">

// Update your name
<span>by Your Name</span>
```

### 7. Navigation Branding

Edit `components/Navigation.tsx`:

```typescript
// Change your initials or logo text
<motion.a href="#home">
  YI  {/* Your Initials */}
</motion.a>
```

### 8. Page Metadata (SEO)

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description for search engines...",
};
```

## Color Customization

### Change Color Scheme

The portfolio uses a purple/pink gradient theme. To change it:

**Option 1: Use different Tailwind colors**

Find and replace in all components:
- `purple-400` → `blue-400` (or any color)
- `pink-400` → `cyan-400`
- `purple-500` → `blue-500`
- `pink-500` → `cyan-500`

**Option 2: Custom colors in `tailwind.config.ts`**

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

Then use `bg-primary`, `text-primary`, etc.

## Adding New Sections

### Create a New Component

1. Create `components/YourSection.tsx`:

```typescript
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const YourSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="your-section" className="min-h-screen py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Your Section Title</h2>
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  );
};

export default YourSection;
```

2. Import and add to `app/page.tsx`:

```typescript
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <YourSection />  {/* Add your new section */}
      {/* ... other sections */}
    </main>
  );
}
```

3. Add to navigation in `components/Navigation.tsx`:

```typescript
const navItems = [
  // ... existing items
  { name: 'Your Section', href: '#your-section' },
];
```

## Adding Images

### Profile Picture

1. Add your image to `/public/profile.jpg`
2. Use in Hero component:

```typescript
import Image from 'next/image';

<Image
  src="/profile.jpg"
  alt="Your Name"
  width={200}
  height={200}
  className="rounded-full"
/>
```

### Project Screenshots

1. Add images to `/public/projects/`
2. Use in Projects component:

```typescript
<Image
  src="/projects/project-name.jpg"
  alt="Project name"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

## Animation Customization

### Change Animation Speed

```typescript
// Slower animation
transition={{ duration: 1.5 }}

// Faster animation
transition={{ duration: 0.3 }}
```

### Change Animation Type

```typescript
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}

// Fade in from left
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}

// Scale in
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```

### Add Hover Effects

```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Your content
</motion.div>
```

## Font Customization

To use Google Fonts (when internet is available):

1. Edit `app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });
```

2. Apply to body:

```typescript
<body className={inter.className}>
```

## Adding Analytics

### Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

## Contact Form Integration

To make the contact form functional:

### Option 1: FormSpree

1. Sign up at [formspree.io](https://formspree.io)
2. Update form in `components/Contact.tsx`:

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS

1. Install EmailJS:
```bash
npm install @emailjs/browser
```

2. Implement in Contact component (see EmailJS documentation)

## Testing Your Changes

Always test after customization:

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## Best Practices

- ✅ Test responsiveness on mobile
- ✅ Keep animations smooth (not too fast or slow)
- ✅ Maintain consistent color scheme
- ✅ Use high-quality images
- ✅ Keep text concise and clear
- ✅ Update all social links
- ✅ Test contact form
- ✅ Proofread all content

---

Need help? Check the [README.md](README.md) or [DEPLOYMENT.md](DEPLOYMENT.md) for more information!
