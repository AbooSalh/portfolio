import { Github, Linkedin, Mail } from "lucide-react"
import { getPersonal } from "@/lib/data"

const personal = getPersonal()

const links = [
  { href: personal.social.github, icon: Github, label: "GitHub" },
  { href: personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${personal.social.email}`, icon: Mail, label: "Email" },
]

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-2.5 text-text-muted hover:text-accent transition-colors rounded-lg hover:bg-surface-card"
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  )
}
