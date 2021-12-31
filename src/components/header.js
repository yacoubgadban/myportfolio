import React  from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render(){
            return(
                <div className="container">
                <ul className="nav" style={{backgroundColor: '#e3f2fd'}}>
                <li><a href="/" ><i className="fa fa-home"></i>Home</a></li>
                <li><a href="/about"><i className="fa fa-user"></i>About</a></li>
                <li><a href="/projects"><i className="fa fa-list"></i>Projects</a></li>
                <li><a href="/contact"><i className="fa fa-briefcase"></i>Contact</a></li>
              </ul>
              <hr/>
              
              </div>
            )
        }

}



export default Header; 
