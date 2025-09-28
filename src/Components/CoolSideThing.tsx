import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Article {
  id: number;
  title: string;
  url: string;
  published_at: string;
}

export default function DevTrends() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch(
        "https://dev.to/api/articles?per_page=10&top=1"
      );
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  return (
    <div className="border h-full border-zinc-800 adi text-white max-w-xl mx-auto p-3">
      <h2 className="text-xl font-mono px-4 py-2">Trending Dev Posts</h2>
      <div 
        className="space-y-2 max-h-84 overflow-y-auto p-2 rounded bg-transparent custom-scrollbar"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#18181b transparent'
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #18181b;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #27272a;
            }
          `
        }} />
        {articles.map((article, i) => (
          <motion.a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="block p-2 rounded border-l-2 border-l-zinc-600 pl-3 hover:border-l-zinc-400 hover:bg-zinc-900/30 transition-all duration-200 text-sm leading-relaxed"
          >
            {article.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
}