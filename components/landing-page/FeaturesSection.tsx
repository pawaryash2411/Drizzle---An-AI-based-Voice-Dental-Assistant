// @ts-nocheck
"use client";

import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function FeatureSection() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main ref={container} className="relative h-[200vh] ">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <footer className="group bg-[#06060e] ">
          <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-linear-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent transition-all ease-linear">
            Drizzle
          </h1>
          <footer className="bg-black text-white h-40 relative z-10 grid place-content-center  text-2xl rounded-tr-full rounded-tl-full">
            <div class="w-full mx-auto gap-26 p-4 md:flex md:items-center md:justify-between">
              <span class="text-sm text-body sm:text-center tracking-wider">
                © 2025{" "}
                <Link href="/" class="hover:underline">
                  Drizzle™
                </Link>
                | All Rights Reserved.
              </span>
              <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                <li>
                  <Link href="/about-us" class="hover:underline me-4 md:me-6">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" class="hover:underline me-4 md:me-6">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" class="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </footer>
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky font-semibold top-0 h-screen flex flex-col items-center justify-center
       text-white"
    >
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 "></div> */}

      <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
        AI-Powered Voice Dental Assistant <br /> Transforming Dental Care 👇
      </h1>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative h-screen bg-linear-to-t to-[#1a1919] from-[#06060e] text-white "
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <article className="container mx-auto relative z-10 ">
        <h1 className="text-6xl leading-[100%] py-10 font-semibold  tracking-tight ">
          Revolutionizing Dental Care with AI <br /> See How Drizzle AI Works
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1717893777838-4e222311630b?w=1200&auto=format&fit=crop"
            alt="AI voice dental assistant helping patient with oral health consultation using advanced technology"
            className=" object-cover w-full rounded-md h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1717618389115-88db6d7d8f77?w=500&auto=format&fit=crop"
            alt="Modern dental practice with AI-powered voice assistant technology for patient care management"
            className=" object-cover w-full rounded-md"
          />
          <img
            src="https://images.unsplash.com/photo-1717588604557-55b2888f59a6?w=500&auto=format&fit=crop"
            alt="Dental professional using Drizzle AI voice assistant for appointment scheduling and patient communication"
            className=" object-cover w-full rounded-md h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1713417338603-1b6b72fcade2?w=500&auto=format&fit=crop"
            alt="AI technology in dental healthcare - voice-activated dental assistant providing smart oral health solutions"
            className=" object-cover w-full rounded-md h-full"
          />
        </div>
      </article>
    </motion.section>
  );
};
