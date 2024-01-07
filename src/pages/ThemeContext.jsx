import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function ThemeProvider({ children }) {
  const [activeSide, setActiveSide] = useState(false);

  return (
    <ThemeContext.Provider value={activeSide}>
      <ThemeUpdateContext.Provider value={setActiveSide}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
