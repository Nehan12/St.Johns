import { Metadata } from "next";
import PalliativeCareContent from "./_content";

export const metadata: Metadata = {
  title: "Palliative Care",
  description:
    "Compassionate palliative and end-of-life care in Sri Lanka. Heritage Care offers specialist nursing, emotional support, and dignified comfort-led care in Ragama.",
  alternates: { canonical: "/palliative-care" },
};

export default function PalliativeCarePage() {
  return <PalliativeCareContent />;
}
