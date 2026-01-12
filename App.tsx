
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MusicPlayer from './components/MusicPlayer';
import EbookReader from './components/EbookReader';
import Resources from './components/Resources';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const defaultData = {
  hero: {
    title: "স্বাগতম!",
    subtitle: "আমি রাব্বি হোসেন। প্রযুক্তি শিখছি, নতুন কিছু তৈরি করছি এবং অর্জিত জ্ঞান সবার সাথে শেয়ার করতে পছন্দ করি। এটি আমার ডিজিটাল ডায়েরি।"
  },
  about: {
    p1: "প্রযুক্তির জগতের প্রতি আমার আগ্রহ ছোটবেলা থেকেই। আমি বিশ্বাস করি শেখার কোনো শেষ নেই। প্রতিদিন নতুন কিছু শেখা এবং সেটাকে বাস্তবে রূপান্তর করাই আমার লক্ষ্য।",
    p2: "আমার আগ্রহের প্রধান ক্ষেত্রগুলো হলো ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং এবং ব্যক্তিগত উন্নয়ন। প্রযুক্তির মাধ্যমে সমস্যা সমাধান করতে আমি ভালোবাসি।"
  },
  projects: [
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
  ]
};

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [siteData, setSiteData] = useState(defaultData);

  useEffect(() => {
    const saved = localStorage.getItem('rabbi_site_data');
    if (saved) {
      try {
        setSiteData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local storage data", e);
      }
    }
  }, []);

  const updateData = (newData: any) => {
    setSiteData(newData);
    localStorage.setItem('rabbi_site_data', JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero 
          data={siteData.hero} 
          editMode={isAdmin} 
          onUpdate={(hero) => updateData({...siteData, hero})} 
        />
        <MusicPlayer />
        <EbookReader />
        <Resources />
        <About 
          data={siteData.about} 
          editMode={isAdmin} 
          onUpdate={(about) => updateData({...siteData, about})} 
        />
        <Projects 
          data={siteData.projects} 
          editMode={isAdmin} 
          onUpdate={(projects) => updateData({...siteData, projects})} 
        />
        <Contact />
      </main>
      
      <Footer />

      {/* Admin Toggle Button */}
      <button 
        onClick={() => setIsAdmin(!isAdmin)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-[100] transition-all duration-300 flex items-center gap-2 ${isAdmin ? 'bg-red-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm font-bold hidden sm:inline">
          {isAdmin ? 'অ্যাডমিন মোড অফ' : 'অ্যাডমিন মোড অন'}
        </span>
      </button>
    </div>
  );
};

export default App;
