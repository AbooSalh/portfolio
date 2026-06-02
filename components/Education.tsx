"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { BookOpen, Award } from "lucide-react"
import { getEducation, getCertifications } from "@/lib/data"

const education = getEducation()
const certifications = getCertifications()

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-24 bg-surface-elevated/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
            Education
          </h2>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-surface-elevated rounded-xl border border-border p-6 mb-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-surface-card rounded-lg shrink-0">
                <BookOpen size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading text-text-primary">
                  {education.degree}
                </h3>
                <p className="text-sm text-text-muted mt-0.5">
                  {education.institution} · {education.location}
                </p>
                <p className="text-xs font-mono text-accent mt-1.5 mb-4">
                  {education.period}
                </p>

                <p className="text-xs text-text-muted uppercase tracking-wider mb-2 font-semibold">
                  Relevant Coursework
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-1">
                  {education.coursework.map((course) => (
                    <li
                      key={course}
                      className="text-sm text-text-muted flex items-center gap-1.5"
                    >
                      <span className="text-accent">—</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {certifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface-elevated rounded-xl border border-border p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-surface-card rounded-lg shrink-0">
                  <Award size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold font-heading text-text-primary mb-3">
                    Certification
                  </h3>
                  {certifications.map((cert) => (
                    <div key={cert.name} className="mb-2 last:mb-0">
                      <p className="text-sm text-text-primary">{cert.name}</p>
                      <p className="text-xs text-text-muted">
                        {cert.issuer}
                        {cert.note && <span> · {cert.note}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
