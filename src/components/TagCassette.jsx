import tagCassette from './TagCassette.module.scss';

function TagCassette() {
  const tagCassetteData = [
    {
      href:'',
      title: 'オリジナル',
    },
    {
      href:'',
      title: 'イラスト',
    },
    {
      href:'',
      title: '小説・その他書籍',
    },
    {
      href:'',
      title: 'グッズ',
    },
    {
      href:'',
      title: 'ファッション',
    },
    {
      href:'',
      title: 'アクセサリー',
    },
    {
      href:'',
      title: 'フィギュア',
    },
    {
      href:'',
      title: 'コスプレ',
    },
    {
      href:'',
      title: '音楽',
    },
    {
      href:'',
      title: 'ゲーム',
    },
    {
      href:'',
      title: '音声作品',
    },
    {
      href:'',
      title: '映像作品',
    },


  ];

  return (
    <>
      {tagCassetteData.map((tagCassette, index) => (
        <div className={tagCassette.cassetteWrap} key={index}>
          <a href={tagCassette.href} className={tagCassette.cassette}>
            <div className={tagCassette.title}>{tagCassette.title}</div>
          </a>
        </div>
      ))}
    </>
  )
}

export default TagCassette