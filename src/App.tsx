import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.tsx';
import Hero from './components/home/Hero.tsx';
import Motivation from './components/home/Motivation.tsx';
import Blog from './components/home/Blog.tsx';
import Footer from './components/layout/Footer.tsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import Home from './screens/home.tsx';
import Terms from './components/terms/Text.tsx';
import Contact from './components/Contact/Contact.tsx';
function App() {
  const width = window.innerWidth;
  console.log(width);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<>
        <Navbar />
        <Contact />
        <Footer />
        </>} />
        <Route path='/careers' element={<>
        <Navbar />
        <Contact />
        <Footer />
        </>} />
        <Route path='/terms' element={<>
        <Navbar />
        <Terms />
        <Footer />
        </>} />
         <Route path='/privacy' element={<>
        <Navbar />
        <Terms />
        <Footer />
        </>} />

      </Routes>
    </Router>
    </>
    
   
  );
}

export default App;
