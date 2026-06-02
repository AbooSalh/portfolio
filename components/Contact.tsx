"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Mail, Clock } from "lucide-react"
import { getPersonal, getContact } from "@/lib/data"
import SocialLinks from "./SocialLinks"

const personal = getPersonal()
const contact = getContact()

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thanks for reaching out! I'll get back to you soon.", {
      duration: 4000,
      style: {
        background: "#1E293B",
        color: "#F8FAFC",
        border: "1px solid #334155",
      },
    })
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent tracking-wider uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary">
            Contact
          </h2>
        </div>

        <div
          ref={ref}
          className="max-w-3xl mx-auto grid md:grid-cols-5 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-base font-semibold font-heading text-text-primary mb-4">
                Let&apos;s work together
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {contact.cta}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Mail size={14} className="text-accent shrink-0" />
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-accent transition-colors"
              >
                {personal.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Clock size={14} className="text-accent shrink-0" />
              <span>{contact.responseTime}</span>
            </div>

            <SocialLinks />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg
                  text-text-primary placeholder-text-muted/50
                  focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20
                  transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg
                  text-text-primary placeholder-text-muted/50
                  focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20
                  transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg
                  text-text-primary placeholder-text-muted/50
                  focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20
                  transition-all text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium
                hover:bg-accent-hover transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
