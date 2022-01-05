import React  from 'react';
import ReactDOM  from 'react-dom';


class Projects extends React.Component{
  
    render(){
     
        return(
            <div className="body">
        <div className="main">
            <div >  
            <h2 className="title" data-text="Projects" style={{width: '14%'}}>Projects</h2>
              
  <div className="row">
    <div className="col-sm">
        <img className="project-img"  src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt=""/>    
    <p className="desc">project 1</p>
    </div>
    <div className="col-sm">
    <img className="project-img" src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt=""/>    
    <p className="desc">project 2</p>
    </div>
    <div className="col-sm">
    <img className="project-img" src="https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=" alt=""/>    
    <p className="desc">project 3</p>
    </div>


</div>

            </div>
             </div>
        </div>
        )
        }

    }

export default Projects;