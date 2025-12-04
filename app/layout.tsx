import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroCare - AI Safety & Communication Tools for Neurodivergent Individuals",
  description: "Protect, understand, and empower with real-time epilepsy detection, AI communication support, and behavior simulation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
