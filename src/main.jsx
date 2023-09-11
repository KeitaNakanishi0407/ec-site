import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/layouts/Header.jsx'
import Info from './components/molecules/Info.jsx'
import App from './App.jsx'
import Footer from './components/layouts/Footer.jsx'
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
