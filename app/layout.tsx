import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmoudabdelnasser.me"),

  title: {
    default: "Mahmoud Abdelnasser | Full Stack Developer",
    template: "%s | Mahmoud Abdelnasser",
  },

  description:
    "Mahmoud Abdelnasser is a Full Stack Developer specializing in Next.js, React, TypeScript, Node.js, Express.js, and PostgreSQL. Building scalable, performant, and modern web applications.",

  keywords: [
    "Mahmoud Abdelnasser",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js",
    "PostgreSQL",
    "TailwindCSS",
    "Web Developer Egypt",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Portfolio",
  ],

  authors: [{ name: "Mahmoud Abdelnasser" }],

  creator: "Mahmoud Abdelnasser",
  publisher: "Mahmoud Abdelnasser",

  alternates: {
    canonical: "https://mahmoudabdelnasser.me",
  },

  openGraph: {
    title: "Mahmoud Abdelnasser | Full Stack Developer",
    description:
      "Full Stack Developer focused on building scalable and modern web applications with Next.js, React, TypeScript, Node.js, and PostgreSQL.",

    url: "https://mahmoudabdelnasser.me",

    siteName: "Mahmoud Abdelnasser Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahmoud Abdelnasser Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mahmoud Abdelnasser | Full Stack Developer",

    description:
      "Building scalable and performant web applications using Next.js, React, TypeScript, Node.js, and PostgreSQL.",

    images: ["/og-image.png"],
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

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="gold" className={cn("h-full", cinzel.variable, inter.variable)}>
      <body className="font-sans bg-stone text-primary min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Mahmoud Abdelnasser",

              url: "https://mahmoudabdelnasser.me",

              image: "https://mahmoudabdelnasser.me/og-image.png",

              sameAs: [
                "https://github.com/0x-70da",
                "https://www.linkedin.com/in/mahmoud-abdelnasser-a7b246332/",
              ],

              jobTitle: "Full Stack Developer",

              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Luxor University",
              },

              address: {
                "@type": "PostalAddress",
                addressCountry: "Egypt",
              },

              knowsAbout: [
                "Next.js",
                "React.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "TailwindCSS",
                "TanStack Query",
                "Zustand",
                "Prisma ORM",
                "Drizzle ORM",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
