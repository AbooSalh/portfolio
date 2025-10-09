import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingIcons from '@/components/FloatingIcons';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingIcons />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
