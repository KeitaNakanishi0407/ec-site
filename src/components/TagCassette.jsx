import tagCassette from './TagCassette.module.scss';

function TagCassette() {
  return (
    <>
      {tagCassetteData.map((cassette, index) => (
        <div className={tagCassette.cassetteWrap} key={index}>
          <a href={cassette.href} className={tagCassette.cassette}>
            <div className={tagCassette.title}>{cassette.title}</div>
          </a>
        </div>
      ))}
    </>
  )
}

export default TagCassette