import React, { useState } from "react";
import SplitScreen from "./components/SplitScreen";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-full bg-white dark:bg-gray-800 text-black dark:text-white">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Dynamic Form Generator</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Toggle Dark Mode
          </button>
        </header>
        <SplitScreen />
      </div>
    </div>
  );
};

export default App;
