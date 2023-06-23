import React from 'react'
import reactImg from '../assets/reactjs.png'
import htmlImg from '../assets/html.jpg'
import cssImg from '../assets/css.jpg'
import tailwindImg from '../assets/tailwind.png'
import javascriptImg from '../assets/javascript.jpg'
import axiosImg from '../assets/axios.png'

const TechStack = () => {
  return (
    <div className='flex flex-col mt-8 md:fixed md:left-64 md:right-0 pl-5'>
      <h1 className='text-5xl font-bold dark:text-purple-200 tracking-wide'>
        Tech Stack
      </h1>
      <div className='mt-6'>
        <p>The Technologies I can work with
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 ml-5 mt-4 dark:text-purple-100'>
          <div>
            <img src={htmlImg} 
              alt='html'
              className=' w-[120px] h-32'
              />
              <p className=''>HTML</p>
          </div>
          <div>
            <img src={cssImg} 
              alt='css'
              className=' w-[120px] h-32'
              />
              <p>Vanilla CSS</p>
          </div>
          <div>
            <img src={javascriptImg} 
              alt='javascript'
              className=' w-[120px] h-32'
              />
              <p>Javascript</p>
          </div>
          <div>
            <img src={tailwindImg} 
              alt='tailwind'
              className=' w-[120px] h-32'
              />
              <p>Tailwind</p>
          </div>
          <div>
            <img src={reactImg} 
              alt='react'
              className=' w-[120px] h-32'
              />
              <p>Reactjs</p>
          </div>
          <div>
            <img src={axiosImg} 
              alt='axios'
              className=' w-[120px] h-32'
              />
              <p>Axios</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack