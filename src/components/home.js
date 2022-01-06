import React  from 'react';
import ReactDOM  from 'react-dom';
import myvid from '../particles.mp4'

class Main extends React.Component{
   
    
    
    render(){
        
        return(
            <div className="body">

        <div className="main">
        <div className="cont">
                <div className="text" style={{"--i":0}}>
                    <span style={{"--i":0}}>Y</span>
                    <span style={{"--i":1}}>A</span>
                    <span style={{"--i":2}}>U</span>
                    <span style={{"--i":3}}>G</span>
                </div>
                <div className="text" style={{"--i":0}}>
                    <span style={{"--i":0}}>A</span>
                    <span style={{"--i":1}}>Y</span>
                    <span style={{"--i":2}}>C</span>
                    <span style={{"--i":3}}>A</span>
                </div>
                <div className="text" style={{"--i":0}}>
                    <span style={{"--i":0}}>C</span>
                    <span style={{"--i":1}}>A</span>
                    <span style={{"--i":2}}>Y</span>
                    <span style={{"--i":3}}>D</span>
                </div>
                <div className="text" style={{"--i":0}}>
                    <span style={{"--i":0}}>O</span>
                    <span style={{"--i":1}}>O</span>
                    <span style={{"--i":2}}>C</span>
                    <span style={{"--i":3}}>B</span>
                </div>
                <div className="text" style={{"--i":0}}>
                    <span style={{"--i":0}}>U</span>
                    <span style={{"--i":1}}>A</span>
                    <span style={{"--i":2}}>C</span>
                    <span style={{"--i":3}}>A</span>
                </div>
                <div className="text" style={{"--i":0}}>
                    <span style={{"--i":0}}>B</span>
                    <span style={{"--i":1}}>A</span>
                    <span style={{"--i":2}}>C</span>
                    <span style={{"--i":3}}>N</span>
                </div>
            </div>  
        <div className="text-center">
            <div> 
            
                <div className="box">
                    <br/>
                    <br/>
                <img className="profileImg" src="profile2.jpeg"/>
                
                </div> 
                <br/>
                <div>
                   
                <h2 className="name" data-text="Software..Engineer">Software Engineer</h2>
                <br/>
                <h2 className="desc" >Web Developer</h2>
                </div>
               
                <div className="social-links">
                    <a href="https://il.linkedin.com/in/yacoub-gadban-1b54101a1" target="_blank" className="social-links"><svg style={{color: '#03a9fa'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg></a>
                    <a href="https://github.com/yacoubgadban/" target="_blank" className="social-links"><svg style={{color: 'white'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg></a>
                </div>
            </div>
        </div>
    </div>
    </div>
        )
        }

    }

export default Main;
