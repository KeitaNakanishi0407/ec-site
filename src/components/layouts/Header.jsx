import header from './Header.module.scss'

function Header() {

  return (
    <>
      <header>
        <nav className={header.nav}>
          <div className={header.nav_left}>
            <a><img alt="秘宝館" width={'60px'} src="./src/assets/logo/logo.svg" /></a>
          </div>
          <div className={header.nav_right}>
            <ul className={header.nav_items}>
              <li className={header.nav_item}>ログイン</li>
              <li className={header.nav_item}>秘宝館とは</li>
              <li className={header.nav_item}>作品を出品しよう</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
