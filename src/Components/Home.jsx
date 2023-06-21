import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import SideMenu from './SideMenu'
import heroImg from '../assets/hero-img.png'
import TsParticles from './TsParticles'

export const Home = ({darkMode, setDarkMode}) => {
    
    // console.log(darkMode)
  return (
    <div className=' w-full mt-12 z-20'>
        {/* <TsParticles/> */}
        <div className='w-full md:fle z-30'>
            {/* <SideMenu darkMode={darkMode} setDarkMode={setDarkMode}/> */}
            <div className='md:absolute md:left-64 flex flex-col'>
                <img src={heroImg} alt='hero-img' className='h-60 w-80 '/>
                <div className='flex flex-col mt-2'>
                    <p className='text-slate-900 text-xl font-semibold dark:text-purple-100 '>Hi there,
                        <span className='animate-waving-hand'> 👋</span>
                    </p>
                    <p className='text-black dark:text-purple-300 mt-3 text-lg'>my name is </p>
                    <h1 className='text-3xl  text-purple-800 dark:text-purple-500 font-bold'>EMMANUEL AMOO</h1>
                </div>
                <span className='font-semibold text-2xl dark:text-purple-100'><span>I'm </span><TypeAnimation 
                    className='mt-8 font-bold text-purple-800 dark:text-purple-600 text-2xl'
                    sequence={[
                        "a Software Engineer",
                        1000,
                        "a Frontend Engineer",
                        1000,
                        "a Javascript Developer",
                        1000,
                        "a ReactJs Developer",
                        1000,
                        "a Music Lover",
                        1000,
                        "an Arsenal fan",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    style={{fontSize:'', display:'inline-block', color:''}}
                    repeat={Infinity}
                    />
                    </span>
            </div>
        </div>
        <div className='z-0'>
            {/* <TsParticles/> */}
        </div>
    </div>
  )
}
