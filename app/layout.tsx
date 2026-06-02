import type { Metadata } from "next"
import { Poppins, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

const siteUrl = "https://abosaleh.site"
const siteName = "Ahmed Saleh"
const description =
  "Backend and full-stack engineer building production-ready web systems with TypeScript, Node.js, React, and .NET. Based in Sharm El Sheikh, Egypt."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Backend & Full-Stack Engineer`,
    template: `%s — ${siteName}`,
  },
  description,
  keywords: [
    "Ahmed Saleh",
    "backend engineer",
    "full-stack developer",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    ".NET",
    "software engineer",
    "Egypt",
    "Sharm El Sheikh",
  ],
  authors: [{ name: "Ahmed Saleh" }],
  creator: "Ahmed Saleh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Backend & Full-Stack Engineer`,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Saleh — Backend & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Backend & Full-Stack Engineer`,
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1121",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
