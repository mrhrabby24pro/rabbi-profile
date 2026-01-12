
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface NewsItem {
  title: string;
  summary: string;
  source: string;
  url: string;
}

const DailyNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "আজকের বাংলাদেশের শীর্ষ ৫টি আলোচিত খবরের শিরোনাম, সংক্ষিপ্ত সারমর্ম এবং মূল সোর্স বা লিঙ্ক দিন। তথ্যগুলো অবশ্যই আজকের সময়ের হতে হবে। JSON ফরম্যাটে দিন: [{title, summary, source, url}]। শুধু JSON টি রিটার্ন করুন।",
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "";
      // Extract JSON block if model returns markdown
      const jsonMatch = text.match(/\[.*\]/s);
      if (jsonMatch) {
        const parsedNews = JSON.parse(jsonMatch[0]);
        setNews(parsedNews);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("News fetch error:", err);
      setError("খবর লোড করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="border-l-4 border-red-600 pl-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <h3 className="text-3xl font-black text-gray-900">আজকের আলোচিত খবর</h3>
            </div>
            <p className="text-gray-500 text-sm">বাংলাদেশের সর্বশেষ গুরুত্বপূর্ণ সংবাদসমূহ</p>
          </div>
          
          <button 
            onClick={fetchNews}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            {loading ? (
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            )}
            রিফ্রেশ সংবাদ
          </button>
        </div>

        {loading ? (
          <div className="grid gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="animate-pulse bg-gray-50 h-32 rounded-3xl border border-gray-100"></div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-8 rounded-3xl text-center font-bold">
            {error}
          </div>
        ) : (
          <div className="grid gap-6">
            {news.map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-full md:w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0 text-gray-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                  <span className="text-2xl font-black">০{idx + 1}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded-full">Trending</span>
                    <span className="text-xs text-gray-400 font-medium">উৎস: {item.source}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:gap-3 transition-all"
                  >
                    বিস্তারিত পড়ুন 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DailyNews;
