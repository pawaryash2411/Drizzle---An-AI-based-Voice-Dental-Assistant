"use client";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "./MenuToggleIcon";
import { useScroll } from "../ui/useScroll";
import { SparklesText } from "../ui/sparkleText";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(100);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
     { label: "Pricing", href: "/pricing" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto mt-6 w-full max-w-5xl transition-all duration-300 ease-out",
        "backdrop-blur-2xl border border-white/20 rounded-2xl bg-white/10 shadow-lg shadow-black/5",
        "supports-[backdrop-filter]:bg-white/10",
        {
          "max-w-6xl bg-white/20 backdrop-blur-xl shadow-lg border-white/30":
            scrolled && !open,
          "bg-white/25 backdrop-blur-xl border-white/30": open,
        }
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-8 md:h-16 transition-all duration-300 ease-out",
          { "md:px-8": scrolled }
        )}
      >
        {/* Brand */}
        <div className="flex items-center gap-2">
          <SparklesText
            text="Drizzle"
            className="cursor-pointer text-2xl font-bold tracking-tight text-white"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-gray-100 transition-all rounded-xl"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            className="border-white/30 hover:text-black cursor-pointer bg-white/70 backdrop-blur-md hover:bg-white/60 transition-all"
          >
            Sign In
          </Button>
          <RainbowButton>Get Started</RainbowButton>
        </div>

        {/* Mobile Menu Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/30 bg-white backdrop-blur-md hover:bg-white/20"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed top-16 bg-white left-0 right-0 bottom-0 z-40 flex flex-col md:hidden transition-all duration-300",
          "backdrop-blur-2xl bg-white/20 border-t border-white/20 shadow-inner",
          open
            ? "bg-white/50 opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col justify-between p-5">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    className:
                      "justify-start text-lg text-gray-900 dark:text-gray-100 hover:bg-white/60 rounded-xl transition-all",
                  })
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full border-white/30 bg-white/70 hover:bg-white/20 backdrop-blur-md transition-all"
            >
              Sign In
            </Button>
            <RainbowButton>Get Started</RainbowButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 84 24" fill="currentColor" {...props}>
    <path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16..." />
  </svg>
);
