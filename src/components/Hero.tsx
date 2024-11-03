import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
            <span className="block">Payments infrastructure</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              for the modern web
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Build and scale your business with a powerful payment platform that handles everything from transactions to fraud prevention.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Start Integration <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg border border-gray-200 hover:border-gray-400 transition-colors">
              Contact Sales
            </button>
          </div>
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {['Acme Corp', 'GlobalTech', 'FutureCo', 'InnovateX'].map((company) => (
                <span key={company} className="text-xl font-semibold text-gray-400">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}