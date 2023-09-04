import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Info from './components/Info.jsx'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main>
      <Info />
      <App />
    </main>
    <Footer />
  </React.StrictMode>,
)
