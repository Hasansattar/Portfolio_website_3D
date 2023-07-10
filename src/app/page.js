
"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import Work from '@/components/Work'
import Achievements from '@/components/Achievements'
import Feedback from '@/components/Feedback'
import Contact from '@/components/Contact'
import StarsCanvas from '@/components/canvas/Stars'
import heropattern from "@/assets/herobg.png"
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from 'react'

export default function Home() {
  
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 200,
    });
  }, []);
  return (
   <main>
    <div className='relative z-0 bg-primary'>
      <div className={`bg-hero-pattern bg-cover bg-no-repeat bg-center`} style={{
      backgroundImage: `url(${heropattern.src})`,
      width: '100%',
      height: '100%',
      backgroundRepeat:"no-repeat" ,
      backgroundSize:"cover",
      objectFit:"cover"
      
    }}>
    <Navbar/>
    <Hero />
     
    </div>
    <About />
    <Experience/>
    <Tech/>
    <Work/>
    <Achievements />
    <Feedback/>
    
    <div className='relative z-0'>
      <Contact/>
      <StarsCanvas/>
      </div>
    </div>
   </main>
  )
}
