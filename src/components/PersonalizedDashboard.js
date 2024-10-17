import React from 'react';
import { 
  ChartBarIcon, 
  ClockIcon, 
  FireIcon, 
  AcademicCapIcon,
  BookOpenIcon
} from '@heroicons/react/solid';

// Mock user data
const userData = {
  name: 'John Doe',
  coursesInProgress: 3,
  coursesCompleted: 5,
  currentStreak: 7,
  totalPoints: 1250,
  recentActivity: [
    { id: 1, title: 'Completed JavaScript Basics', type: 'course', date: '2023-06-15' },
    { id: 2, title: 'Started React Fundamentals', type: 'course', date: '2023-06-14' },
    { id: 3, title: 'Earned "JavaScript Pro" badge', type: 'achievement', date: '2023-06-13' },
  ],
  recommendations: [
    { id: 1, title: 'Advanced React Patterns', difficulty: 'Intermediate' },
    { id: 2, title: 'Node.js for Beginners', difficulty: 'Beginner' },
    { id: 3, title: 'Python Data Structures', difficulty: 'Advanced' },
  ]
};

function ProgressBar({ value, max }) {
  const percentage = (value / max) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

function PersonalizedDashboard() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Welcome back, {userData.name}!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold">Courses in Progress</h3>
            </div>
            <p className="text-3xl font-bold">{userData.coursesInProgress}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold">Courses Completed</h3>
            </div>
            <p className="text-3xl font-bold">{userData.coursesCompleted}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <FireIcon className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-xl font-semibold">Current Streak</h3>
            </div>
            <p className="text-3xl font-bold">{userData.currentStreak} days</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <BookOpenIcon className="h-8 w-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold">Total Points</h3>
            </div>
            <p className="text-3xl font-bold">{userData.totalPoints}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              {userData.recentActivity.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-gray-400 mr-2" />
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Recommended Courses</h3>
            <ul className="space-y-4">
              {userData.recommendations.map((course) => (
                <li key={course.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{course.title}</p>
                    <p className="text-sm text-gray-500">{course.difficulty}</p>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition duration-300">
                    Start
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedDashboard;
