import React, { createContext, useContext, useReducer } from 'react';

//create container where data lives
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    //allowed us set the data layer
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children} {/* App child */}
    </StateContext.Provider>
};

//allowed us pull information from the data layer
export const useStateValue = () => useContext(StateContext);