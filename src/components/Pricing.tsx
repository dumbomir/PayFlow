import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '2.9%',
    description: 'Perfect for new businesses',
    features: [
      'Up to $50k in processing',
      'Standard support',
      'Basic analytics',
      'Fraud prevention',
      '2-day payouts'
    ]
  },
  {
    name: 'Growth',
    price: '2.5%',
    description: 'For growing businesses',
    features: [
      'Up to $250k in processing',
      'Priority support',
      'Advanced analytics',
      'Enhanced fraud prevention',
      'Next-day payouts',
      'Custom payment flows'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited processing',
      '24/7 dedicated support',
      'Real-time analytics',
      'Advanced fraud prevention',
      'Instant payouts',
      'Custom integration',
      'Volume discounts'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            No hidden fees. No surprises. Just pay for what you use.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                index === 1
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-600 text-white'
                  : 'bg-white'
              } p-8 shadow-lg`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="ml-1 text-xl font-semibold">
                      + 30¢ per transaction
                    </span>
                  )}
                </div>
                <p className="mt-6 text-gray-400">{plan.description}</p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check
                        className={`h-5 w-5 ${
                          index === 1 ? 'text-blue-200' : 'text-blue-600'
                        }`}
                      />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full rounded-lg px-6 py-3 text-center text-sm font-semibold ${
                  index === 1
                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}