import raw from "@/data/portfolio.json"
import type { PortfolioData, Project, SkillCategory } from "./types"

const data = raw as unknown as PortfolioData

export function getPersonal() {
  return data.personal
}

export function getNav() {
  return data.nav
}

export function getProjects(): Project[] {
  return data.projects
}

export function getFeaturedProject(): Project | undefined {
  return data.projects.find((p) => p.featured)
}

export function getNonFeaturedProjects(): Project[] {
  return data.projects.filter((p) => !p.featured)
}

export function getExperience() {
  return data.experience
}

export function getSkills(): SkillCategory {
  return data.skills
}

export function getSkillEntries(): [string, string[]][] {
  return Object.entries(data.skills)
}

export function getPrinciples() {
  return data.principles
}

export function getEducation() {
  return data.education
}

export function getCertifications() {
  return data.certifications
}

export function getContact() {
  return data.contact
}

export function getFooter() {
  return data.footer
}

export function getAllData(): PortfolioData {
  return data
}
