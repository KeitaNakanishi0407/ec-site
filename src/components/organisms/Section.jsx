import styles from './Section.module.scss';
import { useLanguage } from '../../contexts/LanguageContext';

function Section({title, ContentComponent, moreUrl=false }) {
  const { language, setLanguage } = useLanguage();
  const moreInfo = language ==='ja' ? 'もっと見る': 'See more';

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>{title && title}</h2>
            { moreUrl && <p className={styles.moreText}><a href={moreUrl}>{ moreInfo }</a></p> }
          </div>

          <div className={styles.container}>
            <div className={styles.cassetteArea}>
            {ContentComponent && <ContentComponent />}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Section