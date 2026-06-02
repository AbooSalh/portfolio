import type { Metadata } from "next"
import { Poppins, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ahmed Saleh — Backend & Full-Stack Engineer",
  description:
    "Backend and full-stack engineer building production-ready web systems with TypeScript, Node.js, React, and .NET.",
  openGraph: {
    title: "Ahmed Saleh — Backend & Full-Stack Engineer",
    description:
      "Backend and full-stack engineer building production-ready web systems with TypeScript, Node.js, React, and .NET.",
    url: "https://abosaleh.site",
    siteName: "Ahmed Saleh",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
