import { createContext } from "react";
import React from "react";

export const GiftContext = createContext();


export const GiftProvider = ({ children }) => {
  const surprise ={
    game: "Pubg",
    cricket: "Dhoni",
    name:"Raju"
  };
  return (
    <GiftContext.Provider value={ surprise }>
      {children}
    </GiftContext.Provider>
  );
};


