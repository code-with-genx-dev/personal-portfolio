import type { Metadata } from "next";
import { Montserrat, Squada_One } from "next/font/google";
import "./globals.css";
import { DeviceProvider } from "@/components/DeviceProvider";
import SmoothScroll from "./scrollTrigger/SmoothScroll";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const squadaOne = Squada_One({
  subsets: ["latin"],
  variable: "--font-squada",
  display: "swap",
  weight: "400",
});


export const metadata: Metadata = {
  title: {
    default: "Visva V | Frontend Developer",
    template: "%s | Visva V",
  },

  description:
    "Visva V is a Frontend Developer based in Chennai with 1.5+ years of experience in Next.js and React.js, building scalable HRMS modules, ERP systems, and business web applications with RESTful API integration.",

  keywords: [
    "Visva V",
    "Frontend Developer Chennai",
    "Next.js Developer India",
    "React.js Developer Chennai",
    "HRMS Developer",
    "ERP Web Application Developer",
    "REST API Integration Developer",
    "TypeScript Developer India",
    "Visva portfolio"
  ],

  authors: [{ name: "Visva V" }],
  creator: "Visva V",

  metadataBase: new URL("https://visva-chi.vercel.app/"), // 🔥 replace with your real domain

  openGraph: {
    title: "Visva V | Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in Next.js, HRMS modules, ERP systems, and scalable UI development.",
    url: "https://visva-chi.vercel.app/",
    siteName: "Visva Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/skill.png",
        width: 1200,
        height: 630,
        alt: "Visva V Frontend Developer Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/assets/skill.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="icon" href="/assets/skill.png" type="image/icon type"></link>
      </head>
      <body className={`${montserrat.variable}  ${squadaOne.variable} antialiased `}>
        <SmoothScroll>
        <DeviceProvider>
          {children}
        </DeviceProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
