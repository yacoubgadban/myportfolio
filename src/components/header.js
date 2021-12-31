import React  from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render(){
            return(
            <div className="header">
               <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">

    <div >
      <ul className="navbar-nav me-auto mb-2 ">
      <Link to="/">
    <li className="nav-item">
          <a className="nav-link" >Home</a>
    </li>    
    </Link>
      <Link to="/about">
        <li className="nav-item">
          <a className="nav-link " >About</a>
        </li>
        </Link>
        
        <Link to="/Projects">
        <li className="nav-item">
          <a className="nav-link" >Projects</a>
        </li>
        </Link>
        <Link to="/contact">
        <li className="nav-item">
          <a className="nav-link" >Contact</a>
        </li>
        </Link>
      </ul>
      <span className="navbar-text">
      yacoub gadban site
      </span>
    </div>
  </div>
</nav>
                    </div>
                    
            <hr/>
           
            </div>
            )
        }

}



export default Header;
