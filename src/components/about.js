import React  from 'react';


class About extends React.Component{
    state = {
        container:700
    }
    
    
    render(){
        setTimeout(() => {
            if(this.state.container>0){
                 this.setState({container:this.state.container-0.5});               
            }
           
        }, 10)
        return(
        <div className="main">
        <div className="text-center">
            <div style={{position: 'relative',left:this.state.container}}>  
                <h2 className="name">About Me</h2>
                <div className="content">
                <p>My name is Yacoub Gadban im 33 years old</p>
                <p>Im Practical Software Engineer</p>
                <p>1 year of experience in web development</p>

            </div>
            </div>
           
        </div>
    </div>
        )
        }

    }

export default About;