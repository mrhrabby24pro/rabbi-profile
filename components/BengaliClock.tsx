
import React, { useState, useEffect } from 'react';

const BengaliClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatBengali = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };

    const dateStr = date.toLocaleDateString('bn-BD', options);
    const timeStr = date.toLocaleTimeString('bn-BD', timeOptions);

    return { dateStr, timeStr };
  };

  const { dateStr, timeStr } = formatBengali(currentTime);

  return (
    <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-white/40 backdrop-blur-xl border border-white/60 p-4 md:p-6 rounded-3xl shadow-xl mt-8 animate-fade-in transition-all hover:scale-105 duration-500">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-blue-500/10 rounded-2xl">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-widest text-blue-600 font-bold opacity-70">আজকের তারিখ</p>
          <p className="text-base md:text-lg font-bold text-gray-800">{dateStr}</p>
        </div>
      </div>
      
      <div className="hidden md:block w-px h-10 bg-gray-200"></div>
      <div className="md:hidden w-full h-px bg-gray-200"></div>

      <div className="flex items-center gap-3">
        <div className="p-3 bg-orange-500/10 rounded-2xl">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-widest text-orange-600 font-bold opacity-70">বর্তমান সময়</p>
          <p className="text-xl md:text-2xl font-black text-gray-900 tabular-nums">{timeStr}</p>
        </div>
      </div>
    </div>
  );
};

export default BengaliClock;
