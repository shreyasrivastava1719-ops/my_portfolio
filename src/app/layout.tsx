import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "Shreya Srivastava" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreyasrivastava.dev",
    title: "Shreya Srivastava — CS Engineer & AI Enthusiast",
    description:
      "Portfolio of Shreya Srivastava — Python Developer, AI Enthusiast, and aspiring Full Stack AI Engineer.",
    siteName: "Shreya Srivastava Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Srivastava — CS Engineer & AI Enthusiast",
    description:
      "Portfolio of Shreya Srivastava — Python Developer, AI Enthusiast, and aspiring Full Stack AI Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
