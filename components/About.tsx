
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom px-6">
        <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">আমার সম্পর্কে</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              প্রযুক্তির জগতের প্রতি আমার আগ্রহ ছোটবেলা থেকেই। আমি বিশ্বাস করি শেখার কোনো শেষ নেই। প্রতিদিন নতুন কিছু শেখা এবং সেটাকে বাস্তবে রূপান্তর করাই আমার লক্ষ্য।
            </p>
            <p>
              আমার আগ্রহের প্রধান ক্ষেত্রগুলো হলো ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং এবং ব্যক্তিগত উন্নয়ন। প্রযুক্তির মাধ্যমে সমস্যা সমাধান করতে আমি ভালোবাসি।
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
              <span className="block text-blue-600 font-bold text-xl mb-1">শিখছি</span>
              <span className="text-sm">নতুন টেকনোলজি</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
              <span className="block text-green-600 font-bold text-xl mb-1">তৈরি করছি</span>
              <span className="text-sm">বাস্তব প্রজেক্ট</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
              <span className="block text-purple-600 font-bold text-xl mb-1">শেয়ার করছি</span>
              <span className="text-sm">অর্জিত জ্ঞান</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center border border-gray-100 hover:shadow-md transition-shadow">
              <span className="block text-orange-600 font-bold text-xl mb-1">লক্ষ্য</span>
              <span className="text-sm">ব্যক্তিগত উন্নয়ন</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
