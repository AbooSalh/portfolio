import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Principles from "@/components/Principles"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Principles />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
