import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Principles from "@/components/Principles"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import JsonLd from "@/components/JsonLd"

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Principles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
