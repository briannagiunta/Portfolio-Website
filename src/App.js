import './App.css';
import Header from './components/header'
import Tech from './components/tech'
import About from './components/about'
import Projects from './components/projects'

function App() {
  return (
    <div className="App">
      {/* <a href='#about-container'>About</a> */}
      <Header />
      <Tech />
      <About />
      <Projects />
    </div>
  );
}

export default App;
