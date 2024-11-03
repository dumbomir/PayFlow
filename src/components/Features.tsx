import React from 'react';
import { Shield, Zap, Globe, CreditCard, BarChart3, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: 'Enterprise-grade security',
    description: 'Bank-level encryption and security protocols to protect every transaction.'
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: 'Lightning-fast processing',
    description: 'Process thousands of transactions per second with minimal latency.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    title: 'Global coverage',
    description: 'Accept payments in 135+ currencies with local payment methods.'
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    title: 'Smart payments',
    description: 'Intelligent routing and automatic retries for higher success rates.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: 'Real-time analytics',
    description: 'Detailed insights and reporting for better business decisions.'
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: 'Fraud prevention',
    description: 'Advanced AI-powered fraud detection and prevention systems.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything you need to accept payments
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A complete payments platform engineered for growth
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative p-8 bg-white rounded-lg border border-gray-200 group-hover:border-transparent transition duration-300">
                <div className="inline-flex items-center justify-center rounded-lg bg-blue-50 p-3">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}