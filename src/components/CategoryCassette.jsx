import categoryCassette from './CategoryCassette.module.scss';

function CategoryCassette() {
  const iconPath = "./src/assets/icon/"
  const categoryCassetteData = [
    {
      href:'',
      img: 'comic.png',
      title: '漫画',
    },
    {
      href:'',
      img: 'picture.png',
      title: 'イラスト',
    },
    {
      href:'',
      img: 'book.png',
      title: '小説・その他書籍',
    },
    {
      href:'',
      img: 'star.png',
      title: 'グッズ',
    },
    {
      href:'',
      img: 'fashion.png',
      title: 'ファッション',
    },
    {
      href:'',
      img: 'accessories.png',
      title: 'アクセサリー',
    },
    {
      href:'',
      img: 'doll.png',
      title: 'フィギュア',
    },
    {
      href:'',
      img: 'cosplay.png',
      title: 'コスプレ',
    },
    {
      href:'',
      img: 'music.png',
      title: '音楽',
    },
    {
      href:'',
      img: 'game.png',
      title: 'ゲーム',
    },
    {
      href:'',
      img: 'microphone.png',
      title: '音声作品',
    },
    {
      href:'',
      img: 'movie.png',
      title: '映像作品',
    },


  ];

  return (
    <>
      {categoryCassetteData.map((cassette, index) => (
        <div className={categoryCassette.cassetteWrap} key={index}>
          <a href={cassette.href} className={categoryCassette.cassette}>
            <img className={categoryCassette.img} src={iconPath + cassette.img } />
            <div className={categoryCassette.title}>{cassette.title}</div>
          </a>
        </div>
      ))}
    </>
  )
}

export default CategoryCassette