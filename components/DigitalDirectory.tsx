
import React, { useState } from 'react';

interface DirectoryItem {
  id: number;
  name: string;
  category: 'Emergency' | 'Education' | 'Govt';
  phone: string;
  link: string;
  description: string;
}

const directoryData: DirectoryItem[] = [
  {
    id: 1,
    name: "জাতীয় জরুরি সেবা (৯৯৯)",
    category: 'Emergency',
    phone: "999",
    link: "https://www.police.gov.bd/",
    description: "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্সের জন্য।"
  },
  {
    id: 2,
    name: "তথ্য ও সেবা (৩৩৩)",
    category: 'Emergency',
    phone: "333",
    link: "https://333.gov.bd/",
    description: "সরকারি তথ্য এবং সামাজিক সমস্যার প্রতিকারের জন্য।"
  },
  {
    id: 3,
    name: "ঢাকা বিশ্ববিদ্যালয়",
    category: 'Education',
    phone: "02-9661900",
    link: "https://www.du.ac.bd/",
    description: "বাংলাদেশের প্রাচীনতম এবং অন্যতম প্রধান বিশ্ববিদ্যালয়।"
  },
  {
    id: 4,
    name: "বাংলাদেশ ব্যাংক",
    category: 'Govt',
    phone: "16236",
    link: "https://www.bb.org.bd/",
    description: "বাংলাদেশের কেন্দ্রীয় ব্যাংক।"
  },
  {
    id: 5,
    name: "ফায়ার সার্ভিস কন্ট্রোল রুম",
    category: 'Emergency',
    phone: "02-223355555",
    link: "http://www.fireservice.gov.bd/",
    description: "যেকোনো অগ্নিকাণ্ড বা দুর্ঘটনার জরুরি সংবাদ।"
  },
  {
    id: 6,
    name: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
    category: 'Education',
    phone: "02-55006521",
    link: "http://www.bteb.gov.bd/",
    description: "কারিগরি শিক্ষার মান নিয়ন্ত্রণ ও সনদ প্রদান।"
  }
];

const DigitalDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Emergency' | 'Education' | 'Govt'>('All');

  const filteredItems = directoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.phone.includes(searchTerm);
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section id="directory" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="mb-12">
          <div className="border-l-4 border-blue-600 pl-4 mb-8">
            <h3 className="text-3xl font-black text-gray-900">ডিজিটাল ডিরেক্টরি</h3>
            <p className="text-gray-500 text-sm mt-1">গুরুত্বপূর্ণ প্রতিষ্ঠান ও জরুরি সেবার তথ্যসমূহ (স্লাইড করুন)</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="নাম বা নম্বর দিয়ে খুঁজুন..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-50 p-1 rounded-xl overflow-x-auto max-w-full no-scrollbar">
              {['All', 'Emergency', 'Education', 'Govt'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab === 'All' ? 'সবগুলো' : tab === 'Emergency' ? 'জরুরি সেবা' : tab === 'Education' ? 'শিক্ষা' : 'সরকারি'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`flex-none w-[280px] md:w-[320px] snap-center bg-white p-6 rounded-3xl border border-gray-100 border-b-4 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col ${
                  item.category === 'Emergency' ? 'border-b-red-500' :
                  item.category === 'Education' ? 'border-b-blue-500' :
                  'border-b-emerald-500'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl ${
                    item.category === 'Emergency' ? 'bg-red-50 text-red-500' :
                    item.category === 'Education' ? 'bg-blue-50 text-blue-500' :
                    'bg-emerald-50 text-emerald-500'
                  }`}>
                    {item.category === 'Emergency' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : item.category === 'Education' ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item.category}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors h-14 overflow-hidden">{item.name}</h4>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 h-10 overflow-hidden">{item.description}</p>
                
                <div className="flex gap-3 mt-auto">
                  <a 
                    href={`tel:${item.phone}`} 
                    className="flex-grow flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.405 5.405l.773-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {item.phone}
                  </a>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-400 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full py-20 text-center">
              <p className="text-gray-400 font-bold">দুঃখিত, কোনো তথ্য পাওয়া যায়নি!</p>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default DigitalDirectory;
