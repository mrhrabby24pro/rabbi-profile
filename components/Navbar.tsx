
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "হোম", href: "#home" },
    { label: "সম্পর্কে", href: "#about" },
    { label: "প্রজেক্ট", href: "#projects" },
    { label: "যোগাযোগ", href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 h-16 flex items-center shadow-sm">
        <nav className="container-custom w-full flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">রাব্বি হোসেন</h1>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Personal Web Space</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {menuItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-lg">মেনু</span>
            <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1.010 1.010 0 011.414 0L10 8.586l4.293-4.293a1.010 1.010 0 111.414 1.414L11.414 10l4.293 4.293a1.010 1.010 0 01-1.414 1.414L10 11.414l-4.293 4.293a1.010 1.010 0 01-1.414-1.414L8.586 10 4.293 5.707a1.010 1.010 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <ul className="space-y-4">
            {menuItems.map(item => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  className="block text-lg text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10 text-center text-xs text-gray-400">
            Rabbi Hossain © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
