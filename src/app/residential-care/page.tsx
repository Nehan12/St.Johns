import { Metadata } from "next";
import ResidentialCareContent from "./_content";

export const metadata: Metadata = {
  title: "Residential Care",
  description:
    "Long-term residential care in Ragama, Sri Lanka. Heritage Care provides a safe, comfortable home with 24/7 support, personalised care plans, and vibrant community life.",
  alternates: { canonical: "/residential-care" },
};

export default function ResidentialCarePage() {
  return <ResidentialCareContent />;
}
