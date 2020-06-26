import React, { useState, createContext } from "react";
const MobileContext = createContext();

const MobileProvider = ({ children }) => {
  const maxMobileSize = 560;
  const [isMobile, setIsMobile] = useState(window.innerWidth < maxMobileSize);
  const [mobileSize, setMobileSize] = useState(() => {
    return 500;
  });
  function debounce(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100, event);
    };
  }

  window.addEventListener(
    "resize",
    debounce(function (e) {
      updateDimesion();
    })
  );

  const mobileInfo = {
    isMobile,
    mobileSize,
  };
  function updateDimesion() {
    let windowSize = window.innerWidth;
    if (windowSize <= maxMobileSize) {
      if (!isMobile) {
        setIsMobile(true);
      } else {
      }
    } else {
      if (isMobile) {
        setIsMobile(false);
      }
    }
  }

  return (
    <MobileContext.Provider value={mobileInfo}>
      {children}
    </MobileContext.Provider>
  );
};

export { MobileProvider, MobileContext };
