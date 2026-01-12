
import React from 'react';

interface HeroProps {
  data: { title: string; subtitle: string };
  editMode: boolean;
  onUpdate: (data: any) => void;
}

const Hero: React.FC<HeroProps> = ({ data, editMode, onUpdate }) => {
  return (
    <section id="home" className="py-20 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100 relative">
      <div className="container-custom text-center">
        <div className="mb-6 inline-block p-2 bg-blue-50 rounded-full group">
           <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-4xl overflow-hidden border-2 border-white shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img src="https://picsum.photos/300/300" alt="Profile" className="w-full h-full object-cover" />
           </div>
        </div>

        {editMode ? (
          <div className="max-w-xl mx-auto space-y-4 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <p className="text-xs font-bold text-yellow-600 uppercase mb-2">এডিট হিরো সেকশন</p>
            <input 
              value={data.title}
              onChange={(e) => onUpdate({...data, title: e.target.value})}
              className="w-full p-2 border rounded-md font-bold text-2xl text-center"
            />
            <textarea 
              value={data.subtitle}
              onChange={(e) => onUpdate({...data, subtitle: e.target.value})}
              className="w-full p-2 border rounded-md text-gray-600 text-center"
              rows={3}
            />
          </div>
        ) : (
          <>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{data.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              {data.subtitle}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
