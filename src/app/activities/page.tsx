"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ActivitiesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[var(--primary)] border-t-transparent mx-auto mb-4"></div>
          <p className="text-primary text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  const cardAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section
        className="relative flex items-center pt-32 md:pt-24 min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/activities.png)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Activities at Heritage Care
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            A vibrant programme designed to support engagement, wellbeing, and
            connection.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="text-lg md:text-xl text-main leading-relaxed">
            At Heritage Care, we offer a wide range of activities designed to
            suit all interests, abilities, and preferences. While participation
            is always optional, we actively encourage residents to get involved,
            as social interaction, mental stimulation, and enjoyment are
            essential to overall wellbeing.
          </p>
          <p className="text-lg md:text-xl text-main leading-relaxed">
            Activities are delivered in a variety of formats, including group
            sessions, small group engagements, and one-to-one interactions. Our
            dedicated Activities Coordinator plays a key role in ensuring that
            each programme is meaningful and resident-focused. Regular
            residents’ meetings are held to gather feedback and ensure
            activities reflect personal interests and choices.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="relative py-20 bg-light overflow-hidden">
        {/* Floating background */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {[
            {
              title: "A Holistic Approach to Activities",
              text: "Every activity at Heritage Care is thoughtfully designed to engage the senses and support wellbeing. Our programmes are:",
              items: [
                "Creative",
                "Emotional",
                "Recreational",
                "Physical",
                "Reminiscent",
                "Relaxing",
                "Sensory",
                "Social",
                ,
              ],
            },
            {
              title: "Everyday Engagement",
              text: "Across our homes, a variety of resources and materials are always available to keep residents engaged and entertained. Popular favourites include:",
              items: [
                "Quizzes",
                "Word games",
                "Jigsaws",
                "Poetry and literary sessions",
                "Storytelling",
                "Documentary viewings and discussions",
                "Guest talks from external experts (e.g. gardening, health, lifestyle)",
              ],
            },
            {
              title: "Always Available",
              text: "We believe that meaningful engagement should not be limited to scheduled activities. Residents have continuous access to:",
              items: [
                "Magazines covering a wide range of interests",
                "Fiction and non-fiction books",
                "Dementia-friendly resources and materials",
                "Reminiscence tools and memory aids",
                "Board games, puzzles, crosswords, and cards",
                "Television, radio, and films",
                "Knitting and craft materials",
              ],
            },
            {
              title: "Social Activities",
              text: "Building friendships and fostering a sense of community is at the heart of life at Heritage Care. Throughout the week, residents can enjoy a variety of social experiences, including:",
              items: [
                "Coffee mornings and afternoon tea",
                "Music sessions and workshops",
                "Singing and karaoke",
                "Hobby and interest clubs",
                "Themed social gatherings",
              ],
            },
            {
              title: "Physical Activities",
              text: "We place strong emphasis on maintaining physical activity, as it supports independence, boosts wellbeing, and can be highly enjoyable. Activities include:",
              items: [
                "Gentle chair-based exercises",
                "Indoor games such as carpet bowls",
                "Dancing and movement sessions",
                "Gardening activities",
                "Organised outings and trips",
                "Creative sessions such as decorating and flower arranging",
              ],
            },
            {
              title: "Reminiscence and Memory Support",
              text: "Reminiscence plays an important role in emotional wellbeing, particularly for residents living with dementia. At Heritage Care, we offer a range of experiences designed to spark memories and encourage meaningful conversations, including:",
              items: [
                "Music and songs from past eras",
                "Memory boxes and themed memorabilia",
                "Sensory and themed spaces",
                "“On this day” historical discussions",
                "Traditional activities and pastimes",
                "Classic foods and cultural experiences",
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              {...cardAnimation}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
            >
              <h2 className="text-3xl font-bold mb-6 text-main">
                {section.title}
              </h2>

              <p className="text-lg text-main mb-6 leading-relaxed">
                {section.text}
              </p>

              {/* TAG STYLE (same as your holistic section) */}
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-soft text-main shadow-sm hover:scale-105 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
