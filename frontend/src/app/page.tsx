import AnimatedSection from '@/components/AnimatedSection';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import StyledCard from '@/components/StyledCard';
import GSAPScrollAnimation from '@/components/GSAPScrollAnimation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-white mb-4">
              Portfolio Animation Demo
            </h1>
            <p className="text-xl text-gray-300">
              Showcasing Framer Motion, GSAP, Styled Components & More
            </p>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection delay={0.2}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Framer Motion</h2>
              <p className="text-gray-300 mb-4">
                Production-ready motion library for React. Perfect for declarative animations.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Declarative API</li>
                <li>✓ Layout animations</li>
                <li>✓ Gesture support</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">GSAP</h2>
              <p className="text-gray-300 mb-4">
                Professional-grade animation for the modern web. Powerful timeline controls.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Timeline control</li>
                <li>✓ ScrollTrigger</li>
                <li>✓ Complex sequences</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Tailwind CSS</h2>
              <p className="text-gray-300 mb-4">
                Utility-first CSS framework for rapid UI development.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Utility classes</li>
                <li>✓ Responsive design</li>
                <li>✓ Dark mode support</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Styled Components</h2>
              <p className="text-gray-300 mb-4">
                CSS-in-JS for component-scoped styling with full CSS support.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>✓ Scoped styles</li>
                <li>✓ Dynamic styling</li>
                <li>✓ Theme support</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Fade In When Visible Section */}
        <FadeInWhenVisible>
          <div className="mb-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Intersection Observer</h2>
            <p className="text-gray-300">
              This section fades in when you scroll to it, powered by react-intersection-observer.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Styled Component Card */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Interactive Components</h2>
          <div className="max-w-md mx-auto">
            <StyledCard />
          </div>
        </div>

        {/* GSAP Scroll Animation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">GSAP ScrollTrigger</h2>
          <div className="max-w-md mx-auto">
            <GSAPScrollAnimation />
          </div>
        </div>

        {/* Next Steps */}
        <AnimatedSection delay={0.2}>
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start customizing these components for your portfolio. Connect to Strapi CMS 
              to manage your content dynamically.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="http://localhost:1337/admin"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                Open Strapi Admin
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
              >
                Next.js Docs
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Built with Next.js, Strapi, Framer Motion, GSAP & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
