
import React from 'react';

interface AboutProps {
  data: { p1: string; p2: string };
  editMode: boolean;
  onUpdate: (data: any) => void;
}

const About: React.FC<AboutProps> = ({ data, editMode, onUpdate }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h3 className="text-2xl font-bold mb-10 border-l-4 border-blue-600 pl-4">আমার সম্পর্কে</h3>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {editMode ? (
              <div className="space-y-4 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <p className="text-xs font-bold text-yellow-600 uppercase">প্যারাগ্রাফ ১</p>
                <textarea 
                  value={data.p1}
                  onChange={(e) => onUpdate({...data, p1: e.target.value})}
                  className="w-full p-3 border rounded-md text-gray-600"
                  rows={4}
                />
                <p className="text-xs font-bold text-yellow-600 uppercase mt-4">প্যারাগ্রাফ ২</p>
                <textarea 
                  value={data.p2}
                  onChange={(e) => onUpdate({...data, p2: e.target.value})}
                  className="w-full p-3 border rounded-md text-gray-600"
                  rows={4}
                />
              </div>
            ) : (
              <div className="text-gray-600 text-lg leading-relaxed space-y-6">
                <p>{data.p1}</p>
                <p>{data.p2}</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'শিখছি', value: 'টেকনোলজি', color: 'blue' },
              { label: 'তৈরি করছি', value: 'প্রজেক্ট', color: 'green' },
              { label: 'শেয়ার করছি', value: 'ব্লগ', color: 'purple' },
              { label: 'লক্ষ্য', value: 'উন্নয়ন', color: 'orange' }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                <span className={`text-${stat.color}-600 font-black text-2xl mb-1`}>{stat.label}</span>
                <span className="text-sm text-gray-500 font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
