import { Metadata } from "next";
import SpecialistConditionsContent from "./_content";

export const metadata: Metadata = {
  title: "Specialist Conditions Care",
  description:
    "Heritage Care provides specialist nursing for complex conditions including Alzheimer's, Parkinson's, stroke recovery, and cancer care in Ragama, Sri Lanka.",
  alternates: { canonical: "/specialist-conditions" },
};

export default function SpecialistConditionsPage() {
  return <SpecialistConditionsContent />;
}
