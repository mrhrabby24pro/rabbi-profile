
import React, { useState, useEffect, useMemo } from 'react';

const Hero: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = now.getHours();
    if (hour >= 5 && hour < 11) return "শুভ সকাল";
    if (hour >= 11 && hour < 15) return "শুভ দুপুর";
    if (hour >= 15 && hour < 18) return "শুভ বিকেল";
    if (hour >= 18 && hour < 20) return "শুভ সন্ধ্যা";
    return "শুভ রাত্রি";
  };

  const getBengaliSeason = () => {
    const day = now.getDate();
    const month = now.getMonth() + 1;
    
    // Approximate Bengali Seasons based on Gregorian months
    if ((month === 4 && day >= 14) || month === 5 || (month === 6 && day < 15)) return "গ্রীষ্ম";
    if ((month === 6 && day >= 15) || month === 7 || (month === 8 && day < 15)) return "বর্ষা";
    if ((month === 8 && day >= 15) || month === 9 || (month === 10 && day < 15)) return "শরৎ";
    if ((month === 10 && day >= 15) || month === 11 || (month === 12 && day < 15)) return "হেমন্ত";
    if ((month === 12 && day >= 15) || month === 1 || (month === 2 && day < 14)) return "শীত";
    return "বসন্ত";
  };

  const greeting = getGreeting();
  const season = getBengaliSeason();
  const dayName = now.toLocaleDateString('bn-BD', { weekday: 'long' });
  const enDate = now.toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });

  const themeConfig = useMemo(() => {
    switch (season) {
      case "গ্রীষ্ম": return {
        gradient: "from-orange-200 via-amber-100 to-yellow-50",
        text: "text-orange-950",
        border: "border-orange-300/30",
        accent: "bg-orange-400/10"
      };
      case "বর্ষা": return {
        gradient: "from-blue-200 via-indigo-100 to-slate-50",
        text: "text-indigo-950",
        border: "border-blue-300/30",
        accent: "bg-indigo-400/10"
      };
      case "শরৎ": return {
        gradient: "from-sky-300 via-blue-100 to-white",
        text: "text-sky-900",
        border: "border-sky-200/40",
        accent: "bg-sky-400/10"
      };
      case "হেমন্ত": return {
        gradient: "from-yellow-200 via-orange-100 to-amber-50",
        text: "text-amber-900",
        border: "border-yellow-300/30",
        accent: "bg-yellow-400/10"
      };
      case "শীত": return {
        gradient: "from-slate-200 via-blue-50 to-white",
        text: "text-slate-800",
        border: "border-slate-300/30",
        accent: "bg-slate-400/10"
      };
      case "বসন্ত": return {
        gradient: "from-emerald-100 via-green-50 to-lime-50",
        text: "text-emerald-950",
        border: "border-emerald-300/30",
        accent: "bg-emerald-400/10"
      };
      default: return {
        gradient: "from-gray-100 to-white",
        text: "text-gray-900",
        border: "border-gray-200",
        accent: "bg-gray-400/10"
      };
    }
  }, [season]);

  // Memoize particles to prevent flickering on every second update
  const particles = useMemo(() => {
    return {
      rain: [...Array(30)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${0.6 + Math.random() * 0.4}s`
      })),
      snow: [...Array(25)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        size: `${Math.random() * 6 + 3}px`
      })),
      petals: [...Array(12)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        size: `${Math.random() * 15 + 8}px`
      })),
      leaves: [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 9}s`
      }))
    };
  }, []);

  const renderSeasonalAnimation = () => {
    switch (season) {
      case "বর্ষা":
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            {particles.rain.map((p) => (
              <div 
                key={p.id} 
                className="rain-drop" 
                style={{ left: p.left, animationDelay: p.delay, animationDuration: p.duration }}
              ></div>
            ))}
          </div>
        );
      case "শীত":
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70">
            {particles.snow.map((p) => (
              <div 
                key={p.id} 
                className="snow-flake" 
                style={{ left: p.left, animationDelay: p.delay, width: p.size, height: p.size }}
              ></div>
            ))}
          </div>
        );
      case "বসন্ত":
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.petals.map((p) => (
              <div 
                key={p.id} 
                className="flower-petal" 
                style={{ left: p.left, animationDelay: p.delay, fontSize: p.size }}
              >🌸</div>
            ))}
          </div>
        );
      case "গ্রীষ্ম":
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px] animate-pulse"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-orange-400/5 to-transparent animate-heat-shimmer"></div>
          </div>
        );
      case "শরৎ":
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="cloud absolute top-8 left-[-20%] w-32 h-12 bg-white/60 blur-xl rounded-full animate-cloud-move"></div>
             <div className="cloud absolute top-40 left-[-40%] w-48 h-16 bg-white/40 blur-2xl rounded-full animate-cloud-move" style={{ animationDelay: '8s' }}></div>
          </div>
        );
      case "হেমন্ত":
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            {particles.leaves.map((p) => (
              <div 
                key={p.id} 
                className="golden-leaf" 
                style={{ left: p.left, animationDelay: p.delay }}
              >🍂</div>
            ))}
          </div>
        );
      default: return null;
    }
  };

  return (
    <section id="home" className="pt-6 pb-10 flex items-center justify-center px-4 bg-gray-50/50">
      <div className="w-full max-w-4xl">
        <div className={`relative aspect-video w-full rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-2 transition-all duration-1000 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-gradient-to-br ${themeConfig.gradient} ${themeConfig.text} ${themeConfig.border}`}>
          
          {/* Seasonal Animation Layer */}
          {renderSeasonalAnimation()}

          <div className="relative z-10 text-center space-y-4 md:space-y-6 animate-premium-entry">
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                স্বাগতম! <span className="opacity-70 font-extrabold">{greeting}</span>
              </h1>
              
              <div className="h-0.5 w-16 md:w-24 bg-current opacity-20 mx-auto rounded-full"></div>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold opacity-90 leading-relaxed">
                  আজ <span className="bg-white/50 backdrop-blur-sm px-4 py-1 rounded-xl shadow-sm border border-white/40">{enDate}</span> তারিখ, <span className="font-black underline decoration-2 underline-offset-4 decoration-current/10">{dayName}</span>।
                </p>
                <div className="inline-block">
                  <p className="text-sm md:text-xl font-black opacity-60 tracking-[0.2em] uppercase">
                    এখন <span className={`italic px-6 py-2 rounded-full backdrop-blur-md shadow-inner border border-white/20 ${themeConfig.accent}`}>{season}কাল</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2">
              <span className="flex h-1.5 w-1.5 rounded-full bg-current animate-pulse opacity-40"></span>
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Seasonal Dashboard Sync</p>
            </div>
          </div>

          {/* Artistic Accents */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-current opacity-[0.01] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-current opacity-[0.02] rounded-full blur-3xl"></div>
        </div>
      </div>

      <style>{`
        @keyframes premium-entry {
          0% { opacity: 0; transform: translateY(25px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-premium-entry { 
          animation: premium-entry 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards; 
        }

        /* Rain Animation */
        .rain-drop {
          position: absolute;
          top: -20px;
          width: 1.5px;
          height: 15px;
          background: currentColor;
          animation: rain linear infinite;
        }
        @keyframes rain {
          to { transform: translateY(100vh) translateX(10px); }
        }

        /* Snow Animation */
        .snow-flake {
          position: absolute;
          top: -20px;
          background: white;
          border-radius: 50%;
          animation: snow linear infinite;
        }
        @keyframes snow {
          0% { transform: translateY(0) translateX(0); }
          100% { transform: translateY(100vh) translateX(20px) rotate(360deg); }
        }

        /* Flower Petal Animation */
        .flower-petal {
          position: absolute;
          top: -30px;
          animation: petal-fall linear infinite;
          opacity: 0.7;
        }
        @keyframes petal-fall {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(100vh) rotate(540deg) translateX(40px); }
        }

        /* Heat Shimmer */
        @keyframes heat-shimmer {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        /* Cloud Movement */
        @keyframes cloud-move {
          from { left: -40%; }
          to { left: 120%; }
        }
        .animate-cloud-move {
          animation: cloud-move 25s linear infinite;
        }

        /* Golden Leaf */
        .golden-leaf {
          position: absolute;
          top: -30px;
          animation: leaf-fall linear infinite;
        }
        @keyframes leaf-fall {
          0% { transform: translateY(0) rotate(0); }
          100% { transform: translateY(100vh) rotate(240deg) translateX(-30px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
