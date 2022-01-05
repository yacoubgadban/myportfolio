import React  from 'react';
import ReactDOM  from 'react-dom';


class About extends React.Component{
   
    render(){
        
        return(
            <div className="body">
      
        <div >
             
                <h2 className="title" data-text="About..Me:)" style={{width:'37%'}}>About..Me:)</h2>
                    <div className="content">
                        <a>My name is Yacoub Gadban im 33 years old</a><br/>
                        <a>Im Practical Software Engineer</a><br/>
                        <a>1 year of experience in web development</a><br/>
                    </div>     
        </div>
    
    </div>
        )
        }

    }

export default About;