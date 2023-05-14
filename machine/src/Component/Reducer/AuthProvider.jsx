import React, { createContext, useReducer } from "react";

export const AuthContax = createContext();

const initialState = { user: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: action.payload };
    case "logout":
      return { user: "" };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (userData) => {
    dispatch({
      type: "login",
      payload: userData,
    });
  };

  const logout = (userData) => {
    dispatch({
      type: "logout",
    });
  };

  return <>
    <AuthContax.Provider value={{state, login,logout}}>
        {children}
    </AuthContax.Provider>
  </>;
};

export default AuthProvider;
