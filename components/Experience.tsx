"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { getExperience } from "@/lib/data"
import TimelineItem from "./TimelineItem"

const items = getExperience()

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
            Where I&apos;ve Worked
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
            Experience
          </h2>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div
                key={item.company + item.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <TimelineItem item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
