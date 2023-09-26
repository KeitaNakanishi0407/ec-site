import React from 'react';
import styles from './LanguageSelector.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)} className={styles.select}>
      <option value="ja">日本語</option>
      <option value="en">English</option>
      {/* 他の言語も追加可能 */}
    </select>
  );
};

export default LanguageSelector;