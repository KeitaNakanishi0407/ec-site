import styles from './Section.module.scss';

function Section({title, ContentComponent, moreUrl=false }) {

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>{title && title}</h2>
            { moreUrl && <p className={styles.moreText}><a href={moreUrl}>もっと見る</a></p> }
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