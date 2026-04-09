import { Metadata } from "next";
import RespiteContent from "./_content";

export const metadata: Metadata = {
  title: "Respite Care",
  description:
    "Short-term respite care in Sri Lanka for carers and individuals. Heritage Care provides expert nursing, rehabilitation, and holiday stays in Ragama with 24-hour support.",
  alternates: { canonical: "/respite" },
};

export default function RespitePage() {
  return <RespiteContent />;
}
