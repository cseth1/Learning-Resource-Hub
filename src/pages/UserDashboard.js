import React from 'react';
import Header from '../components/Header';
import PersonalizedDashboard from '../components/PersonalizedDashboard';

function UserDashboard() {
  return (
    <div>
      <Header />
      <PersonalizedDashboard />
      {/* Other sections of your user dashboard */}
    </div>
  );
}

export default UserDashboard;
