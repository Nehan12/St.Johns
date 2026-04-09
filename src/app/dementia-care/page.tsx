import { Metadata } from "next";
import DementiaCareContent from "./_content";

export const metadata: Metadata = {
  title: "Dementia Care",
  description:
    "Bespoke, person-centred dementia care in Sri Lanka. Heritage Care provides specialist memory care, 24-hour nursing, and tailored therapeutic programmes in Ragama.",
  alternates: { canonical: "/dementia-care" },
};

export default function DementiaCarePage() {
  return <DementiaCareContent />;
}
