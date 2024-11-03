import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PayFlow
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Developers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Start Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#" className="block px-3 py-2 text-gray-600">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Solutions</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Developers</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Pricing</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg">
              Start Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}