import React, { useState, useEffect } from 'react';

const LogoutTimer = ({ timeoutInMinutes }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    let logoutTimer;
    
   
    const handleLogout = () => {
      setIsLoggedIn(false);
      
    };

   
    const setLogoutTimer = () => {
      logoutTimer = setTimeout(() => {
        handleLogout();
      }, timeoutInMinutes * 60 * 1000); 
    };

   
    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer);
      setLogoutTimer();
    };

    
    const addEventListeners = () => {
      window.addEventListener('mousemove', resetLogoutTimer);
      window.addEventListener('keypress', resetLogoutTimer);
    };

    return () => {
      clearTimeout(logoutTimer);
      window.removeEventListener('mousemove', resetLogoutTimer);
      window.removeEventListener('keypress', resetLogoutTimer);
    };

    
    setLogoutTimer();
    addEventListeners();
  }, [timeoutInMinutes]);

  return (
    <div>
      {isLoggedIn ? (
        <p>User is logged in</p>
      ) : (
        <p>User has been logged out due to inactivity</p>
      )}
    </div>
  );
};

export default LogoutTimer;
