"use client";

import { Button } from "../ui/button";
import { RainbowButton } from "../ui/rainbow-button";

function CallingCardSection() {
  return (
    <>
      <div className="h-full w-full rounded-lg mt-10 max-w-2xl mx-auto text-black shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] px-4 py-5 sm:py-36">
        <div className="w-full mx-auto py-10">
          <div className="w-full bg-black/95 border border-neutral-300 rounded-3xl relative">
            <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-4 py-6 px-4">
              <div className="flex items-center gap-0">
                {/* Left side - Avatar and You label */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      className="h-12 w-12 rounded-full border border-neutral-200 object-cover"
                      src="https://www.ui-layouts.com/naymur.png"
                      alt="Founder"
                    />
                    <div className="h-10 w-10 rounded-full absolute bottom-1 -right-4 grid place-items-center bg-purple-100 text-blue-600 border border-blue-300 text-xs px-2 py-0.5 font-medium">
                      You
                    </div>
                  </div>
                </div>

                {/* Center - Content */}
                <div className="flex-1 pl-7">
                  <h3 className="font-librecaslon text-xl font-medium text-white mb-1">
                    Get a Dental Check call?
                  </h3>
                  <p className="text-white/70 text-sm font-medium">
                    Book a free discovery call.
                  </p>
                </div>
              </div>

              {/* Right side - Action buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="outline"
                  className="border-white/30 hover:text-black cursor-pointer bg-white/70 backdrop-blur-md hover:bg-white/60 transition-all"
                >
                  Email Us
                </Button>
                <RainbowButton>Book a Call</RainbowButton>
              </div>
            </div>
          </div>
          <span className="text-black/70 sm:w-[94%] w-[85%] mx-auto flex gap-1 sm:text-sm text-xs items-center font-medium border border-neutral-200 px-4 bg-neutral-100  py-1.5 rounded-b-xl">
            We believe in people, not forms. Book a call and let’s talk
            directly.
            <picture className="shrink-0">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif"
                alt="🔥"
                className="sm:w-6 w-5 sm:h-6 h-5 shrink-0"
                width={24}
                height={24}
              />
            </picture>
          </span>
        </div>
      </div>
    </>
  );
}

export default CallingCardSection;
