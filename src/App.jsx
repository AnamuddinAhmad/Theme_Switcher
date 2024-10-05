import "./App.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/theam";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  let [themeMode, setthemeMode] = useState("dark");  

  function darkTheme() {
    setthemeMode("dark");
  }

  function lightTheme() {
    setthemeMode("light");
  }

  //Actual change in theme
  useEffect(() => {
    let doc = document.querySelector("html");
    doc.classList.remove("dark", "light");
    doc.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap items-center min-h-screen dark:bg-gray-800 dark:border-gray-900">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
