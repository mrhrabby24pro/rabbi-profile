
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-16 flex items-center shadow-sm">
      <nav className="container-custom w-full flex justify-between items-center px-6">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-gray-900 leading-tight">রাব্বি হোসেন</h1>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Personal Web Space</span>
        </div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition-colors">হোম</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">সম্পর্কে</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition-colors">প্রজেক্ট</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">যোগাযোগ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
