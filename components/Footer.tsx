
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-auto border-t border-gray-800">
      <div className="container-custom px-6 text-center">
        <h2 className="text-white font-bold text-lg mb-2">রাব্বি হোসেন</h2>
        <p className="text-sm mb-6">শিখুন, শেয়ার করুন এবং বেড়ে উঠুন।</p>
        <div className="flex justify-center space-x-4 mb-6">
           <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
           <span className="hover:text-white cursor-pointer transition-colors">Github</span>
           <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
        </div>
        <div className="text-xs border-t border-gray-800 pt-6">
          © {currentYear} রাব্বি হোসেন | সর্বস্বত্ব সংরক্ষিত
        </div>
      </div>
    </footer>
  );
};

export default Footer;
