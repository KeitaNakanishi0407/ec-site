import NewsItem from './NewsItem.jsx'
import info from './Info.module.scss';

function Info() {
  const newsData = [
    {
      date: '2023/08/17',
      title: '新商品の発売！',
      description: '当社の新商品が発売されました。詳細はこちらからご確認ください。',
      link: 'https://example.com/new-product'
    },
    {
      date: '2023/08/15',
      title: 'サービスメンテナンスのお知らせ',
      description: '8月20日にサービスメンテナンスを実施いたします。詳細は以下のリンクよりご確認ください。',
      link: 'https://example.com/maintenance-info'
    },
    { 
      date: '2023/08/10',
      title: '夏季休暇のお知らせ',
      description: '8月15日から8月18日まで夏季休暇をいただきます。その間のお問い合わせは休暇明けに対応いたします。',
      link: null // linkがない場合も考慮
    }
  ];

  return (
    <>
      <div className={info.area}>
        { newsData.map(( news, index ) => (
        <NewsItem
          key = { index }
          date = { news.date }
          title ={ news.title }
          description = { news.description }
          link = { news.link }
        />
        ))}
      </div>
    </>
  )
}

export default Info