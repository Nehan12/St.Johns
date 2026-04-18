"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";

export default function Blog() {
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section
        className="relative flex items-center pt-32 md:pt-24 bg-cover bg-center min-h-[60vh] md:min-h-[80vh]"
        style={{
          backgroundImage: "url(/services.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            News & Insights
          </h1>
          <p className="text-lg md:text-xl text-white mt-6 max-w-2xl mx-auto">
            Stay updated with the latest news, insights, and stories from
            Heritage Care.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Latest Articles
            </h2>
            <p className="text-lg text-[#372e29] mt-4 max-w-2xl mx-auto">
              Explore helpful resources, care tips, and updates from our team.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>

                  <h3 className="text-xl font-bold text-primary mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/knowledge-hub/${post.slug}`}
                    className="inline-block text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
