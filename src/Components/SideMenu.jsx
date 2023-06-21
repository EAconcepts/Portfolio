import React, { useState, useRef } from 'react'
import {useClickAway} from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faMoon, faSun, faHome, faUser, faComputer, faSuitcase, faPenToSquare, faMessage } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const SideMenu = ({darkMode, setDarkMode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMode =()=>{
        setDarkMode(!darkMode)
    }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef(null)
    useClickAway(ref,()=>{
        setIsOpen(false)
    })

    const navList= (
        <nav className="h-full flex flex-col justify-center gap-6 ">
            <NavLink to="/"
                className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-purple-950 px-6 py-2 text-white font-bold hover:text-white " :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-gray-400 hover:text-purple-600"}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <p className=''>HOME</p>
                <FontAwesomeIcon icon={faHome} className=''/>
                </div>
            </NavLink>
        
            <NavLink to="/about"
                className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-purple-950 px-6 py-2 text-white font-bold hover:text-white " :"" ? isPending:"px-6 py-2 text-purple-400 dark:text-purple-300 hover:text-purple-600"}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <p className=''>ABOUT</p>
                <FontAwesomeIcon icon={faUser} className=''/>
                </div>
            </NavLink>
            <NavLink to="/tech-stack"
                className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-purple-950 px-6 py-2 text-white font-bold hover:text-white" :"" ? isPending:"px-6 py-2 text-purple-400 dark:text-purple-300 hover:text-purple-600"}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <p className=''>TECH STACK</p>
                <FontAwesomeIcon icon={faComputer} className=''/>
                </div>
            </NavLink>
            <NavLink to="/projects"
                className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-purple-950 px-6 py-2 text-white font-bold hover:text-white " :"" ? isPending :"px-6 py-2 text-purple-400 dark:text-purple-300 hover:text-purple-600"}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <p>PROJECTS</p>
                <FontAwesomeIcon icon={faSuitcase} className=''/>
                </div>
            </NavLink>
            <NavLink to="/blogs"
                className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-purple-950 px-6 py-2 text-white font-bold hover:text-white"  :"" ? isPending :"px-6 py-2 text-purple-400 dark:text-purple-300 hover:text-purple-600"}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <p>BLOGS</p>
                <FontAwesomeIcon icon={faPenToSquare} className=''/>
                </div>
            </NavLink>
            <NavLink to="/contacts"
                className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-purple-950 px-6 py-2 text-white font-bold hover:text-white " :"" ? isPending : "px-6 py-2 text-purple-400 dark:text-purple-300 hover:text-purple-600"}
            >
                <div className='flex flex-row gap-2 items-center'>
                    <p>CONTACTS</p>
                <FontAwesomeIcon icon={faMessage} className=''/>
                </div>
            </NavLink>
        </nav>
    )

  return (
    <div className='w-full'>
        <div className="hidden md:fixed top-0 left-0 bottom-0 md:flex flex-col w-64 bg-white dark:bg-gray-700">
            <div className="flex items-center justify-center h-16 ">
                {/* <p className="text-black text-lg font-bold">EMMANUEL AMOO</p> */}
            </div>
            <nav className="flex-grow">
                {navList}
            </nav>
        </div>
        <div className='w-full flex flex-row justify-between'>
            <div ref={ref} className={`relative`}>
                <button
                    className={`block md:hidden bg-white dark:bg-purple-200 dark:text-gray-700 px-2 py-1 rounded-md text-gray-800 ${isOpen && ' transition duration-200 ease-in transform translate-x-48'}`}
                    onClick={toggleMenu}
                >
                    {!isOpen ? <FontAwesomeIcon icon={faBars} className='text-2xl'/> : 
                    <FontAwesomeIcon icon={faClose} className='text-2xl'/>}
                </button>

                {isOpen && (
                    <div ref={ref} className={`fixed h-full z-10 top-0 bottom-0 right-0 left-0 w-2/4 bg-white dark:bg-gray-700 shadow-md transform transition duration-500 ${isOpen ? '  translate-x-0 ease-in' : '-translate-x-0 ease-out'}`} onClick={toggleMenu}>
                        {/* <nav className="flex-grow h-full "> */}
                        {navList}
                    </div>
                )}
            </div>
            <div className='flex flex-row items-center gap-1'>
                <button onClick={toggleMode} ref={ref}>
                    <div className='flex flex-row justify-center items-center h-6 w-6 rounded-full border border-slate-800 dark:border-purple-300 dark:text-purple-100'>
                        {!darkMode ? <FontAwesomeIcon icon={faMoon} className=''/> : <FontAwesomeIcon icon={faSun} className=''/>}
                    </div>
                </button>
                <p className='text-gray-800 dark:text-white'>EAConcepts</p>
            </div>
        </div>
    </div>
  )
}

export default SideMenu
