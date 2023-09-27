import styles from './Cassette.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';

function Cassette(props) {
  const { type, cassetteData } = props;
  const iconPath = "./assets/icon/"
  const { language } = useLanguage(); 
  const renderByType = () => {
    switch(type){
      // 「カテゴリ」エリアのカセット
      case "category":
        return cassetteData.map((category, index) => (
          <div className={styles.categoryWrap} key={index}>
            <a href={category.href} className={styles.categoryCassette}>
              <img className={styles.categoryImg} src={iconPath + category.img } />
              <div className={styles.categoryTitle}>{category.title[language]}</div>
            </a>
          </div>
        ));
      // 「人気のタグ」エリアのカセット
      case "tag":
        return cassetteData.map((tag, index) => (
          <div className={styles.tagWrap} key={index}>
            <a href={tag.href} className={styles.tagCassette}>
              <div className={styles.tagTitle}>{tag.title[language]}</div>
            </a>
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

export default Cassette