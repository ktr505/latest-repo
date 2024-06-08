import React, { useState } from "react";
import { LanguageProvider } from "./LanguageContext";
import Clock from "./Clock";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <LanguageProvider>
      <div>
        <h1>Language Selector:</h1>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
        <Clock />
      </div>
    </LanguageProvider>
  );
};

export default App;
