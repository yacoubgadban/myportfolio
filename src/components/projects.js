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
        <img style={{width:300}} src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt=""/>    
    <p className="name">project 1</p>
    </div>
    <div className="col-sm">
    <img style={{width:300}} src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt=""/>    
    <p className="name">project 2</p>
    </div>
    <div className="col-sm">
    <img style={{width:300}} src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt=""/>    
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