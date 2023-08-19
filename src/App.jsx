import { useState } from 'react'
import test from './App.module.scss'
import { Button } from '@mui/material';
import 'normalize.css';
import Slider from './components/Slider.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className={test.concept_title}>クリエイターによる創作の総合マーケット 秘宝館</h1>
      <Slider />
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
