# Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: Deploy via GitHub

1. Push your code to GitHub (already done!)
2. Go to [Vercel](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your `portfolio` repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

Your site will be live in under a minute!

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Deploy to GitHub Pages

GitHub Pages requires some additional configuration for Next.js:

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "next build && next export && gh-pages -d out"
  }
}
```

3. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

4. Deploy:
```bash
npm run deploy
```

## Custom Domain Setup

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS configuration instructions

## Environment Variables

If you add features that require API keys or secrets:

1. Create `.env.local` file (never commit this!)
2. Add your environment variables:
```
NEXT_PUBLIC_API_KEY=your_key_here
EMAIL_SERVICE_KEY=your_key_here
```

3. In Vercel/Netlify, add these in the dashboard:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment

## Performance Tips

- Optimize images before adding them
- Use Next.js Image component for automatic optimization
- Enable analytics (Vercel Analytics, Google Analytics)
- Monitor Core Web Vitals

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify social media links
- [ ] Check loading speed
- [ ] Test animations and transitions
- [ ] Verify SEO metadata

## Updating Your Site

Simply push changes to your GitHub repository:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel and Netlify will automatically rebuild and deploy!

## Troubleshooting

### Build fails
- Check build logs for errors
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Images not loading
- Verify image paths are correct
- Use Next.js Image component
- Check image optimization settings

### Animations not working
- Ensure Framer Motion is installed
- Check browser compatibility
- Verify JavaScript is enabled

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Netlify Documentation](https://docs.netlify.com)

---

Happy Deploying! 🚀
