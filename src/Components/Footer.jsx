import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <nav className='flex flex-row gap-4'>
            <NavLink to='/' className={({isActive})=>isActive ? 'hidden' : `bg-gray-700 px-2 rounded-sm dark:text-purple-200`}>Home</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive ? 'hidden' : `bg-gray-700 px-2 rounded-sm dark:text-purple-200`}>About</NavLink>
            <NavLink to='/tech-stack' className={({isActive})=>isActive ? 'hidden' : `bg-gray-700 px-2 rounded-sm dark:text-purple-200`}>Tech Stack</NavLink>
            <NavLink to='/projects' className={({isActive})=>isActive ? 'hidden' : `bg-gray-700 px-2 rounded-sm dark:text-purple-200`}>Projects</NavLink>
        </nav>
    </footer>
  )
}

export default Footer