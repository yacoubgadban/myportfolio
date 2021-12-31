import React  from 'react';


class Main extends React.Component{
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
                <img className="profileImg" src="profile.jpg"/>
                <h2 className="name">yacoub gadban</h2>
            </div>
        </div>
    </div>
        )
        }

    }

export default Main;
