import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Source_Sans_3,
  Roboto,
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

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heritagecare.lk"),
  title: {
    default: "Heritage Care - Nursing & Wellness Sri Lanka",
    template: "%s | Heritage Care Sri Lanka",
  },
  description:
    "Premium care facility in Ragama, Sri Lanka providing compassionate palliative, dementia, and long-term residential care with 24/7 nursing and personalised care plans.",
  keywords: [
    "nursing home Sri Lanka",
    "care home Ragama",
    "dementia care Sri Lanka",
    "palliative care Sri Lanka",
    "elderly care Sri Lanka",
    "residential care Colombo",
    "Heritage Care",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo4.png",
    shortcut: "/logo4.png",
    apple: "/logo4.png",
  },
  openGraph: {
    title: "Heritage Care - Nursing & Wellness Sri Lanka",
    description:
      "Premium care facility in Ragama, Sri Lanka providing compassionate palliative, dementia, and long-term residential care with 24/7 nursing and personalised care plans.",
    images: [{ url: "/logo4.png", width: 800, height: 800, alt: "Heritage Care Logo" }],
    type: "website",
    locale: "en_LK",
    siteName: "Heritage Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heritage Care - Nursing & Wellness Sri Lanka",
    description:
      "Premium care facility in Ragama, Sri Lanka providing compassionate palliative, dementia, and long-term residential care with 24/7 nursing and personalised care plans.",
    images: ["/logo4.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NursingHome",
  name: "Heritage Care",
  url: "https://heritagecare.lk",
  logo: "https://heritagecare.lk/logo4.png",
  description:
    "Premium care facility in Ragama, Sri Lanka providing compassionate palliative, dementia, and long-term residential care with 24/7 nursing.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Diyagala Boys Town",
    addressLocality: "Ragama",
    addressCountry: "LK",
  },
  telephone: ["+94771654202", "+94777253873"],
  email: "heritagecarelk@gmail.com",
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${roboto.variable}${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
