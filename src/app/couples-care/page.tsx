import { Metadata } from "next";
import CouplesCareContent from "./_content";

export const metadata: Metadata = {
  title: "Couples Care",
  description:
    "Luxury couples care in Sri Lanka. Heritage Care allows partners to remain together with tailored individual support, memory care, and shared activities in Ragama.",
  alternates: { canonical: "/couples-care" },
};

export default function CouplesCarePage() {
  return <CouplesCareContent />;
}
