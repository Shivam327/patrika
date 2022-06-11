import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: true,
  onLogout: () => {},
  onLogin: () => {},
});

//Will
const admin = {
  username: 'Admin',
  password: 'Admin@123',
};

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = (username, password) => {
    if (username === admin.username && password === admin.password) {
      setIsLoggedIn(true);
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
