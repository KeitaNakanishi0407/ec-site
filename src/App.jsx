import app from './App.module.scss'
import 'normalize.css';
import { categoryCassetteData, tagCassetteData } from './data/cassetteData.js';
import { recommendData, mangaData, illustData } from './data/pictureCassetteData.js';
import { moreUrlData } from './data/moreInfoData.js';
import Slider from './components/organisms/Slider.jsx';
import Section from './components/organisms/Section.jsx';
import Cassette from './components/atoms/Cassette.jsx';
import PictureCassette from'./components/atoms/PictureCassette.jsx';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { language } = useLanguage(); 
  const conceptTitle = language === "ja" ? 'クリエイターによる創作の総合マーケット 秘宝館' : 'Comprehensive Creative Market by Creators: Secret Treasure Hall';
  const SectionTitle = {
    recommend: {
      ja: 'あなたにおすすめの商品',
      en: 'Recommended Products for You'
    },
    category: {
      ja: 'カテゴリ',
      en: 'Category'
    },
    tag: {
      ja: '人気のタグ',
      en: "Popular Tags"
    },
    comic: {
      ja: '漫画',
      en: 'comic'
    },
    illust: {
      ja: 'イラスト',
      en: 'Illustrations'
    }
  }

  return (
    <>
      <h1 className={app.concept_title}>{ conceptTitle }</h1>
      <Slider />
      <Section title={SectionTitle.recommend[language]} ContentComponent={ () => <PictureCassette type="recommend" pictureData={recommendData} /> } />
      <Section title={SectionTitle.category[language]} ContentComponent={ () => <Cassette type="category" cassetteData={categoryCassetteData} />} />
      <Section title={SectionTitle.tag[language]} ContentComponent={ () => <Cassette type="tag" cassetteData={tagCassetteData} />} />
      <Section title={SectionTitle.comic[language]} ContentComponent={ () => <PictureCassette type="manga" pictureData={mangaData} />} moreUrl={moreUrlData.manga} />
      <Section title={SectionTitle.illust[language]} ContentComponent={ () => <PictureCassette type="illust" pictureData={illustData} />} moreUrl={moreUrlData.illust} />
    </>
  )
}

export default App
