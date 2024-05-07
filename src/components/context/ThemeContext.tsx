import React, { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);
function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
