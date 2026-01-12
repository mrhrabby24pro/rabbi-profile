
import React from 'react';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stacks = [
    {
      name: "React 19",
      desc: "আধুনিক ইউজার ইন্টারফেস তৈরির জন্য ব্যবহৃত প্রধান ফ্রেমওয়ার্ক।",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
          <path d="M12 12L19 19" />
          <path d="M12 12L5 5" />
        </svg>
      ),
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      name: "TypeScript",
      desc: "টাইপ-সেফ কোড লেখার জন্য জাভাস্ক্রিপ্টের শক্তিশালী সংস্করণ।",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2" />
          <path d="M12 12h10" />
          <path d="M18 8l4 4-4 4" />
        </svg>
      ),
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      name: "Tailwind CSS",
      desc: "অত্যন্ত দ্রুত এবং কাস্টম ডিজাইনের জন্য ব্যবহৃত সিএসএস ফ্রেমওয়ার্ক।",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
          <line x1="16" y1="8" x2="2" y2="22" />
          <line x1="17.5" y1="15" x2="9" y2="15" />
        </svg>
      ),
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      name: "Gemini AI",
      desc: "রিয়েল-টাইম নিউজ এবং এআই ফিচারের জন্য গুগল জেমিনি এপিআই।",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 12L2.1 12" />
          <path d="M12 12l4.5-9" />
          <path d="M12 12l4.5 9" />
        </svg>
      ),
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-in">
        <div className="p-6 sm:p-10">
          <div className="flex justify-between items-start mb-8">
            <div className="border-l-4 border-gray-900 pl-4">
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">প্রজেক্ট সম্পর্কে</h3>
              <p className="text-gray-500 text-xs mt-2 font-medium">ব্যবহৃত আধুনিক প্রযুক্তি ও টুলসসমূহ</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stacks.map((stack, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 flex gap-4 items-start">
                <div className={`w-10 h-10 ${stack.bg} ${stack.color} rounded-xl flex items-center justify-center shrink-0`}>
                  {stack.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{stack.name}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{stack.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
               <div className="flex flex-col">
                  <span className="text-xl font-black text-gray-900 leading-none">১০০%</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">পারফরম্যান্স</span>
               </div>
               <div className="w-px h-8 bg-gray-200"></div>
               <div className="flex flex-col">
                  <span className="text-xl font-black text-gray-900 leading-none">Secure</span>
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">SSL Encrypted</span>
               </div>
            </div>
            <div className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Version 2.0 Stable</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default TechStackModal;
