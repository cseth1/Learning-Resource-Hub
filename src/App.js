import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CourseDetailPage = lazy(() => import('./components/CourseDetailPage'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} /> {/* Update to element={} */}
              <Route path="/course/:id" element={<CourseDetailPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

