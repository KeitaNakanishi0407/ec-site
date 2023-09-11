import { useContext } from 'react';
import styles from './Cassette.module.scss';
import CassetteContext from '../../contexts/CassetteContext';

function Cassette() {
  const { type, data } = useContext(CassetteContext);
  const iconPath = "./src/assets/icon/"

  const renderByType = () => {
    switch(type){
      // 「カテゴリ」エリアのカセット
      case "category":
        return data.map((category, index) => (
          <div className={styles.categoryWrap} key={index}>
            <a href={category.href} className={styles.categoryCassette}>
              <img className={styles.categoryImg} src={iconPath + category.img } />
              <div className={styles.categoryTitle}>{category.title}</div>
            </a>
          </div>
        ));
      
      // 「人気のタグ」エリアのカセット
      case "tag":
        return data.map((tag, index) => (
          <div className={styles.tagWrap} key={index}>
            <a href={tag.href} className={styles.tagCassette}>
              <div className={styles.tagTitle}>{tag.title}</div>
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