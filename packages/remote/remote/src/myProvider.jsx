import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
};

export const useShareContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useShareContext must be wrapped inside the MyProvider");
  }

  return context;
};
