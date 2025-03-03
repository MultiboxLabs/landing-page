import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { BlogPost } from "@/config/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export function BlogCard({ post, className, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: featured ? 0 : 0.1 }}
      className={cn(featured && "relative z-10")}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className={cn(
          "group block overflow-hidden rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10",
          featured ? "md:grid md:grid-cols-2 gap-4 border-purple-500/30" : "",
          featured && "shadow-lg shadow-purple-500/5",
          className
        )}
      >
        {featured && (
          <div className="absolute -top-2 -right-2 z-10">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md">
              Featured
            </span>
          </div>
        )}

        {post.coverImage && (
          <div className={cn("overflow-hidden relative", featured ? "h-60" : "h-48")}>
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-5">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "px-2 py-1 text-xs rounded-full",
                    featured ? "bg-purple-900/50 text-purple-200" : "bg-gray-800 text-gray-300"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3
            className={cn(
              "font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2",
              featured ? "text-2xl md:text-3xl" : "text-xl"
            )}
          >
            {post.title}
          </h3>

          <p className={cn("text-gray-300 mb-4", featured ? "text-base" : "text-sm")}>{post.description}</p>

          <div className="flex justify-between items-center mt-auto text-xs text-gray-400">
            <span>{post.author}</span>
            <span>{formattedDate}</span>
          </div>

          {featured && (
            <motion.div
              className="mt-4 text-sm font-medium text-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Read full article →
            </motion.div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
