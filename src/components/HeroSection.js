import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const popularTopics = [
  { name: 'Web Development', icon: '🌐' },
  { name: 'Digital Marketing', icon: '📊' },
  { name: 'Data Science', icon: '📈' },
  { name: 'Design', icon: '🎨' },
  { name: 'Business', icon: '💼' },
  { name: 'Personal Development', icon: '🌱' },
];

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What do you want to learn today?</h1>
        <p className="text-xl mb-8">Discover thousands of courses and resources to boost your skills</p>
        
       {/* Search Bar */}
       <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for any topic..."
              className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
           <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
  <MagnifyingGlassIcon className="h-6 w-6" />
</button>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularTopics.map((topic) => (
              <button
                key={topic.name}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-4 transition duration-300"
              >
                <span className="text-2xl mb-2 block">{topic.icon}</span>
                <span className="font-medium">{topic.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

