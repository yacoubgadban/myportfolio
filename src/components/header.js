import React  from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{

    render(){
            return(
            <div className="header">
               <div class="container">
                    <div class="row">
                    <h3 className="name">Yacoub Gadban</h3>
                        <br/>
                        <br/>
                        
                        <div class="col-sm-1">
                         <Link to="/">
                        <a>Home</a>
                        </Link>
                        </div>
                        
                        <div  class="col-sm-1">
                        <Link to="/about">
                        <a>About</a>             
                        </Link>
                        </div>
                        
                        <div class="col-sm-1">
                        <Link to="/projects">
                        <a>Projects</a>
                        </Link>
                        </div>
                        
                        <div class="col-sm-1">
                        <Link to="/contact">
                        <a>Contact</a>
                        </Link>
                        </div>

                    </div>
                    </div>
            <hr/>
            </div>
            )
        }

}



export default Header;
