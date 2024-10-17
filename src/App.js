import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading'; // Import the Loading component

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CourseDetailPage = lazy(() => import('./components/CourseDetailPage'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}> {/* Show loading spinner while routes are being lazy loaded */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/course/:id" component={CourseDetailPage} />
              {/* Add other routes as needed */}
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

