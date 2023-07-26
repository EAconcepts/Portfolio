import React, { useState, useRef } from 'react'
import {useClickAway} from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faMoon, faSun, faHome, faUser, faComputer, faSuitcase, faPenToSquare, faMessage } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export const navList= (
    <nav className="h-full flex flex-col justify-center gap-6 font-medium ">
        <NavLink to="/"
            className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-gray-800 px-6 py-2 text-white dark:text-purple-200 font-bold hover:text-purple-200 dark:hover:text-white" :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-purple-700 hover:text-purple-500 dark:hover:text-purple-200"}
        >
            <div className='flex flex-row gap-2 items-center'>
                <p className=''>HOME</p>
            <FontAwesomeIcon icon={faHome} className=''/>
            </div>
        </NavLink>
    
        <NavLink to="/about"
          className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-gray-800 px-6 py-2 text-white dark:text-purple-200 font-bold hover:text-purple-200 dark:hover:text-white" :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-purple-700 hover:text-purple-500 dark:hover:text-purple-200"}
        >
            <div className='flex flex-row gap-2 items-center'>
                <p className=''>ABOUT</p>
            <FontAwesomeIcon icon={faUser} className=''/>
            </div>
        </NavLink>
        <NavLink to="/tech-stack"
            className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-gray-800 px-6 py-2 text-white dark:text-purple-200 font-bold hover:text-purple-200 dark:hover:text-white" :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-purple-700 hover:text-purple-500 dark:hover:text-purple-200"}
        >
            <div className='flex flex-row gap-2 items-center'>
                <p className=''>TECH STACK</p>
            <FontAwesomeIcon icon={faComputer} className=''/>
            </div>
        </NavLink>
        <NavLink to="/projects"
            className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-gray-800 px-6 py-2 text-white dark:text-purple-200 font-bold hover:text-purple-200 dark:hover:text-white" :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-purple-700 hover:text-purple-500 dark:hover:text-purple-200"}
        >
            <div className='flex flex-row gap-2 items-center'>
                <p>PROJECTS</p>
            <FontAwesomeIcon icon={faSuitcase} className=''/>
            </div>
        </NavLink>
        {/* <NavLink to="/blogs"
            className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-gray-800 px-6 py-2 text-white dark:text-purple-200 font-bold hover:text-purple-200 dark:hover:text-white" :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-purple-700 hover:text-purple-500 dark:hover:text-purple-200"}
        >
            <div className='flex flex-row gap-2 items-center'>
                <p>BLOGS</p>
            <FontAwesomeIcon icon={faPenToSquare} className=''/>
            </div>
        </NavLink> */}
        <NavLink to="/contacts"
            className={({isActive, isPending})=>isActive ? " bg-purple-800 dark:bg-gray-800 px-6 py-2 text-white dark:text-purple-200 font-bold hover:text-purple-200 dark:hover:text-white" :"" ? isPending :"px-6 py-2 dark:text-purple-300 text-purple-700 hover:text-purple-500 dark:hover:text-purple-200"}
        >
            <div className='flex flex-row gap-2 items-center'>
                <p>CONTACTS</p>
            <FontAwesomeIcon icon={faMessage} className=''/>
            </div>
        </NavLink>
    </nav>
)

const SideMenu = ({darkMode, setDarkMode}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMode =()=>{
        setDarkMode(!darkMode)
    }

  const ref = useRef(null)
    useClickAway(ref,()=>{
        setIsOpen(false)
    })

    

  return (
    <div className='w-full border-2 '>
        <div className="hidden sm:fixed top-0 left-0 bottom-0 sm:flex flex-col w-[20%] bg-white dark:bg-gray-700">
            <div className="top-in flex items-center h-16 ">
                <p className="dark:text-purple-100 px-2 text-[#301934] text-lg font-bold">EMMANUEL AMOO</p>
            </div>
            <div className='top-in w-full flex flex-row items-center px-2 gap-1'>
                <button onClick={toggleMode} ref={ref} className='flex flex-row text-sm'>
                    <div className='flex flex-row justify-center items-center h-6 w-6 rounded-full border border-slate-800 dark:border-purple-300 dark:text-purple-100'>
                        {!darkMode ? <FontAwesomeIcon icon={faMoon} className=''/> : <FontAwesomeIcon icon={faSun} className=''/>}
                    </div>
                    <p className='dark:text-purple-100 text-[#301934] pr-2 ml-2'> Toggle mode</p>
                </button>
            </div>
            <nav className="down-in flex-grow">
                {navList}
            </nav>
        </div>
        
    </div>
  )
}

export default SideMenu
