import styles from './PictureCassette.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';

function PictureCassette(props) {
  const { language, setLanguage } = useLanguage();
  const { type, pictureData } = props;
  const thumbnailPath = "./assets/thumbnail/",
  authorIconPath = "./assets/authorIcon/";
  const likePop = language === 'ja' ? 'ふぁぼ！' : 'Like it!';
  const currency = language === 'ja' ? '¥' : '$';
  // moduleCSSにおけるclass名の合体
  function combineClasses(baseClass, typeClass) {
    return `${baseClass} ${typeClass}`;
  }
  const cassetteWrap = combineClasses(styles.cassetteWrap, styles[type]);
  const thumbnail = combineClasses(styles.thumbnail, styles[type]);

  return pictureData.map((data, index) => (
    <div className={cassetteWrap} key={index}>
      <a href={data.goodsUrl}>
        <img className={ thumbnail } src={thumbnailPath + data.thumbnail } />
      </a>
      <div className={styles.genreName}><a href={data.genreNameUrl}>{data.genreName[language]}</a></div>
      <div className={styles.goodsName}><a href={data.goodsUrl}>{data.goodsName[language]}</a></div>
      <div className={styles.authorArea}>
        <img className={styles.authorIcon} src={authorIconPath + data.authorIcon} />
        <p className={styles.authorName}><a href={data.authorUrl}>{data.authorName[language]}</a></p>
      </div>
      <div className={styles.info}>
        <p className={styles.price}>{currency} {data.price[language]}</p>
        <p className={styles.favorite}>★ {data.favorite}<span className={styles.popUp}>{ likePop }</span></p>
      </div>
    </div>
  ))
}

export default PictureCassette