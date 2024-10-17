import React from 'react';
import { StarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/solid'; // Update import paths

const courses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    image: 'https://via.placeholder.com/150',
    difficulty: 'Beginner',
    rating: 4.7,
    duration: '6 weeks',
    enrollments: 10500,
  },
  {
    id: 2,
    title: 'Advanced React Techniques',
    description: 'Master advanced concepts in React development',
    image: 'https://via.placeholder.com/150',
    difficulty: 'Advanced',
    rating: 4.9,
    duration: '8 weeks',
    enrollments: 5200,
  },
];

function CourseCards() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {course.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 mr-1" />
                    <span>{course.enrollments.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCards;

