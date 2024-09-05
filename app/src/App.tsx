import reactLogo from './assets/img/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/main.css'
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='blackWhiteBg h-screen'>
      <Router>
        <div className='main'>
          <Navbar/>
          <div className='flex items-center flex-col py-10'>
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
      <h1 className='text-center py-6 text-[42px] customBlack dark:text-white blackWhiteText'>Vite + React</h1>
      <div className="flex justify-center">
  <button
    className="w-40 h-10 rounded-full bg-customBlack dark:bg-white text-white dark:text-customBlack shadow-xl dark:shadow-custom transition-all duration-500 ease-in-out"
    onClick={toggleDarkMode}
  >
   {isDarkMode ? 'Apply Light Mode' : 'Apply Dark Mode'}
  </button>
</div>

    </div>
  )
}

export default App
