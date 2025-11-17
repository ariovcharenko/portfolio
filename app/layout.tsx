import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arina Ovcharenko - AI Engineer and Product Developer",
  description: "AI Engineer and Product Developer building AI-powered products, evaluation frameworks, and clean user interfaces.",
  icons: {
    icon: "data:,",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-charcoal">{children}</body>
    </html>
  );
}

