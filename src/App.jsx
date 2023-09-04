import test from './App.module.scss'
import 'normalize.css';
import Slider from './components/Slider.jsx';
import Category from './components/Category.jsx';

function App() {

  return (
    <>
      <h1 className={test.concept_title}>クリエイターによる創作の総合マーケット 秘宝館</h1>
      <Slider />
      <Category />
    </>
  )
}

export default App
