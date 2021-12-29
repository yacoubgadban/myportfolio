import React  from 'react';

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
                        <p> Home</p>
                        </div>
                        <div class="col-sm-1">
                        <p>About</p>
                        </div>
                        <div class="col-sm-1">
                        <p>Services</p>
                        </div>
                        <div class="col-sm-1">
                        <p> Portfolio</p>
                        </div>
                        <div class="col-sm-1">
                        <p> Contact</p>
                        </div>
                    </div>
                    </div>
            <hr/>
            </div>
            )
        }

}



export default Header;
