
import React, { useState } from 'react';

interface Spot {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  tag: string;
}

const spots: Spot[] = [
  {
    id: 1,
    name: "কক্সবাজার সমুদ্র সৈকত",
    location: "কক্সবাজার, চট্টগ্রাম",
    description: "কক্সবাজার সমুদ্র সৈকত বাংলাদেশের কক্সবাজার জেলায় অবস্থিত বিশ্বের দীর্ঘতম প্রাকৃতিক বালুময় সমুদ্র সৈকত। এটি ১২০ কিলোমিটার (৭৫ মাইল) পর্যন্ত বিস্তৃত। এই সৈকতের বৈশিষ্ট্য হলো পুরো সৈকতটি বালুময়, এখানে কাদা দেখা যায় না। লাবণী পয়েন্ট, সুগন্ধা পয়েন্ট ও কলাতলী পয়েন্ট পর্যটকদের কাছে সবচেয়ে জনপ্রিয় এবং প্রধান আকর্ষণ কেন্দ্র।",
    image: "https://ctgkhobor.com/wp-content/uploads/2022/07/Coxbazar-Beach.jpg",
    tag: "সমুদ্র সৈকত"
  },
  {
    id: 2,
    name: "সাজেক ভ্যালি",
    location: "রাঙ্গামাটি, পার্বত্য চট্টগ্রাম",
    description: "মেঘের রাজ্য হিসেবে পরিচিত। পাহাড়ের চূড়া থেকে তুলোর মতো মেঘের ভেলা দেখার এক রোমাঞ্চকর স্থান। কংলাক পাহাড় ও রিসাং ঝরনা এর আশেপাশের প্রধান দর্শনীয় স্থান।",
    image: "https://images.unsplash.com/photo-1623055734283-7576d1796be7?q=80&w=800&auto=format&fit=crop",
    tag: "পাহাড়"
  },
  {
    id: 3,
    name: "সুন্দরবন",
    location: "খুলনা ও বাগেরহাট",
    description: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন এবং রয়েল বেঙ্গল টাইগারের আবাসস্থল। এটি ইউনেস্কো ওয়ার্ল্ড হেরিটেজ সাইট। করমজল, হিরণ পয়েন্ট ও কটকা এর প্রধান দর্শনীয় স্থান।",
    image: "https://images.unsplash.com/photo-1608930510123-289da2685794?q=80&w=800&auto=format&fit=crop",
    tag: "ম্যানগ্রোভ বন"
  },
  {
    id: 4,
    name: "জাফলং",
    location: "সিলেট",
    description: "পাহাড়ি ঝরনা আর স্বচ্ছ জলের নদীর জন্য বিখ্যাত। ওপারেই ভারতের মেঘালয় রাজ্যের পাহাড় দেখা যায়। পিয়াইন নদীর তীরে পাথরের স্তূপ এখানকার প্রধান বৈশিষ্ট্য।",
    image: "https://images.unsplash.com/photo-1585121336019-21b3eb99b8f5?q=80&w=800&auto=format&fit=crop",
    tag: "প্রাকৃতিক দৃশ্য"
  },
  {
    id: 5,
    name: "সেন্ট মার্টিন দ্বীপ",
    location: "টেকনাফ, কক্সবাজার",
    description: "বাংলাদেশের একমাত্র প্রবাল দ্বীপ। স্বচ্ছ নীল জল আর নারিকেল বাগানের এই দ্বীপটি পর্যটকদের কাছে অত্যন্ত প্রিয়। ছেঁড়া দ্বীপ এর অন্যতম প্রধান আকর্ষণ।",
    image: "https://images.unsplash.com/photo-1601373327664-8846be0656a8?q=80&w=800&auto=format&fit=crop",
    tag: "দ্বীপ"
  }
];

const TouristSpots: React.FC = () => {
  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  return (
    <section id="tourist-spots" className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="container-custom">
        <div className="mb-10">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">ভ্রমণ পিয়াসীদের জন্য</h3>
            <p className="text-gray-500 text-sm mt-1">বাংলাদেশের সেরা ৫টি দর্শনীয় স্থান</p>
          </div>
        </div>

        {/* Standard Slider Alignment with 16:9 Aspect Ratio */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar">
          {spots.map((spot) => (
            <div 
              key={spot.id} 
              onClick={() => setSelectedSpot(spot)}
              className="flex-none w-[240px] sm:w-[280px] md:w-[320px] snap-start group cursor-pointer"
            >
              {/* Card Image - Changed to 16:9 aspect ratio */}
              <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 mb-4">
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-orange-600 text-[9px] font-black rounded-full uppercase tracking-tighter shadow-sm">
                        {spot.tag}
                    </span>
                </div>
              </div>

              {/* Card Meta - Perfectly Aligned */}
              <div className="px-1">
                <div className="flex items-center gap-1.5 mb-1.5">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest truncate">{spot.location}</span>
                </div>
                <h4 className="text-base md:text-lg font-black text-gray-800 leading-tight mb-2 group-hover:text-orange-600 transition-colors">
                    {spot.name}
                </h4>
                <div className="flex items-center gap-1">
                   <span className="text-[10px] font-bold text-orange-500 uppercase tracking-tight">বিস্তারিত তথ্য দেখুন</span>
                   <svg className="w-3 h-3 text-orange-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                   </svg>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer for scroll-end aesthetic */}
          <div className="flex-none w-4 md:hidden"></div>
        </div>
      </div>

      {/* Spot Detail Modal */}
      {selectedSpot && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedSpot(null)}
          ></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-scale-in">
            <button 
                onClick={() => setSelectedSpot(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-gray-900 transition-all shadow-lg"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div className="aspect-video overflow-hidden">
                <img src={selectedSpot.image} alt={selectedSpot.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="p-8 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{selectedSpot.location}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">{selectedSpot.name}</h3>
                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 mb-8">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed italic">
                        {selectedSpot.description}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="px-5 py-2 bg-orange-50 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-widest">
                        {selectedSpot.tag}
                    </span>
                    <button 
                        onClick={() => setSelectedSpot(null)}
                        className="px-8 py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
                    >
                        বন্ধ করুন
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </section>
  );
};

export default TouristSpots;
