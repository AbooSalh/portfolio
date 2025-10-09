import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Saleh - Full Stack Developer Portfolio",
  description: "Personal portfolio showcasing my work as a Full Stack Developer. Built with Next.js, TypeScript, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
