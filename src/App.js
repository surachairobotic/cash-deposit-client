import React, { useState } from 'react';
import Login from './components/Login';
import MemberOperation from './components/MemberOperation';

const App = () => {
  // State to keep track of user authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to set authentication status
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="container mx-auto">
      {isAuthenticated ? (
        // If authenticated, show member operations
        <MemberOperation />
      ) : (
        // If not authenticated, show login form
        <Login onAuthenticate={handleAuthentication} />
      )}
    </div>
  );
};

export default App;

