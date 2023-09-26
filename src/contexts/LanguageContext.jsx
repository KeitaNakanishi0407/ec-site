import React, { createContext, useState, useContext } from "react";

// コンテキストの作成
const LanguageContext = createContext({
  language: 'ja',
  setLanguage: () => {},
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ja");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};