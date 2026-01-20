import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Abu Bakar Waris — Portfolio",
  description: "Crafting high-end digital experiences with surgical precision.",
  keywords: ["Abu Bakar Waris", "Portfolio", "Full Stack Developer", "Web Developer", "Next.js", "React"],
  authors: [{ name: "Abu Bakar Waris" }],
  openGraph: {
    title: "Abu Bakar Waris — Portfolio",
    description: "Crafting high-end digital experiences with surgical precision.",
    siteName: "Abu Bakar Waris — Portfolio",
    images: [
      {
        url: "/profile-new.jpg",
        width: 1200,
        height: 630,
        alt: "Abu Bakar Waris — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Bakar Waris — Portfolio",
    description: "Crafting high-end digital experiences with surgical precision.",
    images: ["/profile-new.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased font-display`}>
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abu Bakar Waris",
              url: "https://www.abubakarwaris.com", // Replace with actual domain
              jobTitle: "Full Stack Developer",
              sameAs: [
                "https://github.com/abubakarwaris", // Replace with actual links
                "https://linkedin.com/in/abubakarwaris",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
