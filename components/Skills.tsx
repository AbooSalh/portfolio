"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { getSkillEntries } from "@/lib/data"

const categories = getSkillEntries()

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-surface-elevated/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
            Skills
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface-elevated rounded-xl border border-border p-6"
            >
              <h3 className="text-sm font-semibold font-heading text-accent mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface-card text-text-muted text-sm rounded-md font-mono hover:bg-surface-card/80 hover:text-text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
