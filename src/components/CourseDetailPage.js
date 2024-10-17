import React from 'react';
import { 
  ClockIcon, 
  UserIcon, 
  AcademicCapIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/solid';

// Mock course data
const courseData = {
  id: 1,
  title: 'Advanced React Techniques',
  instructor: 'Jane Smith',
  description: 'Master advanced concepts in React development including hooks, context API, and performance optimization.',
  image: 'https://example.com/react-advanced.jpg',
  difficulty: 'Advanced',
  rating: 4.8,
  totalRatings: 1250,
  duration: '8 weeks',
  enrollments: 5200,
  lastUpdated: '2023-05-15',
  language: 'English',
  topics: [
    'Advanced Hooks',
    'Context API',
    'Performance Optimization',
    'Server-Side Rendering',
    'Testing React Applications'
  ],
  learningOutcomes: [
    'Implement complex state management using hooks',
    'Build scalable applications with Context API',
    'Optimize React applications for better performance',
    'Create server-side rendered React applications',
    'Write comprehensive tests for React components'
  ],
  relatedCourses: [
    { id: 2, title: 'React Native for Mobile Development', difficulty: 'Intermediate' },
    { id: 3, title: 'State Management with Redux', difficulty: 'Advanced' },
    { id: 4, title: 'Building a Full-Stack App with React and Node.js', difficulty: 'Advanced' }
  ]
};

function CourseDetailPage() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={courseData.image} alt={courseData.title} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {courseData.difficulty}
              </div>
              <h1 className="mt-1 text-3xl font-bold text-gray-900">{courseData.title}</h1>
              <p className="mt-2 text-gray-600">Instructor: {courseData.instructor}</p>
              <div className="mt-4 flex items-center">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="ml-2 text-gray-600">{courseData.rating} ({courseData.totalRatings} ratings)</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {courseData.duration}
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  {courseData.enrollments.toLocaleString()} students
                </div>
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-2" />
                  {courseData.language}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">About this course</h2>
            <p className="text-gray-600 mb-6">{courseData.description}</p>
            
            <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {courseData.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Topics covered</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {courseData.topics.map((topic, index) => (
                <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {topic}
                </span>
              ))}
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Enroll Now
            </button>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courseData.relatedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.difficulty}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
