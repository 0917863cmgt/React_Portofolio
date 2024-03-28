import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Resume from './Resume.jsx'
import './Nav.css'


function Nav() {
  const [count, setLanguage] = useState("EN")
  function showAbout() {
    ReactDOM.createRoot(document.getElementById('middle')).render(
      <React.StrictMode>
        <About/>
      </React.StrictMode>,
    )
  }

  function showProjects() {
    ReactDOM.createRoot(document.getElementById('middle')).render(
      <React.StrictMode>
        <Projects/>
      </React.StrictMode>,
    )
  }

  function showResume() {
    ReactDOM.createRoot(document.getElementById('middle')).render(
      <React.StrictMode>
        <Resume/>
      </React.StrictMode>,
    )
  }

  return (
    <>
      <nav id="bar">
        <h1 id="title">Portofolio Website</h1>
        <div id="tabs">
              <button onClick={() => showAbout()}>About Me</button>
              <button onClick={() => showProjects()}>Projects</button>
              <button onClick={() => showResume()}>Resume</button>
        </div>
        <ul id="socials">
              <li><img id='github' src="src/assets/github-mark.svg" alt="Github"/></li>
              <li><img id='linked-in' src="src/assets/linkedin-color-svgrepo-com.svg" alt="Linked-In"/></li>
          </ul>
      </nav>
    </>
  )
}

export default Nav
