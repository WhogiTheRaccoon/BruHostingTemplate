import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "WhogiWorld - Cloud VPS, Dedicated Servers, Web Servers & Gameservers",
  description: "Experience high-performance cloud VPS, dedicated servers, and gameservers with industry-leading processors, unmatched reliability, and affordable pricing.",
  keywords: ["dedicated servers", "Ryzen 9950X", "AMD EPYC 9654", "affordable hosting","host services","global server locations","EPYC Genoa","EPYC Milan",],
  openGraph: {
    title: "WhogiWorld Hosting",
    description: "High-performance hosting solutions for all your needs.",
    url: "https://whogiworld.com/",
    siteName: "WhogiWorld",
    images: [
      {
        url: "https://cdn.chit.sh/Logo.png",
        width: 1200,
        height: 630,
        alt: "WhogiWorld Hosting"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhogiWorld Hosting",
    description: "Reliable, high-performance hosting services around the globe.",
    images: ["https://cdn.chit.sh/Logo.png"],
  },
  authors: [{ name: "WhogiWorld" }],
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-backgroundLight">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
