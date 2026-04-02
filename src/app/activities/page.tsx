"use client";

import { useState, useEffect } from "react";
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
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#B85C2E] border-t-transparent mx-auto mb-4"></div>
          <p
            className="text-[#B85C2E] text-lg"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative flex items-center pt-32 md:pt-24 min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/about.jpg)" }}
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
          <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed">
            At Heritage Care, we offer a wide range of activities designed to
            suit all interests, abilities, and preferences. While participation
            is always optional, we actively encourage residents to get involved,
            as social interaction, mental stimulation, and enjoyment are
            essential to overall wellbeing.
          </p>
          <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed">
            Activities are delivered in a variety of formats, including group
            sessions, small group engagements, and one-to-one interactions. Our
            dedicated Activities Coordinator plays a key role in ensuring that
            each programme is meaningful and resident-focused. Regular
            residents’ meetings are held to gather feedback and ensure
            activities reflect personal interests and choices.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 bg-[#FFF4EE]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {/* Holistic Approach */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1D1C4]">
            <h2 className="text-3xl font-bold mb-6 text-[#3A2A23] flex items-center gap-2">
              A Holistic Approach to Activities
            </h2>
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed mb-4">
              Every activity at Heritage Care is thoughtfully designed to engage
              the senses and support wellbeing. Our programmes are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5C4033] text-lg md:text-xl">
              <li>Creative</li>
              <li>Emotional</li>
              <li>Recreational</li>
              <li>Physical</li>
              <li>Reminiscent</li>
              <li>Relaxing</li>
              <li>Sensory</li>
              <li>Social</li>
            </ul>
          </div>

          {/* Everyday Engagement */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1D1C4]">
            <h2 className="text-3xl font-bold mb-6 text-[#3A2A23] flex items-center gap-2">
              Everyday Engagement
            </h2>
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed mb-4">
              Across our homes, a variety of resources and materials are always
              available to keep residents engaged and entertained. Popular
              favourites include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5C4033] text-lg md:text-xl">
              <li>Quizzes</li>
              <li>Word games</li>
              <li>Jigsaws</li>
              <li>Poetry and literary sessions</li>
              <li>Storytelling</li>
              <li>Documentary viewings and discussions</li>
              <li>
                Guest talks from external experts (e.g. gardening, health,
                lifestyle)
              </li>
            </ul>
          </div>

          {/* Always Available */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1D1C4]">
            <h2 className="text-3xl font-bold mb-6 text-[#3A2A23] flex items-center gap-2">
              Always Available
            </h2>
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed mb-4">
              We believe that meaningful engagement should not be limited to
              scheduled activities. Residents have continuous access to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5C4033] text-lg md:text-xl">
              <li>Magazines covering a wide range of interests</li>
              <li>Fiction and non-fiction books</li>
              <li>Dementia-friendly resources and materials</li>
              <li>Reminiscence tools and memory aids</li>
              <li>Board games, puzzles, crosswords, and cards</li>
              <li>Television, radio, and films</li>
              <li>Knitting and craft materials</li>
            </ul>
          </div>

          {/* Social Activities */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1D1C4]">
            <h2 className="text-3xl font-bold mb-6 text-[#3A2A23] flex items-center gap-2">
              Social Activities
            </h2>
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed mb-4">
              Building friendships and fostering a sense of community is at the
              heart of life at Heritage Care. Throughout the week, residents can
              enjoy a variety of social experiences, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5C4033] text-lg md:text-xl">
              <li>Coffee mornings and afternoon tea</li>
              <li>Music sessions and workshops</li>
              <li>Singing and karaoke</li>
              <li>Hobby and interest clubs</li>
              <li>Themed social gatherings</li>
            </ul>
          </div>

          {/* Physical Activities */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1D1C4]">
            <h2 className="text-3xl font-bold mb-6 text-[#3A2A23] flex items-center gap-2">
              Physical Activities
            </h2>
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed mb-4">
              We place strong emphasis on maintaining physical activity, as it
              supports independence, boosts wellbeing, and can be highly
              enjoyable. Activities include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5C4033] text-lg md:text-xl">
              <li>Gentle chair-based exercises</li>
              <li>Indoor games such as carpet bowls</li>
              <li>Dancing and movement sessions</li>
              <li>Gardening activities</li>
              <li>Organised outings and trips</li>
              <li>Creative sessions such as decorating and flower arranging</li>
            </ul>
          </div>

          {/* Reminiscence & Memory Support */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#F1D1C4]">
            <h2 className="text-3xl font-bold mb-6 text-[#3A2A23] flex items-center gap-2">
              Reminiscence and Memory Support
            </h2>
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed mb-4">
              Reminiscence plays an important role in emotional wellbeing,
              particularly for residents living with dementia. At Heritage Care,
              we offer a range of experiences designed to spark memories and
              encourage meaningful conversations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#5C4033] text-lg md:text-xl">
              <li>Music and songs from past eras</li>
              <li>Memory boxes and themed memorabilia</li>
              <li>Sensory and themed spaces</li>
              <li>“On this day” historical discussions</li>
              <li>Traditional activities and pastimes</li>
              <li>Classic foods and cultural experiences</li>
            </ul>
          </div>

          {/* Closing Statement */}
          <div className="text-center py-12">
            <p className="text-lg md:text-xl text-[#5C4033] leading-relaxed">
              At Heritage Care, our activities programme is more than just
              entertainment — it’s about creating purpose, connection, and joy
              in everyday life.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
