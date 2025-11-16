import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arina Ovcharenko - AI Engineer and Full-Stack Developer",
  description: "AI Engineer and Full-Stack Developer building AI-powered products, evaluation frameworks, and clean user interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-gray-100">{children}</body>
    </html>
  );
}

