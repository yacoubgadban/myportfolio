import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Header from './components/header'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
function App() {
  return (
   <Router>
     <Header/>
     <Switch>
       <Route path="/" component={Main}/>
     </Switch>
   </Router>
  );
}

export default App;
