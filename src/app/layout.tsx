import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from "@/components/floatingButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heritage Care - Nursing & Wellness",
  description:
    "Premium care facility in Sri Lanka providing compassionate palliative and long-term residential care with 24/7 nursing and personalized care plans.",
  icons: {
    icon: "/logo4.png",
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
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
