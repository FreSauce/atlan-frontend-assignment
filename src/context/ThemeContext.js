import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme: () => setIsDarkTheme(!isDarkTheme),
      }}
    >
      <div className={isDarkTheme ? "dark" : ""}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => React.useContext(ThemeContext);

export { useThemeContext };

export default ThemeContextProvider;
