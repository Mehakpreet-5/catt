
import React from 'react';

export function Price() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      description: "Essential tools for casual travelers.",
      features: [
        "Destination recommendations",
        "5% hotel booking discount",
        "Standard customer support",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      price: "$79",
      description: "Perfect for frequent travelers and explorers.",
      features: [
        "Personalized destination planning",
        "10% hotel booking discount",
        "Priority customer support",
        "Access to travel guides",
      ],
      buttonText: "Get Started",
    },
    {
      name: "VIP",
      price: "$149",
      description: "Luxury travel with exclusive perks.",
      features: [
        "Customized travel itinerary",
        "20% hotel booking discount",
        "24/7 dedicated support",
        "Access to exclusive deals and offers",
        "Free airport lounge access",
      ],
      buttonText: "Join Now",
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center mt-24">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl mx-4 sm:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-gray-900 text-5xl fontt">Travel Plans</h2>
          <p className="mt-4 text-xl text-gray-500">Choose the best plan for your next adventure.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-xl font-medium text-gray-500">/mo</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-500">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Price;
