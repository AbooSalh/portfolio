"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/types"

interface Props {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`group relative bg-surface-elevated rounded-xl border border-border 
        hover:border-border-hover transition-all duration-300
        ${featured ? "p-8 md:p-10" : "p-6"}`}
    >
      {featured && (
        <span className="absolute -top-2.5 left-6 px-3 py-1 bg-accent text-white text-xs font-mono rounded-md">
          Featured Project
        </span>
      )}

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className={`font-bold font-heading text-text-primary group-hover:text-accent transition-colors
            ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
            {project.title}
          </h3>
          <p className="text-sm text-text-muted mt-1">
            {project.role} · {project.period}
          </p>
        </div>
      </div>

      {featured && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-6 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <span className="text-2xl font-bold font-heading text-accent-secondary">
                {m.value}
              </span>
              <span className="block text-xs text-text-muted mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <ul className={`space-y-2 mb-6 ${featured ? "text-base" : "text-sm"}`}>
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-text-muted">
            <span className="text-accent mt-1.5 shrink-0">—</span>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-surface-card text-text-muted text-xs rounded-md font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {!featured && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-1.5">
              <span className="text-sm font-bold font-heading text-accent-secondary">
                {m.value}
              </span>
              <span className="text-xs text-text-muted">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
          >
            {link.label === "GitHub" ? <Github size={14} /> : <ExternalLink size={14} />}
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  )
}
