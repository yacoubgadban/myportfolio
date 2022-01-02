import logo from './logo192.png';
import './App.css';
import Home from './components/home'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import React  from 'react';
import ReactDOM  from 'react-dom';


function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about"  component={About}/>
       <Route path="/projects"  component={Projects}/>
       <Route path="/contact"   component={Contact}/>

     </Switch>
   </Router>
  );
}

export default App;
