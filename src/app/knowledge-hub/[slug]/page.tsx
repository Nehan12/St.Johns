import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";

type BlogDetailParams = { slug: string };

// Generate static paths
export async function generateStaticParams(): Promise<BlogDetailParams[]> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Make the page component async
export default async function BlogDetail({
  params,
}: {
  params: Promise<BlogDetailParams>; // accept params as a Promise
}) {
  const { slug } = await params; // resolve the promise
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#B85C2E] text-lg mb-4">Post not found.</p>
        <Link href="/knowledge-hub" className="text-[#B85C2E] font-semibold">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {post.title}
          </h1>
          <p className="text-white mt-4">{post.date}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gradient-to-br from-white via-[#F8F9FA] to-[#E8F4FD]">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/knowledge-hub"
            className="text-[#B85C2E] font-semibold mb-8 inline-block"
          >
            ← Back to Knowledge Hub
          </Link>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div
              className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
