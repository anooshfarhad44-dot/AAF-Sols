import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AA Graphic Studio | Creative Graphic Design & Luxury Printing",
  description: "AA Graphic Studio is your premier creative partner for world-class graphic designing, brand identity, packaging, and high-precision digital & offset printing solutions.",
  icons: {
    icon: '/aa-studio-logo.jpg',
    apple: '/aa-studio-logo.jpg',
  },
  keywords: [
    "AA Graphic Studio",
    "Graphic Design Islamabad",
    "Printing Press Pakistan",
    "Logo Design",
    "Business Card Printing",
    "Offset Printing",
    "Digital Printing",
    "Brochure Design",
    "Packaging Design",
    "Flex Printing"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafaf9] text-stone-900 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}