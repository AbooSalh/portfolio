import { ArrowDown } from "lucide-react"
import { getPersonal } from "@/lib/data"
import SocialLinks from "./SocialLinks"

const personal = getPersonal()

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-mono text-accent mb-6 tracking-wider uppercase">
            {personal.location}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold font-heading text-text-primary leading-tight mb-6">
            {personal.name}
          </h1>

          <p className="text-lg md:text-xl text-text-muted font-body leading-relaxed mb-3 max-w-2xl mx-auto">
            {personal.role}
          </p>

          <p className="text-base text-text-muted/70 font-body leading-relaxed mb-10 max-w-xl mx-auto">
            {personal.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent-hover transition-colors"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border-hover text-text-primary rounded-lg font-medium text-sm hover:border-accent hover:text-accent transition-all"
            >
              Resume
            </a>
          </div>

          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
