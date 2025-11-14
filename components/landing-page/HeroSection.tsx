import { RainbowButton } from "@/components/ui/rainbow-button";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden font-sans mt-10 mb-36">
      <WebGLShader />
      <div className="relative p-2 w-full mx-auto max-w-3xl">
        <main className="relative py-10 overflow-hidden">
          <h1 className="mb-3 text-white text-center text-5xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,5rem)]">
            Drizzle
          </h1>
          <h1 className="mb-3 text-white text-center text-5xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,3rem)]">
            AI Voice Dental Assistant
          </h1>
          <p className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg">
            Revolutionize your dental practice with AI-powered voice technology.
            Schedule appointments, provide patient guidance, and manage oral
            health care through natural voice interactions.
          </p>
          <div className="my-8 flex items-center justify-center gap-1">
            <RainbowButton>Get Started</RainbowButton>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
