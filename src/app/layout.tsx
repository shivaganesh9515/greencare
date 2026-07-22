import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GreenCare — Saving Nature Together",
  description:
    "We work with partners & communities to ensure nature thrives and climate change is reversed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary font-sans selection:bg-brand-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
