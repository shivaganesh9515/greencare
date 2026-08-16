import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "GreenCare - Saving Nature Together",
  description: "Environmental organization dedicated to protecting the environment and nature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} font-sans bg-white min-h-screen text-gray-900 selection:bg-[#D9F99D] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
