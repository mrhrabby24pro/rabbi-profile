
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container-custom px-6">
        <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">যোগাযোগ করুন</h3>
        <div className="max-w-md mx-auto bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 animate-bounce">
              <span className="text-green-500 text-4xl mb-4 block">✓</span>
              <p className="text-lg font-bold text-gray-800">আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">নাম</label>
                <input 
                  type="text" 
                  required
                  placeholder="আপনার নাম লিখুন"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ইমেল</label>
                <input 
                  type="email" 
                  required
                  placeholder="আপনার ইমেল লিখুন"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">বার্তা</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="আপনার বার্তা এখানে লিখুন"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-md"
              >
                বার্তা পাঠান
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
