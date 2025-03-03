import { createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getBlogPost } from "@/config/blog";
import { seo } from "@/utils/seo";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
  head: ({ loaderData }) => {
    const { post } = loaderData;
    return {
      title: `${post.title} | Multibox Labs Blog`,
      meta: [
        ...seo({
          title: `${post.title} | Multibox Labs Blog`,
          description: post.description
        })
      ]
    };
  },
  component: BlogPost
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-gray-400 text-sm mb-8">
            <span>{post.author}</span>
            <span>{formattedDate}</span>
          </div>
        </motion.div>

        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg"
          >
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <MarkdownRenderer content={post.content} />
        </motion.div>
      </div>
    </div>
  );
}
