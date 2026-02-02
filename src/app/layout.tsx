import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/floatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heritage Care - Nursing & Wellness",
  description:
    "Premium care facility in Sri Lanka providing compassionate palliative and long-term residential care with 24/7 nursing and personalized care plans.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/logo4.png", // Use your existing logo
    shortcut: "/logo4.png",
    apple: "/logo4.png",
  },
  openGraph: {
    title: "Heritage Care - Nursing & Wellness",
    description:
      "Premium care facility in Sri Lanka providing compassionate palliative and long-term residential care with 24/7 nursing and personalized care plans.",
    images: ["/logo4.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Care - Nursing & Wellness",
    description:
      "Premium care facility in Sri Lanka providing compassionate palliative and long-term residential care with 24/7 nursing and personalized care plans.",
    images: ["/logo4.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
