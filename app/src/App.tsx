import reactLogo from './assets/img/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/main.css'
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>
      <Router>
        <div className='main'>
          <Navbar/>
          <div className='flex justify-center py-10'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
      <div className='flex justify-center gap-2'>
        <a href="https://vitejs.dev" target="_blank" className="logo w-full max-w-[245px]">
          <img src={viteLogo} className="logo w-full" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank"className="logo w-full max-w-[245px] animate-spin-react">
          <img src={reactLogo} className="logo react w-full" alt="React logo" />
        </a>
      </div>
      <h1 className='text-center py-6 text-[42px] not-bg-[#ff6600]'>Vite + React</h1>
    </>
  )
}

export default App
