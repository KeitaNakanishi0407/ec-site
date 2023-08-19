import news from './NewsItem.module.scss';

function NewsItem({ date, title, description, link }) {

  return (
    <>
      <div className={news.news_item}>
        <span className={news.news_date}>{ date }</span>
        <h3 className={news.news_title}>{ title }</h3>
        <p className={news.news_description}>{ description }</p>
        {link && <a href={link} className={news.link} target="_blank" rel="noopener noreferrer">詳細を見る</a>}
      </div>
    </>
  )
}

export default NewsItem
