
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "বাংলা টেক ব্লগ",
      description: "প্রযুক্তি বিষয়ক বিভিন্ন টিউটোরিয়াল এবং আর্টিকেল শেয়ার করার জন্য একটি ওয়েবসাইট।",
      tags: ["React", "Tailwind"]
    },
    {
      title: "ব্যক্তিগত পোর্টফোলিও",
      description: "আমার কাজের নমুনা এবং পরিচিতি তুলে ধরার জন্য একটি মিনিমাল ডিজাইন ওয়েবসাইট।",
      tags: ["HTML", "CSS", "JS"]
    },
    {
      title: "লার্নিং ম্যানেজমেন্ট টুল",
      description: "শিক্ষার্থীদের পড়ালেখার অগ্রগতি ট্র্যাক করার জন্য একটি ছোট ওয়েব অ্যাপ্লিকেশন।",
      tags: ["Next.js", "Firebase"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container-custom px-6">
        <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">প্রজেক্টসমূহ</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform cursor-default group">
              <div className="mb-4 text-blue-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded uppercase font-bold">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
