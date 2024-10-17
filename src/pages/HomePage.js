import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseCards from '../components/CourseCards';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CourseCards />
      {/* Other sections of your homepage */}
    </div>
  );
}

export default HomePage;
