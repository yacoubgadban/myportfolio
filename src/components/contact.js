import React  from 'react';


class Contact extends React.Component{
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
        <div className="content">
            <div style={{position: 'relative',left:this.state.container}}>  
              <div class="container">
                  <div class="text-center">
                      <div class="section-title padd-15">
                          <h2 className="name">Contact Me</h2>
                      </div>
                  </div>
                  <br/>

                  <div class="row">
                      <div class="contact-info-item padd-15">
                          <div class="icon"><i class="fa fa-phone"></i></div>
                          <h4>Call Me On : 052-3555-775</h4>
                      </div>
                      <br/>
                      
                        <div class="contact-info-item padd-15">
                            <div class="icon"><i class="fa fa-map-marker"></i></div>
                            <h4>Office : Hurfiesh</h4>
                        </div>
                        <br/>

                          <div class="contact-info-item padd-15">
                              <div class="icon"><i class="fa fa-envelope"></i></div>
                              <h4>Email : yacoub.gadban@gmail.com</h4>
                              <p></p>
                          </div>
                  </div>
                  <br/>

                    <div class="row">
                      <form class="contact-form padd-15" action="MAILTO:vladche99@gmail.com" method="post" enctype="text/plain">
                        <div class="row">
                            <div class="form-item col-6 padd-15">
                                <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Name*" name="Name"/>
                                </div>
                            </div>
                            <br/>

                            <div class="form-item col-6 padd-15">
                                <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Email*" name="Email" />
                                </div>
                            </div>
                        </div>
                        <br/>

                        <div class="row">
                          <div class="form-item col-12 padd-15">
                              <div class="form-group">
                                <input type="text" class="form-control" placeholder="Subject*" name="Subject"/> 
                              </div>
                          </div>
                        </div>
                        <br/>

                        <div class="row">
                          <div class="form-item col-12 padd-15">
                              <div class="form-group">
                                <textarea type="text" class="form-control" placeholder="Your Message..." name="Message" ></textarea>
                              </div>
                          </div>
                        </div>
                        <br/>

                        <div class="row">
                          <div class="form-item col-12 padd-15">
                              <div class="form-group">
                                  <button type="submit" class="name">Send Message</button>
                              </div>
                          </div>
                        </div>
                      </form>
                    </div>

              </div>
        </div>
    </div>
        )
        }

    }

export default Contact;