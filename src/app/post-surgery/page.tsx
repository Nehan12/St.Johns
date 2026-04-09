import { Metadata } from "next";
import PostSurgeryCareContent from "./_content";

export const metadata: Metadata = {
  title: "Post Surgery Care",
  description:
    "Personalised post-surgery recovery care in Sri Lanka. Heritage Care provides 24/7 nursing, physiotherapy, and luxury accommodation in Ragama for a safe and comfortable recovery.",
  alternates: { canonical: "/post-surgery" },
};

export default function PostSurgeryPage() {
  return <PostSurgeryCareContent />;
}
