"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { FileJson, IterationCw, Shield, FileText } from "lucide-react"
import { getPrinciples, getFooter } from "@/lib/data"

const principles = getPrinciples()
const footer = getFooter()

const icons: Record<string, React.ElementType> = {
  FileJson,
  IterationCw,
  Shield,
  FileText,
}

export default function Principles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="principles" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
            How I Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
            Engineering Principles
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
        >
          {principles.map((principle, i) => {
            const Icon = icons[principle.icon]
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-surface-elevated rounded-xl border border-border p-6 hover:border-border-hover transition-colors"
              >
                <div className="flex items-start gap-4">
                  {Icon && (
                    <div className="p-2 bg-surface-card rounded-lg">
                      <Icon size={20} className="text-accent" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold font-heading text-text-primary mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center max-w-xl mx-auto">
          <p className="text-sm text-text-muted italic leading-relaxed">
            &ldquo;{footer.quote}&rdquo;
          </p>
          <p className="text-xs text-text-muted/60 mt-2 font-mono">
            — {footer.quoteAuthor}
          </p>
        </div>
      </div>
    </section>
  )
}
