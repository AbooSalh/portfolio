import { ExternalLink, Github } from "lucide-react"
import { getProjects } from "@/lib/data"
import ProjectCard from "./ProjectCard"

const projects = getProjects()

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
            Projects
          </h2>
        </div>

        {featured && <ProjectCard project={featured} featured />}

        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/AbooSalh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border-hover text-text-primary rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-all"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
