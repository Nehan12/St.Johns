import { Metadata } from "next";
import AlzheimersCareContent from "./_content";

export const metadata: Metadata = {
  title: "Alzheimer's Care",
  description:
    "Specialist Alzheimer's disease care in Sri Lanka. Heritage Care provides bespoke memory care, cognitive therapies, and 24/7 nursing in Ragama for all stages of Alzheimer's.",
  alternates: { canonical: "/alzeihmrs-care" },
};

export default function AlzheimersCarePage() {
  return <AlzheimersCareContent />;
}
