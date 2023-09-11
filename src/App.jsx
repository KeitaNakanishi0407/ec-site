import app from './App.module.scss'
import 'normalize.css';
import { categoryCassetteData, tagCassetteData } from './data/cassetteData.js';
import { recommendData, mangaData, illustData } from './data/pictureCassetteData.js';
import { moreUrlData } from './data/moreInfoData.js';
import Slider from './components/organisms/Slider.jsx';
import Section from './components/organisms/Section.jsx';
import Cassette from './components/atoms/Cassette.jsx';
import PictureCassette from'./components/atoms/PictureCassette.jsx';

function App() {

  return (
    <>
      <h1 className={app.concept_title}>クリエイターによる創作の総合マーケット 秘宝館</h1>
      <Slider />
      <Section title="あなたにおすすめの商品" ContentComponent={ () => <PictureCassette type="recommend" data={recommendData} /> } />
      <Section title="カテゴリ" ContentComponent={ () => <Cassette type="category" data={categoryCassetteData} />} />
      <Section title="人気のタグ" ContentComponent={ () => <Cassette type="tag" data={tagCassetteData} />} />
      <Section title="漫画" ContentComponent={ () => <PictureCassette type="manga" data={mangaData} />} moreUrl={moreUrlData.manga} />
      <Section title="イラスト" ContentComponent={ () => <PictureCassette type="illust" data={illustData} />} moreUrl={moreUrlData.illust} />
    </>
  )
}

export default App
