import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = ({githubProjects, setReload, reloadGithub, isPending}) => {
  console.log(githubProjects)
  
  return (
    <div className='h-full md:flex md:flex-col dark:text-purple-200'>
      <div className='w-full flex flex-col justify-center'>
        <div className='w-full'>
          <h2 className='text-xl text-center font-bold'>Projects</h2>
          <div className='flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-8 sm:place-items-center '>
            {
               isPending ?
               <p>loading...</p> 
              : githubProjects ?
              (
                githubProjects.map((project)=>(
                  <div className='bg-purple-100 dark:bg-gray-700 text-[#301934] dark:text-purple-100 w-60 sm:w-56 md:w-64 h-64 md:h-72 my-4 px-4 md:px-5 pt-3 pb-8 flex flex-col justify-between items-center shadow-lg shadow-slate-600 rounded-md' key={project.id}>
                    <div>
                      <h1 className='text-lg text-purple-950 dark:text-purple-200 font-semibold  mb-2 uppercase text-center'>{project.name}</h1>
                    <p className='text-sm mb-2'>{project.description}</p>
                    </div>
                    <div className='flex flex-row gap-8'>
                      <Link to={project.html_url} target="_blank" className='text-purple-950 dark:text-purple-200 hover:text-purple-800 hover:text-lg hover:font-medium'>Github</Link>
                      <Link to={project.homepage} target="_blank" className='text-purple-950 dark:text-purple-200 hover:text-purple-800 hover:text-lg hover:font-medium'>Live Link</Link>
                    </div>
                  </div>
                ))
              )
              : !isPending && !githubProjects &&
              <p className=''>Couldn't fetch projects. <button onClick={()=>setReload(!reloadGithub)} className=' underline'>Try again...</button></p>
            }
          </div>
        </div>
      </div>

    </div>
  )
}
