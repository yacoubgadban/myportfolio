import React  from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render(){
            return(
            <div className="header">
               <div class="container">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to="/">
    <a class="navbar-brand" href="/">Home</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
      <Link to="/about">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">About</a>
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
        Navbar text with an inline element
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
