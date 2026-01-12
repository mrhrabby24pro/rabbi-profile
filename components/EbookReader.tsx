
import React, { useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  link: string;
  category: 'Quran' | 'Others';
  pages?: string;
}

const initialBooks: Book[] = [
  {
    id: 1,
    title: "আল কুরআন (বাংলা অনুবাদ)",
    author: "অনুবাদ: ড. জহুরুল হক",
    cover: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=500&auto=format&fit=crop",
    link: "https://cdlb.com.bd/wp-content/uploads/2024/11/Al-Quran-Bangla-Translation-Dr.-Zohurul-Hoque.pdf",
    category: 'Quran',
    pages: "১০৫১ পৃষ্ঠা"
  },
  {
    id: 2,
    title: "তাফসীর ইবনে কাসীর",
    author: "ইমাম ইবনে কাসীর",
    cover: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=500&auto=format&fit=crop",
    link: "https://www.waytojenna.com/pdf/tafsir-ibn-kathir-bangla-all-volumes.pdf",
    category: 'Quran',
    pages: "ভলিউম ১-১০"
  }
];

const EbookReader: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [filter, setFilter] = useState<'All' | 'Quran' | 'Others'>('All');

  const filteredBooks = filter === 'All' 
    ? initialBooks 
    : initialBooks.filter(b => b.category === filter);

  return (
    <section id="ebooks" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h3 className="text-3xl font-black text-gray-900">ডিজিটাল লাইব্রেরি</h3>
            <p className="text-gray-500 text-sm mt-1">আপনার প্রিয় বইগুলো এখন এক জায়গায়</p>
          </div>
          
          <div className="flex bg-gray-100 p-1.5 rounded-2xl self-start">
            {['All', 'Quran', 'Others'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === tab ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab === 'All' ? 'সব বই' : tab === 'Quran' ? 'আল কুরআন' : 'অন্যান্য'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div 
              key={book.id}
              className="group cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    এখনই পড়ুন
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h4 className="font-bold text-gray-800 line-clamp-1">{book.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{book.author}</p>
              </div>
            </div>
          ))}

          {/* Empty Slot Demo */}
          <div className="border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center p-8 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">বই যোগ করুন</p>
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-white/10">
            <div className="flex items-center gap-4">
              <img src={selectedBook.cover} alt="Thumb" className="w-10 h-10 rounded object-cover border border-white/20" />
              <div>
                <h5 className="text-white font-bold text-sm leading-none">{selectedBook.title}</h5>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{selectedBook.author}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href={selectedBook.link} 
                target="_blank" 
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-xs font-bold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                ডাউনলোড
              </a>
              <button 
                onClick={() => setSelectedBook(null)}
                className="w-10 h-10 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex-grow relative bg-[#1a1a1a]">
            <iframe 
              src={`${selectedBook.link}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-none"
              title="PDF Reader"
            />
            {/* Overlay to encourage external reading if iframe fails */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
               <div className="bg-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-sm pointer-events-auto">
                 বইটি অন্য ট্যাবে ওপেন করতে <a href={selectedBook.link} target="_blank" className="underline">এখানে ক্লিক করুন</a>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EbookReader;
