
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
      <div className="container-custom px-6 text-center">
        <div className="mb-6 inline-block p-2 bg-blue-50 rounded-full">
           <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl overflow-hidden border-2 border-white shadow-sm">
              <img src="https://picsum.photos/200/200" alt="Profile" className="w-full h-full object-cover" />
           </div>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in">স্বাগতম!</h2>
        <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
          আমি রাব্বি হোসেন। প্রযুক্তি শিখছি, নতুন কিছু তৈরি করছি এবং অর্জিত জ্ঞান সবার সাথে শেয়ার করতে পছন্দ করি। এটি আমার ডিজিটাল ডায়েরি।
        </p>
      </div>
    </section>
  );
};

export default Hero;
