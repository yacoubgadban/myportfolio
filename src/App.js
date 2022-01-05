import logo from './logo192.png';
import './App.css';
import Home from './components/home'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="allweb">
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
