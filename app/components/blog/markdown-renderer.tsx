import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { cn, copyTextToClipboard } from "@/lib/utils";
import ShikiHighlighter from "react-shiki";
import { useState } from "react";
import { Check } from "lucide-react";
import { Copy } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

function extractLanguage(className?: string): string {
  if (!className) return "plaintext";
  const match = className.match(/language-(\w+)/);
  return match ? match[1] : "plaintext";
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
          code: ({ node, children, ...props }) => {
            const isInline = !node?.position?.start.line || node?.position?.start.line === node?.position?.end.line;

            const [copied, setCopied] = useState(false);
            function handleCopy() {
              copyTextToClipboard(children as string);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }

            return isInline ? (
              <code {...props} className="bg-gray-800 text-purple-300 px-1 py-0.5 rounded text-sm">
                {children}
              </code>
            ) : (
              <div className="relative">
                <button
                  onClick={handleCopy}
                  className="absolute right-2 top-2 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors z-10"
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-400" />}
                </button>
                <ShikiHighlighter
                  language={extractLanguage(props.className)}
                  theme="github-dark"
                  showLanguage={false}
                  className="*:!bg-gray-800"
                >
                  {children as string}
                </ShikiHighlighter>
              </div>
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
