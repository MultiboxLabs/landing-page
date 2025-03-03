export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date string
  author: string;
  coverImage?: string; // path to image
  tags?: string[];
  featured?: boolean;
  content: string; // Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-multibox",
    title: "Introducing Multibox Labs",
    description: "Learn about our mission and the products we're building at Multibox Labs.",
    publishedAt: "2023-09-01T00:00:00Z",
    author: "Multibox Team",
    coverImage: "/blog/introducing-multibox.png",
    tags: ["announcement", "company"],
    featured: true,
    content: `
We're excited to introduce Multibox Labs to the world. Our mission is to build innovative products that help developers and businesses succeed.

## Our Vision

At Multibox Labs, we believe in creating tools that simplify complex workflows and enhance productivity. Our team is dedicated to building high-quality products that solve real problems.

## Our Products

We're launching with three initial products:

1. **Conversio** - A powerful conversion tool for developers
2. **DeployNest** - Simplified deployment for your applications
3. **QuickFinder** - Find what you need, instantly

Stay tuned for more updates as we continue to expand our product offerings.
    `
  },
  {
    slug: "building-with-tanstack-router",
    title: "Building Modern Web Apps with TanStack Router",
    description: "A deep dive into how we use TanStack Router to build performant web applications.",
    publishedAt: "2023-10-15T00:00:00Z",
    author: "Multibox Team",
    tags: ["development", "react", "tutorial"],
    content: `
TanStack Router is a powerful routing solution for React applications. In this post, we'll explore how we use it at Multibox Labs.

## Why TanStack Router?

TanStack Router offers several advantages:

- Type-safe routing
- First-class search params
- Nested routes
- Lazy loading

## Getting Started

Here's a simple example of how to set up TanStack Router:

\`\`\`tsx
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ),
})
\`\`\`

Stay tuned for more in-depth tutorials on building with modern web technologies!
    `
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.tags?.includes(tag));
}
