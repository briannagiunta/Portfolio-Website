import './App.css';
import Header from './components/header'
import Tech from './components/tech'
import About from './components/about'
import Projects from './components/projects'
import Popup from './components/popup'
import { useEffect, useState } from 'react'


function App() {
  const [project, setProject] = useState(null)

  useEffect(()=>{setProject(null)},[])

  return (
    <>
      {project &&
      <Popup project={project} setProject={setProject}/>   
      }
      <div className="App">
        <Header />
        <Tech />
        <About />
        <Projects setProject={setProject}/>
      </div>
    </>
  );
}

export default App;
