import NewsItem from './NewsItem.jsx'
import info from './Info.module.scss';
import { newsData } from '../data/infoData.js';

function Info() {

  return (
    <>
      <div className={info.area}>
        { newsData.map(( news, index ) => (
        <NewsItem
          key = { index }
          date = { news.date }
          title ={ news.title }
          description = { news.description }
          link = { news.link }
        />
        ))}
      </div>
    </>
  )
}

export default Info