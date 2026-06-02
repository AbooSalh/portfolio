export interface Social {
  github: string
  linkedin: string
  email: string
}

export interface Personal {
  name: string
  initials: string
  email: string
  phone: string
  location: string
  role: string
  subtitle: string
  profilePhoto: string
  resumeUrl: string
  social: Social
}

export interface NavItem {
  label: string
  href: string
}

export interface Metric {
  value: string
  label: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  featured: boolean
  role: string
  period: string
  url: string
  github: string | null
  stack: string[]
  highlights: string[]
  metrics: Metric[]
  links: ProjectLink[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  url: string | null
  bullets: string[]
}

export type SkillCategory = Record<string, string[]>

export interface Principle {
  icon: string
  title: string
  description: string
}

export interface Education {
  institution: string
  location: string
  degree: string
  period: string
  coursework: string[]
  gpa: number | null
}

export interface Certification {
  name: string
  issuer: string
  note: string
}

export interface Contact {
  responseTime: string
  cta: string
}

export interface Footer {
  quote: string
  quoteAuthor: string
}

export interface PortfolioData {
  personal: Personal
  nav: NavItem[]
  projects: Project[]
  experience: ExperienceItem[]
  skills: SkillCategory
  principles: Principle[]
  education: Education
  certifications: Certification[]
  contact: Contact
  footer: Footer
}
