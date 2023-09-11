import header from './Header.module.scss'
import { headerContents } from '../../data/headerData.js';
import LanguageSelector from '../atoms/LanguageSelector';
function Header() {

  return (
    <>
      <header>
        <nav className={header.nav}>
          <div className={header.nav_left}>
            <a><img alt="秘宝館" width={'60px'} src="./src/assets/logo/logo.svg" /></a>
          </div>
          <div className={header.navRight}>
            <ul className={header.navItems}>
              {headerContents.map((content, index) => (
                <li className={header.navItem} key={index}><a href={content.url}>{content.title}</a></li>
              ))}
              <LanguageSelector />
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
