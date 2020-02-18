import React, { useState } from "react";
export const FruitContext = React.createContext();
export const [fruit, setFruit] = useState("Apple");

const Store = ({ children }) => {
  return (
    <div>
      <FruitContext.Provider value={[fruit, setFruit]}>
        {children}
      </FruitContext.Provider>
    </div>
  );
};
export default Store;
