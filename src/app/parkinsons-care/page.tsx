import { Metadata } from "next";
import ParkinsonsCareContent from "./_content";

export const metadata: Metadata = {
  title: "Parkinson's Care",
  description:
    "Expert Parkinson's disease care in Sri Lanka. Heritage Care provides specialist nursing, physiotherapy, medication management and cognitive support in Ragama.",
  alternates: { canonical: "/parkinsons-care" },
};

export default function ParkinsonsCarePage() {
  return <ParkinsonsCareContent />;
}
