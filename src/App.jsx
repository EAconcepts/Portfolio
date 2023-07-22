import { useEffect, useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./Components/Home"
import About from './Components/About'
import {Projects} from './Components/Projects'
import TechStack from './Components/TechStack'
import Blogs from './Components/Blogs'
import Contacts from './Components/Contacts'
import SideMenu from "./Components/SideMenu"
import TsParticles from './Components/TsParticles'
import axios from "axios"
import MobileMenu from "./Components/MobileMenu"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [githubProjects, setGithubProjects] = useState()
  const [isPending, setIsPending] = useState(false)
  const [reloadGithub, setReload] = useState(false)
  console.log(window.location.pathname)

  useEffect(()=>{
    setDarkMode(true)
    setIsPending(true)
    axios.get('https://api.github.com/users/eaconcepts/repos')
    .then((response)=>{
      if(response.status===200){
        console.log(response.data)
        setGithubProjects(response.data)
        setIsPending(false)
    }
    })
    .catch((error)=>{
      console.log(error)
      setIsPending(false)
    })
  },[reloadGithub])
  // console.log(githubProjects)

  return (
    <>
      <TsParticles darkMode={darkMode}/>
      <div className={`"dark:bg-gray-800" ${darkMode &&  'dark'}`} >
        <div className={`min-h-screen w-full h-scree flex flex-col md:flex-row gap-1 box-border bg-slate-100 dark:bg-gray-800 `}>
          <BrowserRouter>
            <div className="md:hidden">
              <MobileMenu setDarkMode={setDarkMode} darkMode={darkMode}/>
            </div>
            <div className="hidden md:block md:w-1/4">
              <SideMenu darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <div className=" w-full p-2 ">
              <Routes>
                  <Route exact path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/tech-stack' element={<TechStack/>}/>
                  <Route path='/projects' element={<Projects githubProjects={githubProjects} reloadGithub={reloadGithub} setReload={setReload} isPending={isPending}/>} />
                  <Route path='/blogs' element={<Blogs/>}/>
                  <Route path='/contacts' element={<Contacts/>}/>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
