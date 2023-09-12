import NewsItem from '../atoms/NewsItem.jsx'
import info from './Info.module.scss';
import { newsData } from '../../data/infoData.js';
import { useLanguage } from '../../contexts/LanguageContext';

function Info() {
  const { language } = useLanguage(); 

  return (
    <>
      <div className={info.area}>
        { newsData.map(( news, index ) => (
        <NewsItem
          key = { index }
          date = { news.date }
          title ={ news.title[language] }
          description = { news.description[language] }
          link = { news.link }
        />
        ))}
      </div>
    </>
  )
}

export default Info