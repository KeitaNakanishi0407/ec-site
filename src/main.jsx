import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import App from './App.jsx'
import List from './List.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <List />
    <Footer />
  </React.StrictMode>,
)
