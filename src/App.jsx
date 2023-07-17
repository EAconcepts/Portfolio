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

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [githubProjects, setGithubProjects] = useState()

  useEffect(()=>{
    setDarkMode(false)
    axios.get('https://api.github.com/users/eaconcepts/repos')
    .then((response)=>{
      if(response.status===200){
        console.log(response.data)
        setGithubProjects(response.data)
    }
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  // console.log(githubProjects)

  return (
    <div className={` box-border ${darkMode &&  'dark'}`}>
        <TsParticles darkMode={darkMode}/>
      <div className="bg-slate-100 p-6 dark:bg-gray-800 min-h-screen">
        <BrowserRouter>
          <SideMenu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
              <Route exact path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/tech-stack' element={<TechStack/>}/>
              <Route path='/projects' element={<Projects githubProjects={githubProjects}/>} />
              <Route path='/blogs' element={<Blogs/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
