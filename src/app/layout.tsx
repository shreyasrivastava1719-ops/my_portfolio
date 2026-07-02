import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyasrivastava.dev"),
  title: "Shreya Srivastava — CS Engineer & AI Enthusiast",
  description:
    "Portfolio of Shreya Srivastava — 2nd Year B.Tech CSE student at SRMCEM, Python Developer, AI Enthusiast, and aspiring Full Stack AI Engineer. Building intelligent solutions with creativity and code.",
  keywords: [
    "Shreya Srivastava",
    "Portfolio",
    "Computer Science",
    "AI Engineer",
    "Python Developer",
    "Machine Learning",
    "SRMCEM",
    "Full Stack",
    "Lucknow",
    "Lucknow AI Developer"
  ],
  authors: [{ name: "Shreya Srivastava" }],
  alternates: {
    canonical: "https://shreyasrivastava.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreyasrivastava.dev",
    title: "Shreya Srivastava — CS Engineer & AI Enthusiast",
    description:
      "Portfolio of Shreya Srivastava — Python Developer, AI Enthusiast, and aspiring Full Stack AI Engineer.",
    siteName: "Shreya Srivastava Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Shreya Srivastava - Profile",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Srivastava — CS Engineer & AI Enthusiast",
    description:
      "Portfolio of Shreya Srivastava — Python Developer, AI Enthusiast, and aspiring Full Stack AI Engineer.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://shreyasrivastava.dev/#person",
        "name": "Shreya Srivastava",
        "url": "https://shreyasrivastava.dev",
        "image": "https://shreyasrivastava.dev/profile.jpg",
        "jobTitle": "Computer Science Engineering Student & AI Developer",
        "worksFor": {
          "@type": "EducationalOrganization",
          "name": "Shri Ramswaroop College of Engineering & Management (SRMCEM)"
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "SRMCEM"
        },
        "sameAs": [
          "https://github.com/shreya-srivastava",
          "https://linkedin.com/in/shreya-srivastava-2aa255381"
        ],
        "email": "shreyabe25cs220.srmcem@gmail.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://shreyasrivastava.dev/#website",
        "url": "https://shreyasrivastava.dev",
        "name": "Shreya Srivastava Portfolio",
        "publisher": {
          "@id": "https://shreyasrivastava.dev/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://shreyasrivastava.dev/#webpage",
        "url": "https://shreyasrivastava.dev",
        "name": "Shreya Srivastava — CS Engineer & AI Enthusiast",
        "isPartOf": {
          "@id": "https://shreyasrivastava.dev/#website"
        },
        "about": {
          "@id": "https://shreyasrivastava.dev/#person"
        },
        "description": "Portfolio of Shreya Srivastava — 2nd Year B.Tech CSE student at SRMCEM, Python Developer, AI Enthusiast, and aspiring Full Stack AI Engineer. Building intelligent solutions with creativity and code."
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Clash Display via Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* General Sans via Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#FAFAF8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
