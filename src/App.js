import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseDetailPage from './components/CourseDetailPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/course/:id" component={CourseDetailPage} />
            {/* Add other routes as needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
