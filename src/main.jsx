import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import PreLoader from './components/PreLoader.jsx'
import 'remixicon/fonts/remixicon.css'
import 'animate.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <>
    <PreLoader />  
    <header>
      <Navbar />
    </header>
    <div className='container mx-auto px-4'>
      <App />
    </div>
  </>
  </StrictMode>,
)
