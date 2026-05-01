import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingButton from "@/components/floatingButton";
// import ChatBot from "@/components/ChatBot";
import JsonLd from "@/components/JsonLd";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heritagecare.lk"),
  title: {
    default: "Heritage Care | Senior Nursing & Residential Care in Sri Lanka",
    template: "%s | Heritage Care",
  },
  description:
    "Heritage Care provides 24/7 nursing, memory care, rehabilitation and senior residential care in Sri Lanka. Government certified and NHRC approved.",
  keywords: [
    "nursing home Sri Lanka",
    "elder care Sri Lanka",
    "memory care Sri Lanka",
    "senior residential care Colombo",
    "rehabilitation care Sri Lanka",
    "dementia care Sri Lanka",
    "24 hour nursing care",
    "palliative care Sri Lanka",
    "care home Ragama",
  ],
  icons: {
    icon: "/logo4.png",
    shortcut: "/logo4.png",
    apple: "/logo4.png",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://heritagecare.lk",
    siteName: "Heritage Care",
    title: "Heritage Care | Senior Nursing & Residential Care in Sri Lanka",
    description:
      "Heritage Care provides 24/7 nursing, memory care, rehabilitation and senior residential care in Sri Lanka. Government certified and NHRC approved.",
    images: [
      {
        url: "/og-image.jpg", // create a 1200x630px image and save to /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Heritage Care - Senior Nursing & Residential Care Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Care | Senior Nursing & Residential Care in Sri Lanka",
    description:
      "Heritage Care provides 24/7 nursing, memory care, rehabilitation and senior residential care in Sri Lanka. Government certified and NHRC approved.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
        <script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" async />
        <script
          src="https://files.bpcontent.cloud/2026/04/28/10/20260428100559-7MGP3CLO.js"
          defer
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <FloatingButton />
        {/* <ChatBot /> */}
      </body>
    </html>
  );
}
