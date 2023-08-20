import footer from './Footer.module.scss'

function Footer() {
  const iconPath ="./src/assets/icon/"
  const footerContents = [
    {
      id: 1,
      bigTitle: "秘宝館で「売りたい」",
      smallTitle: [
        {text: "作品を出品しよう", href:"#link1"},
        {text: "秘宝館Apps（拡張機能）", href:"#link2"},
        {text: "あんしん秘宝館パック", href:"#link3"},
        {text: "発送代行・倉庫サービス", href:"#link4"},
        {text: "梱包発送ガイド", href:"#link5"},
        {text: "委託販売とは", href:"#link6"},
        {text: "二次創作の著作権に関する取り組み", href:"#link7"},
      ],
    },
    {
      id: 2,
      bigTitle: "秘宝館で「売りたい」",
      smallTitle: [
        {text: "秘宝館とは", href:"#link8"},
        {text: "お買い物ガイド", href:"#link9"},
        {text: "お支払い方法", href:"#link10"},
        {text: "取引の流れ", href:"#link11"},
        {text: "倉庫おまとめ発送", href:"#link12"},
        {text: "BOOTH主催のWeb即売会", href:"#link13"},
      ],
    },
    {
      id: 3,
      bigTitle: "サポート・お問い合わせ",
      smallTitle: [
        {text: "お知らせ", href:"#link14"},
        {text: "よくある質問", href:"#link15"},
        {text: "チャットで質問（24時間対応）", href:"#link16"},
        {text: "BOOTH事務局へのお問い合わせ", href:"#link17"},
      ],
    }
  ];
  const footerSNSContents = [
    {
      id: 1,
      snsTitle: "Twitter",
      href: "https://twitter.com",
      icon: "twitter.png"
    },
    {
      id: 2,
      snsTitle: "pixiv",
      href: "https://www.pixiv.net/",
      icon: "pixiv.png"
    },
  ];

  return (
    <>
      <footer className={footer.footer}>
        <div className={footer.wrap}>
          {footerContents.map((content) =>(
            <nav key={content.id} className={footer.nav}>
              <h3 className={footer.sub_title}>{content.bigTitle}</h3>
              {content.smallTitle.map((title, index) =>(
                <div key={index} className={footer.small_title}>
                  <a className={footer.link} href={title.href}>{title.text}</a>
                </div>
              ))}
            </nav>
          ))}
          <nav className={footer.nav}>
            {footerSNSContents.map((snsContent) => (
              <a key={snsContent.id} href={snsContent.href} className={footer.sns} target="_blank" rel="noopener noreferrer">
                <h3  className={footer.sub_title}>{snsContent.snsTitle}</h3>
                <img className={footer.sns_icon} src={iconPath + snsContent.icon} />
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer