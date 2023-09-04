import category from './Category.module.scss';
import Cassette from './Cassette.jsx';

function Category() {


  return (
    <>
      <div className={category.section}>
        <div className={category.container}>
          <h2 className={category.section_head_title_large}>カテゴリ</h2>
          <div className={category.cassetteArea}>
            <Cassette />
          </div>
        </div>
      </div>
    </>
  )
}

export default Category