import React from 'react'
import reactImg from '../assets/reactjs.png'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import tailwindImg from '../assets/tailwind.png'
import javascriptImg from '../assets/js.png'
import axiosImg from '../assets/axios.png'

const TechStack = () => {
  return (
    <div className='flex flex-col mt-8 md:fixe md:left-64 md:right-0 p-1 md:p-3 dark:text-purple-200'>
      <h1 className='text-5xl font-bold dark:text-purple-200 tracking-wide'>
        Tech Stack
      </h1>
      <div className='mt-6'>
        <p>The Technologies I can work with
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 ml-5 mt-4 dark:text-purple-100'>
          <div className='w-fit shadow-lg shadow-slate-600 rounded-md md:p-2'>
            <img src={htmlImg} 
              alt='html'
              className=' w-[120px] h-32 md:w-[135px] md:h-36 object-cover'
              />
              <p className='text-center font-medium'>HTML</p>
          </div>
          <div className='w-fit shadow-lg shadow-slate-600 rounded-md md:p-2'>
            <img src={cssImg} 
              alt='css'
              className=' w-[120px] h-32 md:w-[135px] md:h-36 object-cover'
              />
              <p className='text-center font-medium'>Vanilla CSS</p>
          </div>
          <div className='w-fit shadow-lg shadow-slate-600 rounded-md md:p-2'>
            <img src={javascriptImg} 
              alt='javascript'
              className=' w-[120px] h-32 md:w-[135px] md:h-36 object-cover'
              />
              <p className='text-center font-medium'>Javascript</p>
          </div>
          <div className='w-fit shadow-lg shadow-slate-600 rounded-md md:p-2'>
            <img src={tailwindImg} 
              alt='tailwind'
              className=' w-[120px] h-32 md:w-[135px] md:h-36 object-contain'
              />
              <p className='text-center font-medium'>Tailwind</p>
          </div>
          <div className='w-fit shadow-lg shadow-slate-600 rounded-md md:p-2'>
            <img src={reactImg} 
              alt='react'
              className=' w-[120px] md:w-[135px] md:h-36 h-32 object-contain '
              />
              <p className='text-center font-medium'>Reactjs</p>
          </div>
          <div className='w-fit shadow-lg shadow-slate-600 rounded-md md:p-2'>
            <img src={axiosImg} 
              alt='axios'
              className=' w-[120px] md:w-[135px] md:h-36 h-32 object-cove'
              />
              <p className='text-center font-medium'>Axios</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack