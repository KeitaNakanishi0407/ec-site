import styles from './Section.module.scss';

function Section({title, ContentComponent, moreUrl=false, categoryList=false}) {

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>{title && title}</h2>
          { moreUrl && <p className={styles.moreText}><a href={moreUrl}>もっと見る</a></p> }
          <div className={styles.container}>
            <div className={styles.cassetteArea}>
            {ContentComponent && <ContentComponent />}
            </div>
            {categoryList && categoryList.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Section