import { Metadata } from "next";
import AboutContent from "./_content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Heritage Care's mission to provide exceptional, compassionate nursing and residential care in Ragama, Sri Lanka, honouring dignity and personal wellbeing.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
