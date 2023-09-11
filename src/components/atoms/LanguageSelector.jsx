import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="ja">日本語</option>
      <option value="en">English</option>
      {/* 他の言語も追加できます */}
    </select>
  );
};

export default LanguageSelector;