import React, { useContext, createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

// services
import authService from 'services/authServices';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const history = useHistory();
  const [isUser, setIsUser] = useState(authService.getStorage('userId') || null);

  function handleSetUser(userId) {
    // set user into session storage
    authService.setStorage('userId', userId)
    
    // set state user
    setIsUser(userId);

    // navigate to Dashboard
    if(userId) {
      history.push('/')
    }
  }

  return (
    <AppContext.Provider
      value={{ 
        isUser,
        handleSetUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useStateApp = () => useContext(AppContext);