import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  //Its just a placeholder
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
