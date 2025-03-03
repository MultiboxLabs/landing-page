# CLAUDE.md - Project Guide

## Commands
- Build: `vinxi build`
- Dev: `vinxi dev` 
- Start: `vinxi start`
- Format: `bun prettier . --write`

## Code Style
- **TypeScript**: Use strict typing with explicit interfaces for components & props
- **Components**: Function components with named exports
- **Styling**: Tailwind CSS with utility classes; use clsx/tailwind-merge for composition
- **Imports**: Group imports by external/internal, sort alphabetically
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files
- **Error Handling**: Use try/catch for async operations, provide meaningful error messages
- **Features**: Organize code by feature (routes, components, utilities)
- **Animations**: Use motion/react for animations with sensible defaults, which is framer-motion with a different name.

## Structure
- TanStack Router for routing with dedicated route files
- Product-specific components in `/components/product`
- Blog components in `/components/blog`
- Shared utilities in `/lib/utils.ts`
- Configuration in `/app/config` directory

## Blog System
- Blog posts defined in `/app/config/blog.ts`
- To add a new post, add an entry to the `blogPosts` array
- Content is written in Markdown format
- Images should be placed in `/public/blog/`