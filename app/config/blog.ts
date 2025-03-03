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
    slug: "introducing-multibox-labs",
    title: "Introducing Multibox Labs",
    description: "Learn about our mission and the products we're building at Multibox Labs.",
    publishedAt: "2025-03-04T00:00:00.000Z",
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

1. **Conversio** - A large range of AI tools at your fingertips
2. **QuickFinder** - A quick keystroke launcher for your apps & commands
3. **DeployNest** - Simplified deployment for your applications

Stay tuned for more updates as we continue to expand our product offerings.
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
