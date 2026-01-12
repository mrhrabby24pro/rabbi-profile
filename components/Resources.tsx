
import React from 'react';

const resourceData = [
  {
    category: "ওয়েব ডেভেলপমেন্ট টুলস",
    items: [
      { name: "Tailwind CSS", desc: "স্টাইলিশ ইউআই ডিজাইনের জন্য শ্রেষ্ঠ ফ্রেমওয়ার্ক।", link: "https://tailwindcss.com" },
      { name: "React JS", desc: "আধুনিক ওয়েব অ্যাপ তৈরির সবচাইতে জনপ্রিয় লাইব্রেরি।", link: "https://react.dev" },
      { name: "Figma", desc: "ডিজাইন এবং প্রোটোটাইপিং-এর জন্য প্রফেশনাল টুল।", link: "https://figma.com" }
    ]
  },
  {
    category: "এআই এবং অটোমেশন",
    items: [
      { name: "Gemini AI", desc: "গুগলের শক্তিশালী ল্যাঙ্গুয়েজ এবং ইমেজ মডেল।", link: "https://gemini.google.com" },
      { name: "ChatGPT", desc: "সব ধরণের কনটেন্ট এবং কোডিং সহায়তার জন্য।", link: "https://chatgpt.com" },
      { name: "Midjourney", desc: "আর্টিস্টিক ইমেজ জেনারেশনের জন্য সেরা টুল।", link: "https://midjourney.com" }
    ]
  },
  {
    category: "লার্নিং প্ল্যাটফর্ম",
    items: [
      { name: "FreeCodeCamp", desc: "ফ্রিতে ওয়েব ডেভেলপমেন্ট শেখার সেরা জায়গা।", link: "https://freecodecamp.org" },
      { name: "W3Schools", desc: "বেসিক থেকে এডভান্সড টিউটোরিয়াল লাইব্রেরি।", link: "https://w3schools.com" },
      { name: "StackOverflow", desc: "প্রোগ্রামিং সমস্যা সমাধানের বিশাল কমিউনিটি।", link: "https://stackoverflow.com" }
    ]
  }
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container-custom">
        <h3 className="text-2xl font-bold mb-10 border-l-4 border-blue-600 pl-4">রিসোর্স লাইব্রেরি</h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resourceData.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="text-lg font-black text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {category.category}
              </h4>
              <div className="space-y-4">
                {category.items.map((item, iIdx) => (
                  <a 
                    key={iIdx} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.name}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
