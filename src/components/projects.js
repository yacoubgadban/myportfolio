import React  from 'react';


class Projects extends React.Component{
    state = {
        container:1000
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
                <h2 className="name">Projects</h2>
            </div>
        </div>
    </div>
        )
        }

    }

export default Projects;