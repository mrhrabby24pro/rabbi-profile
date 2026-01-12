
import React from 'react';

// বর্তমানে কোনো ডেটা নেই, এখানে পরে আপনার প্রয়োজনীয় ডেটা যোগ করতে পারেন
const resourceData: any[] = [];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container-custom">
        <h3 className="text-2xl font-bold mb-10 border-l-4 border-blue-600 pl-4">রিসোর্স লাইব্রেরি</h3>
        
        {resourceData.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {resourceData.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-lg font-black text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item: any, iIdx: number) => (
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
        ) : (
          <div className="bg-gray-50 rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-400 font-medium">বর্তমানে কোনো রিসোর্স জমা নেই।</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;
