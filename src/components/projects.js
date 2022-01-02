import React  from 'react';
import ReactDOM  from 'react-dom';


class Projects extends React.Component{
    state = {
        container:700
    }
    
    
    render(){
        setTimeout(() => {
            if(this.state.container>0){
                 this.setState({container:this.state.container-2});               
            }
           
        }, 10)
        return(
        <div className="main">
            <div className="text-center" style={{position: 'relative',left:this.state.container}}>  
                <h2 className="name">Projects</h2>
<br/><br/>
                <div className="container">
  <div className="row">
    <div className="col-sm">
        <img style={{width:300}} src="https://thebrillianthealth.org/wp-content/uploads/2021/10/realistic-coming-soon-background_23-2148889082.jpg" alt=""/>    
    <p className="name">project 1</p>
    </div>
    <div className="col-sm">
    <img style={{width:300}} src="https://thebrillianthealth.org/wp-content/uploads/2021/10/realistic-coming-soon-background_23-2148889082.jpg" alt=""/>    
    <p className="name">project 2</p>
    </div>
    <div className="col-sm">
    <img style={{width:300}} src="https://thebrillianthealth.org/wp-content/uploads/2021/10/realistic-coming-soon-background_23-2148889082.jpg" alt=""/>    
    <p className="name">project 3</p>
    </div>

  </div>
</div>


             </div>
        </div>
        )
        }

    }

export default Projects;