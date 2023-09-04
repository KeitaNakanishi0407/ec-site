import { useState } from 'react';
import app from './App.module.scss'
import 'normalize.css';
import { categoryCassetteData, tagCassetteData } from './data/data.js';
import CassetteDataContext from './contexts/CassetteDataContext.js'
import Slider from './components/Slider.jsx';
import Section from './components/Section.jsx';
import Category from './components/Category.jsx';

function App() {

  return (
    <>
      <h1 className={app.concept_title}>クリエイターによる創作の総合マーケット 秘宝館</h1>
      <Slider />
      <CassetteDataContext.Provider value={{ type: "category", data: categoryCassetteData }}>
        <Section title="カテゴリ" ContentComponent={ Category } />
      </CassetteDataContext.Provider>
      <CassetteDataContext.Provider value={{ type: "tag", data: tagCassetteData }}>
        <Section title="人気のタグ" ContentComponent={ Category } />
      </CassetteDataContext.Provider>
    </>
  )
}

export default App
