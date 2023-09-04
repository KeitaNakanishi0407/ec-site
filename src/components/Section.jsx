import styles from './Section.module.scss';

function Section({title, ContentComponent}) {


  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>{title && title}</h2>
          {ContentComponent && <ContentComponent />}
        </div>
      </div>
    </>
  )
}

export default Section