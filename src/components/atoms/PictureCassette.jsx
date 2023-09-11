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
        <a href={data.href}>
          <img className={ thumbnail } src={thumbnailPath + data.thumbnail } />
        </a>
        <div className={styles.genreName}>{data.genreName}</div>
        <div className={styles.recommendTitle}>{data.goodsName}</div>
        <div className={styles.authorArea}>
          <img className={styles.authorIcon} src={authorIconPath + data.authorIcon} />
          <span className={styles.recommendAuthorName}>{data.authorName}</span>
        </div>
        <div className={styles.info}>
          <p className={styles.price}>¥ {data.price}</p>
          <p className={styles.favorite}>★ {data.favorite}</p>
        </div>
      </div>
    ))
}

export default PictureCassette