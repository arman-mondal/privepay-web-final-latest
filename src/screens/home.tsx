import Hero from '../components/home/Hero.tsx';
import Motivation from '../components/home/Motivation.tsx';
import Blog from '../components/home/Blog.tsx';
import Footer from '../components/layout/Footer.tsx';

import React from 'react'
import Navbar from '../components/layout/Navbar.tsx';

export default function Home() {
  return (
 
    <div className={`min-h-screen  bg-white`}>

    <Navbar />
        <div className="relative ">
          <div className={`hidden lg:block w-full h-full absolute`}>
            <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
          </div>
          <Hero />
          <Motivation />
        </div>
       
        <Footer />
   </div>
  )
}

