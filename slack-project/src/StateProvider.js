import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Access user anywhere in the app
// Push the user into the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children represents our entire app */}
    {children}
  </StateContext.Provider>
);

// Access info from the data layer
export const useStateValue = () => useContext(StateContext);
