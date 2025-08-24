import React, { useState } from 'react';

const LearningResources = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample data for learning resources
  const resources = [
    {
      id: 1,
      title: "Import+Export Basics",
      description: "Step-by-step guide for first-time global buyers.",
      category: "basics"
    },
    {
      id: 2,
      title: "Avoiding Supplier Fraud",
      description: "Learn how to verify suppliers and protect payments with step-by-step checks, trusted verification tools, and secure payment methods.",
      category: "compliance"
    },
    {
      id: 3,
      title: "Customs & Compliance Made Easy",
      description: "Understand HS codes, required documents, and clearance rules to avoid delays, reduce costs, and keep your shipments moving smoothly.",
      category: "compliance"
    },
    {
      id: 4,
      title: "International Shipping Guide",
      description: "Comprehensive guide to shipping logistics, costs, and best practices for global trade.",
      category: "logistics"
    },
    {
      id: 5,
      title: "Global Market Research",
      description: "Learn how to identify and evaluate new international markets for your products.",
      category: "basics"
    },
    {
      id: 6,
      title: "Currency Exchange Strategies",
      description: "Manage foreign exchange risk and optimize international payments.",
      category: "finance"
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'basics', name: 'Basics' },
    { id: 'compliance', name: 'Compliance' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'finance', name: 'Finance' }
  ];

  // Filter resources based on selected category
  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Heading */}
      <h1 className="font-outfit text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Learning Resources
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Category Filter Box */}
        <div className="w-full lg:w-1/4">
          <div className="bg-[#FDE0C0] rounded-lg p-6 shadow-md">
            <h2 className="font-outfit text-xl font-semibold text-gray-800 mb-4">Category Filters</h2>
            
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`w-full text-left py-2 px-4 rounded-md transition-colors ${
                    activeFilter === category.id 
                      ? 'bg-[#E44F39] text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Learning Resource Cards */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="font-outfit text-xl font-semibold text-gray-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="font-poppins text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <button className="font-poppins text-[#E44F39] font-medium hover:underline">
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResources;