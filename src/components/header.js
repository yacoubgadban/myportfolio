import React  from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render(){
            return(
            <div className="header">
               <div class="container">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to="/">
    <li class="nav-item">
          <a class="nav-link" >Home</a>
    </li>    
    </Link>
      <Link to="/about">
        <li class="nav-item">
          <a class="nav-link " >About</a>
        </li>
        </Link>
        
        <Link to="/Projects">
        <li class="nav-item">
          <a class="nav-link" >Projects</a>
        </li>
        </Link>
        <Link to="/contact">
        <li class="nav-item">
          <a class="nav-link" >Contact</a>
        </li>
        </Link>
      </ul>
      <span class="navbar-text">
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
