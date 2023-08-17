import './Header.css'
import Nav from './Nav.jsx'

function Header() {

  return (
    <>
      <header>
        <nav className='nav'>
          <div>
            <a><img alt="秘宝館" width={'60px'} src="./src/assets/logo.svg" /></a>
          </div>
          <ul className='nav_items'>
            <li className='nav_item'>ログイン</li>
            <li className='nav_item'>秘宝館とは</li>
            <li className='nav_item'>作品を出品しよう</li>
          </ul>
          <Nav />
        </nav>
      </header>
    </>
  )
}

export default Header
