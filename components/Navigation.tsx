'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { getNav, getPersonal } from "@/lib/data"

const navItems = getNav()
const personal = getPersonal()

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 max-w-6xl mx-auto
        ${scrolled ? "bg-surface-elevated/90 backdrop-blur-md shadow-lg" : "bg-transparent"}
        rounded-2xl border ${scrolled ? "border-border" : "border-transparent"}
        px-6`}
    >
      <div className="flex items-center justify-between h-14">
        <a
          href="#home"
          className="text-xl font-bold font-heading text-accent hover:text-accent-hover transition-colors"
        >
          {personal.initials}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-border pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
