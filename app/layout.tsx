import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/FloatingNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] }); // Keeping Inter for global use

export const metadata: Metadata = {
  title: "irhamna.ai - The Future of AI",
  description: "Experience the next generation of AI with irhamna.ai",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} bg-cyber-black text-white`}
      >
        <div className="m-4">
          <FloatingNav />
        </div>

        {children}
      </body>
    </html>
  );
}
