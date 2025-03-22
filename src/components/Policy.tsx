import PageHeader from "@/components/PageHeader";
import ReactMarkdown from "react-markdown"; // for rendering markdown content
import remarkGfm from 'remark-gfm'; // for GitHub Flavored Markdown support
import rehypeRaw from "rehype-raw"; // for rendering raw HTML in markdown
import fs from 'fs';
import path from 'path';

interface PolicyProps {
    title: string;
    description: string;
    lastUpdated: string;
    filePath: string;
}

export default function Policy({ title, description, lastUpdated, filePath }: PolicyProps) {
    const markdownContent = fs.readFileSync(path.join(process.cwd(), filePath), 'utf8');

    return (
      <>
        <section id="halo" className="relative bg-background">
            <PageHeader name={title} description={description}>
                <span className="text-muted mb-5">Last Updated: <code>{lastUpdated}</code></span>
            </PageHeader>
        </section>

        {/* Rendered markdown */}
        <section id="content">
            <div className="container mx-auto px-4 py-8">
                <div className="prose prose-base prose-invert max-w-none prose-h2:mb-1 prose-h2:mt-5 prose-p:mt-1 prose-p:mb-1 prose-h1:mb-2 prose-th:p-3 prose-td:p-3 prose-span:text-green-400 prose-tr:border-borders prose-table:w-full md:prose-table:w-1/2">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                        {markdownContent}
                    </ReactMarkdown>
                </div>
            </div>
        </section>
      </>
    );

}