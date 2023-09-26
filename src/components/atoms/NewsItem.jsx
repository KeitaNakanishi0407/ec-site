import styles from './NewsItem.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';

function NewsItem({ date, title, description, link }) {
  const { language } = useLanguage(); 
  const moreInfo = language ==='ja' ? '詳細を見る': 'For more info';

  return (
    <>
      <div className={styles.news_item}>
        <span className={styles.news_date}>{ date }</span>
        <h3 className={styles.news_title}>{ title }</h3>
        <p className={styles.news_description}>{ description }</p>
        {link && <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">{moreInfo}</a>}
      </div>
    </>
  )
}

export default NewsItem
