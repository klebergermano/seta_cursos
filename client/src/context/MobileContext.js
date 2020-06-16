import React, { useState, createContext } from "react";
const MobileContext = createContext();

const MobileProvider = ({ children }) => {
  const mobileSize = 560;
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobileSize);

  function updateDimesion() {
    let windowSize = window.innerWidth;
    if (windowSize <= mobileSize) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  window.addEventListener("resize", updateDimesion);
  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

export { MobileProvider, MobileContext };
