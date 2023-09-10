import app from './App.module.scss'
import 'normalize.css';
import { categoryCassetteData, tagCassetteData } from './data/cassetteData.js';
import { recommendData, mangaData, illustData } from './data/pictureCassetteData.js';
import { moreUrlData, categoryListData } from './data/moreInfoData.js';
import CassetteContext from './contexts/CassetteContext.js';
import PictureCassetteContext from './contexts/PictureCassetteContext.js';
import Slider from './components/Slider.jsx';
import Section from './components/Section.jsx';
import Cassette from './components/Cassette.jsx';
import PictureCassette from'./components/PictureCassette.jsx';

function App() {

  return (
    <>
      <h1 className={app.concept_title}>クリエイターによる創作の総合マーケット 秘宝館</h1>
      <Slider />
      <PictureCassetteContext.Provider value={{ type: "recommend", data: recommendData  }}>
        <Section title="あなたにおすすめの商品" ContentComponent={ PictureCassette } />
      </PictureCassetteContext.Provider>
      <CassetteContext.Provider value={{ type: "category", data: categoryCassetteData }}>
        <Section title="カテゴリ" ContentComponent={ Cassette } />
      </CassetteContext.Provider>
      <CassetteContext.Provider value={{ type: "tag", data: tagCassetteData }}>
        <Section title="人気のタグ" ContentComponent={ Cassette } />
      </CassetteContext.Provider>
      <PictureCassetteContext.Provider value={{ type: "manga", data: mangaData }}>
        <Section title="漫画" ContentComponent={ PictureCassette } moreUrl={moreUrlData.manga} categoryList={categoryListData.manga} />
      </PictureCassetteContext.Provider>
      <PictureCassetteContext.Provider value={{ type: "illust", data: illustData }}>
        <Section title="イラスト" ContentComponent={ PictureCassette } moreUrl={moreUrlData.illust} categoryList={categoryListData.illust} />
      </PictureCassetteContext.Provider>
    </>
  )
}

export default App
