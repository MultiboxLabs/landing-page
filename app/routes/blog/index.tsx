import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/config/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { seo } from "@/utils/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    title: "Blog | Multibox Labs",
    meta: [
      ...seo({
        title: "Blog | Multibox Labs",
        description: "Insights, tutorials, and updates from the Multibox Labs team."
      })
    ]
  }),
  component: BlogIndex
});

function BlogIndex() {
  const featuredPosts = getFeaturedBlogPosts();
  const allPosts = getAllBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Multibox Labs Blog
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Insights, tutorials, and updates from our team. Learn about our products, technologies, and the future we're
          building.
        </p>
      </motion.div>

      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Posts</h2>
          <div className="grid gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured={true} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">All Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
