import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn("prose prose-invert max-w-none", className)}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              {...props}
              className="text-3xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            />
          ),
          h2: ({ node, ...props }) => <h2 {...props} className="text-2xl font-bold mt-6 mb-3 text-white" />,
          h3: ({ node, ...props }) => <h3 {...props} className="text-xl font-bold mt-5 mb-2 text-gray-100" />,
          p: ({ node, ...props }) => <p {...props} className="my-4 text-gray-300 leading-relaxed" />,
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-purple-400 hover:text-purple-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
          ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-6 my-4 text-gray-300" />,
          ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-6 my-4 text-gray-300" />,
          li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          blockquote: ({ node, ...props }) => (
            <blockquote {...props} className="border-l-4 border-purple-500 pl-4 py-1 my-4 italic text-gray-400" />
          ),
          code: ({ node, ...props }) => {
            const isInline = !node?.position?.start.line || node?.position?.start.line === node?.position?.end.line;

            return isInline ? (
              <code {...props} className="bg-gray-800 text-purple-300 px-1 py-0.5 rounded text-sm" />
            ) : (
              <code
                {...props}
                className="block bg-gray-800/50 border border-gray-700 p-4 rounded-md text-gray-300 overflow-x-auto"
              />
            );
          },
          pre: ({ node, ...props }) => <pre {...props} className="bg-transparent p-0 my-4" />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
