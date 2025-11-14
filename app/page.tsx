import { Header } from "@/components/Header/Header";
import CallingCardSection from "@/components/landing-page/CallingCardSection";
import FeatureSection from "@/components/landing-page/FeaturesSection";
import HeroSection from "@/components/landing-page/HeroSection";
import { TestomonialsSection } from "@/components/landing-page/TestomonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TestomonialsSection />
      <CallingCardSection />
      <FeatureSection />
    </>
  );
}
