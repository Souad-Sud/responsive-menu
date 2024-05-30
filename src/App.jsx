import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {


  return (
    <div className='App'> 
    <header>
    <NavBar />
    </header>
     
     <Routes>
      <Route path ="/" element = {<Home/>} />
      <Route path ="/about" element = {<About />} />
      <Route path = "/contact" element = {<Contact />}/>
     </Routes>
    
    </div>
  )
}

export default App
