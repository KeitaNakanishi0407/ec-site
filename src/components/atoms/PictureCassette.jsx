import styles from './PictureCassette.module.scss';

function PictureCassette(props) {
  const { type, pictureData } = props;
  const thumbnailPath = "./src/assets/thumbnail/",
  authorIconPath = "./src/assets/authorIcon/";
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
        <div className={styles.genreName}><a href={data.genreNameUrl}>{data.genreName}</a></div>
        <div className={styles.goodsName}><a href={data.goodsUrl}>{data.goodsName}</a></div>
        <div className={styles.authorArea}>
          <img className={styles.authorIcon} src={authorIconPath + data.authorIcon} />
          <p className={styles.authorName}><a href={data.authorUrl}>{data.authorName}</a></p>
        </div>
        <div className={styles.info}>
          <p className={styles.price}>¥ {data.price}</p>
          <p className={styles.favorite}>★ {data.favorite}<span className={styles.popUp}>ふぁぼ！</span></p>
        </div>
      </div>
    ))
}

export default PictureCassette