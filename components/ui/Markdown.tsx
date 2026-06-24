import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/** Renders Markdown (with GFM tables/strikethrough) into branded prose. */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-bloo max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
