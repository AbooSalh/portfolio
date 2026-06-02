import { getPersonal, getProjects, getEducation } from "@/lib/data"

const personal = getPersonal()
const projects = getProjects()
const education = getEducation()

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://abosaleh.site/#person",
        name: personal.name,
        url: "https://abosaleh.site",
        email: personal.email,
        telephone: personal.phone,
        jobTitle: personal.role,
        image: `https://abosaleh.site${personal.profilePhoto}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sharm El Sheikh",
          addressCountry: "EG",
        },
        sameAs: [personal.social.github, personal.social.linkedin],
        knowsAbout: [
          "TypeScript",
          "Node.js",
          "React",
          "Next.js",
          ".NET",
          "C#",
          "Docker",
          "PostgreSQL",
          "MongoDB",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.institution,
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://abosaleh.site/#website",
        url: "https://abosaleh.site",
        name: "Ahmed Saleh",
        description: personal.subtitle,
        publisher: {
          "@id": "https://abosaleh.site/#person",
        },
      },
      ...projects.map((project) => ({
        "@type": "SoftwareApplication",
        "@id": `https://abosaleh.site/#project-${project.id}`,
        name: project.title,
        description: project.highlights[0],
        url: project.url,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        author: {
          "@id": "https://abosaleh.site/#person",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
