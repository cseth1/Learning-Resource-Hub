import React from 'react';
import HeroSection from '../components/HeroSection';
import CourseCards from '../components/CourseCards';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <CourseCards />
      {/* Other sections of your homepage */}
    </div>
  );
}

export default HomePage;

