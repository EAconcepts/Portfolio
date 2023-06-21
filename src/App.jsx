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

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    setDarkMode(false)
  },[])

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
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
