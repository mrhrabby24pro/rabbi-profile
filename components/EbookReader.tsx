
import React, { useState } from 'react';

interface Verse {
  arabic: string;
  transliteration: string;
  meaning: string;
}

interface Surah {
  id: number;
  name: string;
  meaning: string;
  info: string;
  verses: Verse[];
}

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  link?: string;
  category: 'Quran' | 'Others';
  surahs?: Surah[];
}

const initialBooks: Book[] = [
  {
    id: 1,
    title: "আল কুরআনুল কারীম",
    author: "পবিত্র কুরআন",
    cover: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=500&auto=format&fit=crop",
    category: 'Quran',
    surahs: [
      {
        id: 1,
        name: "সূরা আল-ফাতিহা",
        meaning: "সূচনা",
        info: "সূরা আল-ফাতিহা আল-কুরআনের প্রথম এবং অন্যতম গুরুত্বপূর্ণ সূরা। এটি নামাযের প্রতিটি রাকাআতে পড়া বাধ্যতামূলক।",
        verses: [
          {
            arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            transliteration: "বিসমিল্লাহির রাহমানির রাহিম",
            meaning: "পরম করুণাময় অসীম দয়ালু আল্লাহর নামে (শুরু করছি)।"
          },
          {
            arabic: "الْحَمْدُ لِلَّهِ রَبِّ الْعَالَمِينَ",
            transliteration: "আলহামদু লিল্লাহি রাব্বিল আলামিন",
            meaning: "সমস্ত প্রশংসা জগৎসমূহের প্রতিপ্রতিপালক আল্লাহর জন্য।"
          },
          {
            arabic: "الرَّحْمَنِ الرَّحِيمِ",
            transliteration: "আর রাহমানির রাহিম",
            meaning: "যিনি পরম করুণাময় ও অসীম দয়ালু।"
          },
          {
            arabic: "مَالِكِ يَوْمِ الدِّينِ",
            transliteration: "মালিকি ইয়াওমিদ্দিন",
            meaning: "যিনি বিচার দিবসের অধিপতি।"
          },
          {
            arabic: "إِيَّاکَ نَعْبُدُ وَإِيَّاکَ نَسْتَعِينُ",
            transliteration: "ইয়্যাকা না’বুদু ওয়া ইয়্যাকা নাসতায়িন",
            meaning: "আমরা কেবল আপনারই ইবাদত করি এবং কেবল আপনারই সাহায্য চাই।"
          },
          {
            arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
            transliteration: "ইহদিনাস সিরাতাল মুস্তাকিম",
            meaning: "আমাদের সরল পথ প্রদর্শন করুন।"
          },
          {
            arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
            transliteration: "সিরাতাল্লাজিনা আন’আমতা আলাইহিম গাইরিল মাগদুবি আলাইহিম ওয়ালাদ্দাল্লিন",
            meaning: "তাদের পথ, যাদের আপনি নিয়ামত দান করেছেন; তাদের পথ নয় যারা ক্রোধে পতিত হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।"
          }
        ]
      },
      {
        id: 112,
        name: "সূরা আল-ইখলাস",
        meaning: "একনিষ্ঠতা",
        info: "এই সূরাটি তাওহীদ বা আল্লাহর একত্ববাদের সারকথা বর্ণনা করে। এটি পাঠ করলে কুরআনের এক-তৃতীয়াংশ পাঠের সওয়াব পাওয়া যায়।",
        verses: [
          {
            arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            transliteration: "বিসমিল্লাহির রাহমানির রাহিম",
            meaning: "পরম করুণাময় অসীম দয়ালু আল্লাহর নামে।"
          },
          {
            arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
            transliteration: "কুল হুওয়াল্লাহু আহাদ",
            meaning: "বলুন, তিনি আল্লাহ, এক।"
          },
          {
            arabic: "اللَّهُ الصَّمَدُ",
            transliteration: "আল্লাহুস সামাদ",
            meaning: "আল্লাহ অমুখাপেক্ষী।"
          },
          {
            arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
            transliteration: "লাম ইয়ালিদ ওয়া লাম ইউলাদ",
            meaning: "তিনি কাউকে জন্ম দেননি এবং কেউ তাঁকে জন্ম দেয়নি।"
          },
          {
            arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            transliteration: "ওয়া লাম ইয়াকুল্লাহু কুফুওয়ান আহাদ",
            meaning: "এবং তাঁর সমতুল্য কেউ নেই।"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "তাফসীর ইবনে কাসীর",
    author: "ইমাম ইবনে কাসীর",
    cover: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=500&auto=format&fit=crop",
    link: "https://www.waytojenna.com/pdf/tafsir-ibn-kathir-bangla-all-volumes.pdf",
    category: 'Quran'
  }
];

const EbookReader: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [filter, setFilter] = useState<'All' | 'Quran' | 'Others'>('All');

  const filteredBooks = filter === 'All' 
    ? initialBooks 
    : initialBooks.filter(b => b.category === filter);

  const handleCloseModal = () => {
    setSelectedBook(null);
    setSelectedSurah(null);
  };

  return (
    <section id="ebooks" className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h3 className="text-2xl font-black text-gray-900">ডিজিটাল লাইব্রেরি</h3>
            <p className="text-gray-400 text-xs mt-1">পড়ুন এবং জ্ঞান অর্জন করুন (স্লাইড করুন)</p>
          </div>
          
          <div className="flex bg-gray-50 p-1 rounded-xl self-start">
            {['All', 'Quran', 'Others'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filter === tab ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab === 'All' ? 'সব' : tab === 'Quran' ? 'কুরআন' : 'অন্যান্য'}
              </button>
            ))}
          </div>
        </div>

        {/* Improved Slide System: Respecting Container Padding */}
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar">
          {filteredBooks.map((book) => (
            <div 
              key={book.id}
              className="flex-none w-[130px] md:w-[150px] snap-start group cursor-pointer"
              onClick={() => setSelectedBook(book)}
            >
              <div className="relative aspect-[3/4.5] rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg border border-gray-100">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                  <span className="bg-emerald-500 text-white text-[9px] py-1 text-center rounded-md font-black">
                    {book.surahs ? 'তালিক' : 'পড়ুন'}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="font-bold text-gray-800 text-[11px] leading-tight line-clamp-2">{book.title}</h4>
                <p className="text-[9px] text-gray-400 mt-0.5 font-medium">{book.author}</p>
              </div>
            </div>
          ))}

          {/* Placeholder for Add Book */}
          <div className="flex-none w-[130px] md:w-[150px] snap-start border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center p-4 bg-gray-50/30 hover:bg-gray-50 transition-colors cursor-pointer group">
             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors">
                <svg className="w-4 h-4 text-gray-300 group-hover:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
             </div>
             <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest text-center">বই যোগ করুন</p>
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-[100] bg-white md:bg-black/95 md:backdrop-blur-md flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-white/10 text-white">
            <div className="flex items-center gap-4">
              {selectedSurah && (
                <button 
                  onClick={() => setSelectedSurah(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <div>
                <h5 className="font-bold text-sm leading-none">
                  {selectedSurah ? selectedSurah.name : selectedBook.title}
                </h5>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">
                  {selectedSurah ? `অর্থ: ${selectedSurah.meaning}` : selectedBook.author}
                </p>
              </div>
            </div>
            <button 
              onClick={handleCloseModal}
              className="w-10 h-10 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content Body */}
          <div className="flex-grow overflow-y-auto bg-gray-50 md:bg-transparent custom-scrollbar">
            {selectedBook.surahs && !selectedSurah ? (
              /* Surah Selection List */
              <div className="max-w-4xl mx-auto py-12 px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-gray-900 md:text-white mb-2">সূরা নির্বাচন করুন</h2>
                  <p className="text-gray-500 md:text-gray-400 text-sm">পড়ার জন্য নিচের যেকোনো একটি সূরা বেছে নিন</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedBook.surahs.map((surah) => (
                    <button
                      key={surah.id}
                      onClick={() => setSelectedSurah(surah)}
                      className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all text-left flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-black text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        {surah.id}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-base">{surah.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{surah.meaning}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : selectedSurah ? (
              /* Verse Reader View */
              <div className="max-w-3xl mx-auto py-12 px-6">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-emerald-600 mb-2">{selectedSurah.name}</h2>
                  <p className="text-lg text-gray-500 font-bold mb-6">{selectedSurah.meaning}</p>
                  <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 text-gray-700 text-sm leading-relaxed max-w-xl mx-auto shadow-sm">
                    {selectedSurah.info}
                  </div>
                </div>

                <div className="space-y-8">
                  {selectedSurah.verses.map((verse, idx) => (
                    <div key={idx} className="relative group bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 transition-all hover:shadow-lg">
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
                        {idx + 1}
                      </div>
                      
                      <div className="text-right mb-6">
                        <p className="text-3xl md:text-4xl font-serif text-gray-900 leading-[1.8] tracking-wide" dir="rtl">
                          {verse.arabic}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-xl border-l-4 border-emerald-400">
                          <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest mb-0.5">উচ্চারণ</p>
                          <p className="text-gray-700 text-base font-medium">{verse.transliteration}</p>
                        </div>
                        
                        <div className="px-1">
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">অর্থ</p>
                          <p className="text-gray-900 text-lg font-bold leading-relaxed">{verse.meaning}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-20 text-center pb-20">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">পড়া শেষ হয়েছে</h3>
                  <button 
                    onClick={() => setSelectedSurah(null)}
                    className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-all shadow-md"
                  >
                    তালিকায় ফিরে যান
                  </button>
                </div>
              </div>
            ) : (
              /* Standard PDF Viewer */
              <iframe 
                src={`${selectedBook.link}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title="PDF Reader"
              />
            )}
          </div>
        </div>
      )}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default EbookReader;
