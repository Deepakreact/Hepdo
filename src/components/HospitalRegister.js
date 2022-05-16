import React, { Component } from "react";


class HospitalRegister extends Component {
     constructor(props){
        super(props);
        this.state = {
           name:"",
           email:"",
           mobile:"",
           gst:"",
           Registerno:"",
           password:"",
           error:"",
           type:"",
           typeError:"",
           NameError:"",
           EmailsError:"",
           registerError:"",
           PasswordError:"",
           gstError:"",
           mobileError:"",
           SuccessMsg:"",
           EmailError:""
        }
     }

     handleChange = (event) =>{
      console.log(event.target.value);
      this.setState({
         type: event.target.value,
        });
    }
    handlername = (event) =>{
      console.log(event.target.value);
      this.setState({
         name: event.target.value,
        });
    }
    handlerEmail = (event) =>{
       console.log(event.target.value);
       this.setState({
         email: event.target.value,
       });
    }
    handlerMobile = (event) =>{
      console.log(event.target.value);
      this.setState({
         mobile: event.target.value,
       });
   }
   handlerGst = (event) =>{
      console.log(event.target.value);
      this.setState({
         gst: event.target.value,
      })
   }

   handlerRegister =(event)=>{
      console.log(event.target.value);
      this.setState({
         Registerno: event.target.value,
      });
   }
   handlerPassword = (event) =>{
      console.log(event.target.value);
      this.setState({
         password: event.target.value,
      });
   }

handlerSubmit = (event) => {
      event.preventDefault();
      if(this.state.name==""){
         this.setState({
            NameError:"Please Enter Name",
         });
      }
      if(this.state.type==""){
         this.setState({
            typeError:"Select Type",
         });
      }

      
      if(this.state.mobile==""){
         this.setState({
            mobileError:"Please Enter mobile",
         });
      }
     
      if(this.state.gst==""){
         this.setState({
            gstError:"Please Enter Gst",
         });
      }
      if(this.state.Registerno==""){
         this.setState({
            registerError:"Please Enter Register No",
         });
      }
      if(this.state.email==""){
         this.setState({
            EmailsError:"Please Enter Email",
         });
      }
      if(this.state.password==""){
         this.setState({
            PasswordError:"Please Enter Password",
         });
      }   else {

      
         fetch("http://admin.heapdo.com/api/hospitalregister", {
            "method": "POST",
            "headers": {
               Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            "body": JSON.stringify({
               "type":this.state.type,
               "name": this.state.name,
               "mobile": this.state.mobile,
               "gst": this.state.gst,
               "registerno": this.state.Registerno,
               "email": this.state.email,
               "password": this.state.password 
            })
          })
          .then(response => response.json())
          .then(response => {
            console.log(response);
           if(response.status==204){
              console.log(response);
              this.setState({
               SaveOtp:"",
               mobileError:"",
               EmailError:response.EmailError,
            });
           } if(response.status==203){
            this.setState({
               mobileError:response.mobileError,
               EmailError:"",
            });
           }
           if(response.status==205){
              this.setState({
                  SaveOtp:response.otp,
                  mobileError:"",
                  EmailError:"",
                  
              });
             //window.location.href = "/login";
           } if(response.status==209){
               this.setState({
                  mobileError:"",
                  EmailError:"",
                  otpWrong:response.item,
            }); 
           }
            if(response.status==200){
            this.setState({
               typeError:"",
               mobileError:"",
               gstError:"",
               EmailError:"",
               NameError:"",
               EmailsError:"",
               PasswordError:"",
               SuccessMsg:response.success,
           });
           setTimeout(function() {
             window.location.href = "/hospital-clinic-login";
            }, 5000);
           }
         })
          .catch(err => {
            console.log(err);
          });
      }
   };

  render() {
    return (
    <>
     <div className="content mycontent">
            <div className="container-fluid mymargin">
               <div className="row">
                  <div className="col-md-8 offset-md-2">
                     <div className="account-content">
                        <div className="row align-items-center justify-content-center">
                           <div className="col-md-7 col-lg-6 login-left">
                              <img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Register" />
                           </div>
                           <div className="col-md-12 col-lg-6 login-right">
                           {this.state.SuccessMsg &&              
                                 <div class="alert alert-success">
                                 <strong>Success!</strong>{this.state.SuccessMsg}</div>
                              }
                              <div className="login-header">
                                 <h3>Docter/Clinic/Hospital Register </h3>
                              </div>
                              <form onSubmit={this.handlerSubmit}>
                                 <div className="form-group ">
                                    <select className="form-control" onChange={e =>this.handleChange(e)}>
                                       <option value="">Select Type</option>
                                         <option value="hospital">I am Hospital</option>
                                         <option value="clinic">I am Clinic</option>
                                         <option value="docter">I am Docter</option>
                                    </select>
                                    <span class="valiError">{this.state.typeError}</span>
                                 </div>
                                 <div className="form-group ">
                                    <input type="text" className="form-control floating" placeholder="Name" onChange={e => this.handlername(e)} />
                                 
                                    <span class="valiError">{this.state.NameError}</span>
                                 </div>
                                 <div className="form-group ">
                                    <input type="text" className="form-control floating" placeholder="Email" onChange={e => this.handlerEmail(e)} />
                            
                                    <span class="valiError">{this.state.EmailsError}</span>
                                    <span className="valiError" >{this.state.EmailError}</span>
                                 </div>
                                 <div className="form-group ">
                                    <input type="text" className="form-control floating" placeholder="Mobile Number" onChange={e => this.handlerMobile(e)} />
                                  
                                    <span class="valiError">{this.state.mobileError}</span>
                                 </div>
                                 <div className="form-group ">
                                    <input type="text" className="form-control floating" placeholder="GST.No." onChange={e => this.handlerGst(e)} />
                                  
                                    <span class="valiError">{this.state.gstError}</span>

                                 </div>
                                 <div className="form-group ">
                                    <input type="text" className="form-control floating" placeholder="Registration No" onChange={e => this.handlerRegister(e)} />
                                 
                                    <span class="valiError">{this.state.registerError}</span>

                                 </div>
                                 <div className="form-group ">
                                    <input type="password" className="form-control floating" placeholder="password" onChange={e => this.handlerPassword(e)} />
                                  
                                    <span class="valiError">{this.state.PasswordError}</span>
                                 </div>
                                 <div className="form-group">
                                    <input type="checkbox" class="form-check-input" require /> &nbsp;&nbsp;
                                    <label class="form-check-label">i accept the terms&conditions</label>
                                 </div>
                        
                                 <div className="text-end">
                                    <a className="forgot-link" href="/hospital-clinic-login">Already have an account?</a>
                                 </div>
                                 <button className="btn btn-primary w-100 btn-lg login-btn" type="submit">Signup</button>
                                 {/* <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                 </div> */}
                                 {/* <div className="row form-row social-login">
                                    <div className="col-6">
                                       <a href="#" className="btn btn-facebook w-100"><i className="fab fa-facebook-f me-1"></i> Login</a>
                                 </div>
                                    <div className="col-6">
                                       <a href="#" className="btn btn-google w-100"><i className="fab fa-google me-1"></i> Login</a>
                                    </div>
                                 </div> */}
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </>
    );
  }
}
export default HospitalRegister;
