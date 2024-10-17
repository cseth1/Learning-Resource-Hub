import React from 'react';
import { StarIcon, ClockIcon, UserIcon } from '@heroicons/react/solid';

const courses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    image: 'https://example.com/web-dev.jpg',
    difficulty: 'Beginner',
    rating: 4.7,
    duration: '6 weeks',
    enrollments: 10500,
  },
  {
    id: 2,
    title: 'Advanced React Techniques',
    description: 'Master advanced concepts in React development',
    image: 'https://example.com/react.jpg',
    difficulty: 'Advanced',
    rating: 4.9,
    duration: '8 weeks',
    enrollments: 5200,
  },
  // Add more course objects as needed
];

function DifficultyBadge({ difficulty }) {
  const colors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <DifficultyBadge difficulty={course.difficulty} />
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
  );
}

function CourseCards() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseCards;
