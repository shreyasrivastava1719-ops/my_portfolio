"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import EducationSection from "@/components/education/EducationSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import RoadmapSection from "@/components/roadmap/RoadmapSection";
import CertificationsSection from "@/components/certifications/CertificationsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen />}
      {!isMobile && <CustomCursor />}
      <main className="relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <RoadmapSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
