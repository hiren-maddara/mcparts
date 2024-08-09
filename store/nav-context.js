"use client";

import { createContext, useEffect, useState } from "react";

export const navContext = createContext();

export function NavProvider({ children }) {
  const [collapsed, setCollapsed] = useState();
  const [navAlerts, setNavAlerts] = useState({});

//   useEffect(() => {
//     const stored = localStorage.getItem("nav-collapsed");
//     console.log("stored: ", stored)
//     if(stored === 'true') return setCollapsed(true)
//     if (stored === "undefined" || stored === null || stored === undefined) {
//       console.log("setting collapsed and local to false");
//       setCollapsed(false);
//       localStorage.setItem("nav-collapsed", JSON.stringify(false));
//     } else {
//       const parsedStored = JSON.parse(stored);
//       console.log("setting collapsed to value: ", parsedStored);
//       setCollapsed(parsedStored);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('nav-collapsed', JSON.stringify(collapsed));
// }, [collapsed]);

  return (
    <navContext.Provider
      value={{
        nav: { collapsed, setCollapsed },
        alerts: { navAlerts, setNavAlerts },
      }}
    >
      {children}
    </navContext.Provider>
  );
}
