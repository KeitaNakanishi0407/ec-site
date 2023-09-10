import { useContext } from 'react';
import styles from './PictureCassette.module.scss';
import PictureCassetteContext from '../contexts/PictureCassetteContext';

function PictureCassette() {
  const { type, data } = useContext(PictureCassetteContext);
  const thumbnailPath = "./src/assets/thumbnail/",
  authorIconPath = "./src/assets/authorIcon/";
  const renderByType = () => {
    switch(type){
      // 「あなたにおすすめの商品」エリアのカセット
      case "recommend":
        return data.map((recommend, index) => (
          <div className={styles.recommendCassetteWrap} key={index}>
            <a href={recommend.href} className={styles.recommendCassette}>
              <img className={styles.recommendThumbnail} src={thumbnailPath + recommend.thumbnail } />
            </a>
            <div className={styles.recommendTitle}>{recommend.genreName}</div>
            <div className={styles.recommendTitle}>{recommend.goodsName}</div>
            <div className={styles.recommendAuthorArea}>
              <img className={styles.recommendAuthorIcon} src={authorIconPath + recommend.authorIcon} />
              <span className={styles.recommendAuthorName}>{recommend.authorName}</span>
            </div>
            <div className={styles.recommendInfo}>
              <p>¥ {recommend.price}</p>
              <p>★ {recommend.favorite}</p>
            </div>
          </div>
        ));
      
      // 「漫画」「イラスト」エリアのカセット
      case "manga":
      case "illust":
        return data.map((manga, index) => (
          <div className={styles.mangaCassetteWrap} key={index}>
            <a href={manga.href} className={styles.recommendCassette}>
              <img className={styles.mangaThumbnail} src={thumbnailPath + manga.thumbnail } />
            </a>
            <div className={styles.recommendTitle}>{manga.genreName}</div>
            <div className={styles.recommendTitle}>{manga.goodsName}</div>
            <div className={styles.recommendAuthorArea}>
              <img className={styles.recommendAuthorIcon} src={authorIconPath + manga.authorIcon} />
              <span className={styles.recommendAuthorName}>{manga.authorName}</span>
            </div>
            <div className={styles.recommendInfo}>
              <p>¥ {manga.price}</p>
              <p>★ {manga.favorite}</p>
            </div>
          </div>
        ));
    }
  };

  return (
    <>
      { renderByType() }
    </>
  )
}

export default PictureCassette