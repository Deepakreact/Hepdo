import React, { Component } from "react";


class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
        email:"",
        password:"",
        EmailsError:"",
        PasswordError:"",
        Error:"",
        success:"",
        userErrsor:""
      };
    }

   handlerName = (event) => {
      this.setState({
       EmailsError:"",
       userErrsor:"",
       email: event.target.value,
      });
    };
    handlerPassword = (event)=>{
      this.setState({
         PasswordError:"",
         password: event.target.value,
        });
        
    };


    handlerSubmit = (event) => {
      event.preventDefault();
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

      
      fetch("http://admin.heapdo.com/api/patientlogin", {
         "method": "POST",
         "headers": {
            Accept: 'application/json',
           'Content-Type': 'application/json'
         },
         "body": JSON.stringify({
           email: this.state.email,
           password: this.state.password,
         })
       })
       .then(response => response.json())
       .then(response => {
          if(response.status==200){
            this.setState({
               success:"login Successfull!",
            })
            window.sessionStorage.setItem("userdata",response.success.$oid);
            setTimeout(function() {
               window.location.href = "/userdashboard";
              }, 2000);
          } else if(response.status==201) {
              this.setState({
               EmailsError:"",
               PasswordError:"",
               Error:"Username & Password Was Wrong",
              }); 
          } else if(response.status==204){
            this.setState({
               userErrsor:response.success,
            })
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
     <div class="content mycontent">
            <div class="container-fluid mymargin">
               <div class="row">
                  <div class="col-md-8 offset-md-2">
                     <div class="account-content">
                        <div class="row align-items-center justify-content-center">
                           <div class="col-md-7 col-lg-6 login-left">
                              <img src="assets/img/login-banner.png" class="img-fluid" alt="Doccure Register" />
                           </div>
                           <div class="col-md-12 col-lg-6 login-right">
                              <div class="login-header">
                                 <h3>Login Individual/Patient</h3>
                              </div>
                              <form onSubmit={this.handlerSubmit}>
                                 <div class="form-group form-focus">
                                    <input  type="text" class="form-control floating" onChange={e => this.handlerName(e)} placeholder='Heapdo/Email/mobile/Aadhar'/>
                                    
                                     <span class="valiError">{this.state.EmailsError}</span>
                                     <span class="valiError">{this.state.userErrsor}</span>
                                 </div>
                              
                                 <div class="form-group form-focus">
                                    <input type="password" class="form-control floating" onChange={e =>this.handlerPassword(e)} placeholder='Enter Password' />
                                    
                                    <span class="valiError">{this.state.PasswordError}</span>
                                    <span class="valiError">{this.state.Error}</span>
                                    <span class="valiError">{this.state.success}</span>
                                 </div>
                                 <div class="text-end">
                                    <a class="forgot-link" href="/patientregister">Register?</a>
                                 </div>
                                 <button class="btn btn-primary w-100 btn-lg login-btn" type="submit">Login</button>
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
export default Login;
