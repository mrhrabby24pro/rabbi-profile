
import React, { useState, useRef, useEffect } from 'react';

interface Track {
  file: File;
  url: string;
  name: string;
}

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Added explicit File type to resolve 'unknown' inference errors
      const newFiles = Array.from(e.target.files).map((file: File) => ({
        file,
        url: URL.createObjectURL(file),
        name: file.name.replace(/\.[^/.]+$/, "") // Remove extension
      }));
      setPlaylist(prev => [...prev, ...newFiles]);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playTrack = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const handleNext = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setIsPlaying(true);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(playlist.length - 1);
    }
    setIsPlaying(true);
  };

  const onTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = (Number(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress(Number(e.target.value));
    }
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.error("Playback error:", err));
    }
  }, [currentIndex, isPlaying]);

  return (
    <section id="music" className="py-20 bg-gray-50/50">
      <div className="container-custom">
        <h3 className="text-2xl font-bold mb-10 border-l-4 border-purple-600 pl-4">মিউজিক প্লেয়ার</h3>
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Player UI */}
          <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                <svg className={`w-16 h-16 text-purple-600 ${isPlaying ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-800 line-clamp-1">
                {playlist.length > 0 ? playlist[currentIndex].name : 'কোনো গান লোড করা নেই'}
              </h4>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">Local Storage Player</p>
            </div>

            <audio 
              ref={audioRef}
              src={playlist.length > 0 ? playlist[currentIndex].url : ''}
              onTimeUpdate={onTimeUpdate}
              onEnded={handleNext}
            />

            <div className="space-y-6">
              <input 
                type="range" 
                value={progress} 
                onChange={handleSeek}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />

              <div className="flex items-center justify-center gap-8">
                <button onClick={handlePrev} className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.445 14.832A1 1 0 0010 14V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4zM16.445 14.832A1 1 0 0018 14V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                  </svg>
                </button>

                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 hover:scale-110 active:scale-95 transition-all"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                <button onClick={handleNext} className="text-gray-400 hover:text-purple-600 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4zM11.555 5.168A1 1 0 0010 6v8a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4z" />
                  </svg>
                </button>
              </div>

              <div className="pt-4 border-t border-gray-50">
                <label className="flex flex-col items-center justify-center w-full p-4 border-2 border-dashed border-gray-200 rounded-2xl hover:bg-purple-50 hover:border-purple-200 cursor-pointer transition-all group/btn">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400 group-hover/btn:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-sm font-bold text-gray-500 group-hover/btn:text-purple-600">গান যোগ করুন</span>
                  </div>
                  <input type="file" multiple accept="audio/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            </div>
          </div>

          {/* Playlist UI */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-2 px-2">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">প্লেলিস্ট ({playlist.length})</span>
              {playlist.length > 0 && (
                <button 
                  onClick={() => { setPlaylist([]); setIsPlaying(false); }}
                  className="text-[10px] font-bold text-red-400 hover:text-red-600 uppercase"
                >
                  সব মুছুন
                </button>
              )}
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden max-h-[500px] overflow-y-auto custom-scrollbar">
              {playlist.length > 0 ? (
                <div className="divide-y divide-gray-50">
                  {playlist.map((track, index) => (
                    <button
                      key={index}
                      onClick={() => playTrack(index)}
                      className={`w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-all ${currentIndex === index ? 'bg-purple-50/50' : ''}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${currentIndex === index ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {currentIndex === index && isPlaying ? (
                          <div className="flex gap-0.5 items-end h-3">
                            <div className="w-1 bg-white animate-music-bar-1"></div>
                            <div className="w-1 bg-white animate-music-bar-2"></div>
                            <div className="w-1 bg-white animate-music-bar-3"></div>
                          </div>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-grow">
                        <p className={`font-bold text-sm ${currentIndex === index ? 'text-purple-600' : 'text-gray-700'}`}>{track.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase font-bold mt-0.5">অডিও ফাইল</p>
                      </div>
                      <div className="text-gray-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-20 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-gray-200">
                    <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 font-medium text-sm">কোনো গান সিলেক্ট করা হয়নি</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes music-bar-1 { 0%, 100% { height: 4px; } 50% { height: 12px; } }
        @keyframes music-bar-2 { 0%, 100% { height: 12px; } 50% { height: 6px; } }
        @keyframes music-bar-3 { 0%, 100% { height: 8px; } 50% { height: 14px; } }
        .animate-music-bar-1 { animation: music-bar-1 0.6s infinite ease-in-out; }
        .animate-music-bar-2 { animation: music-bar-2 0.8s infinite ease-in-out; }
        .animate-music-bar-3 { animation: music-bar-3 0.7s infinite ease-in-out; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
      `}</style>
    </section>
  );
};

export default MusicPlayer;
