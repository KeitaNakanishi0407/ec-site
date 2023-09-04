import footer from './Footer.module.scss'
import { footerContents, footerSNSContents } from '../data/footerData.js';

function Footer() {
  const iconPath ="./src/assets/icon/"

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