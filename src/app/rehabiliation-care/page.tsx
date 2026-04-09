import { Metadata } from "next";
import RehabilitationCareContent from "./_content";

export const metadata: Metadata = {
  title: "Rehabilitation Care",
  description:
    "Specialist rehabilitation care in Sri Lanka. Heritage Care offers physiotherapy, hydrotherapy, and personalised recovery programmes in Ragama for post-surgery and neurological recovery.",
  alternates: { canonical: "/rehabiliation-care" },
};

export default function RehabilitationCarePage() {
  return <RehabilitationCareContent />;
}
