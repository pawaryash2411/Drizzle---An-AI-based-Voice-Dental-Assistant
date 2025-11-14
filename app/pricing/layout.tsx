import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LenisProvider from "@/lib/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Drizzle AI - Voice Dental Assistant | AI-Powered Dental Care",
    template: "%s | Drizzle AI Voice Dental Assistant",
  },
  description: "Revolutionary AI-powered voice dental assistant that helps patients manage oral health, schedule appointments, and get instant dental care guidance through natural voice interactions. Transform your dental practice with cutting-edge AI technology.",
  keywords: [
    "AI dental assistant",
    "voice dental assistant",
    "dental AI",
    "oral health AI",
    "dental care technology",
    "voice-activated dental assistant",
    "AI healthcare",
    "dental practice management",
    "smart dental assistant",
    "telehealth dental",
    "dental appointment scheduling",
    "AI patient care",
  ],
  authors: [{ name: "Drizzle AI" }],
  creator: "Drizzle AI",
  publisher: "Drizzle AI",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://drizzle-ai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Drizzle AI Voice Dental Assistant",
    title: "Drizzle AI - Voice Dental Assistant | AI-Powered Dental Care",
    description: "Revolutionary AI-powered voice dental assistant that helps patients manage oral health, schedule appointments, and get instant dental care guidance through natural voice interactions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drizzle AI Voice Dental Assistant - AI-Powered Dental Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drizzle AI - Voice Dental Assistant | AI-Powered Dental Care",
    description: "Revolutionary AI-powered voice dental assistant for modern dental practices. Schedule appointments, get oral health guidance, and manage dental care through voice.",
    images: ["/twitter-image.jpg"],
    creator: "@DrizzleAI",
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
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Healthcare Technology",
};

export default function PricingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Drizzle AI Voice Dental Assistant",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150",
    },
    "description": "AI-powered voice dental assistant that helps patients manage oral health, schedule appointments, and get instant dental care guidance through natural voice interactions.",
    "featureList": [
      "Voice-activated dental assistant",
      "Appointment scheduling",
      "Oral health guidance",
      "AI-powered patient care",
      "Dental practice management",
    ],
    "screenshot": "https://drizzle-ai.com/og-image.jpg",
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Drizzle AI",
    "url": "https://drizzle-ai.com",
    "logo": "https://drizzle-ai.com/logo.png",
    "description": "Leading provider of AI-powered voice dental assistant solutions",
    "sameAs": [
      "https://twitter.com/DrizzleAI",
      "https://linkedin.com/company/drizzle-ai",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
