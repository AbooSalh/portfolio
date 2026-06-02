import { Github, Linkedin, Mail } from "lucide-react"
import { getPersonal } from "@/lib/data"

const personal = getPersonal()

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              { href: personal.social.github, icon: Github, label: "GitHub" },
              { href: personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${personal.social.email}`, icon: Mail, label: "Email" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-text-muted hover:text-accent transition-colors"
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
