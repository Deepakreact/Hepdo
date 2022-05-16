import React, { Component } from "react"
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'

import '../css/header.css'
//import { Dropdown } from "bootstrap";
class Header extends Component{
   
   constructor(props) {
      super(props);
      this.state = {
        userData:"",
        click:false,
        value:''
      };
    }
    handlelogout = (event) => {
      window.sessionStorage.removeItem("userdata");
      setTimeout(function() {
         window.location.href = "/login";
        }, 2000);
      // this.setState({
      //  EmailsError:"",
      //  userErrsor:"",
      //  email: event.target.value,
      // });
    };

    openModel=()=>{
      this.setState(
        {click:true}
      )
    }
  
  



    render(){
      var  myuser = window.sessionStorage.getItem("userdata");
        return (
         <header className="header header-trans header-trans-two">
         <div className="nav-bg-two">
       
            <nav className="navbar navbar-expand-lg header-nav no-border">
            
               <div className="navbar-header">
               <a id="mobile_btn" href="/">
               <span className="bar-icon blue-bar">
               <span>p</span>
               <span>p</span>
               <span>p</span>
               </span>
               </a>
                  
                  <a href="/" className="navbar-brand logo">
                  <img src="https://gazingdev.website/cloud-hospitals/images/cloud.png" className="img-fluid" alt="Logo" />
                  </a>
               </div>
               <div className='menuicon'>
               <MenuIcon onClick={this.openModel}/>
               
               </div>

        
            
               <div>

               {
                  this.state.click && (<Modal isOpen={true} className='sidemodel'>

                  <img src="https://gazingdev.website/cloud-hospitals/images/cloud.png" alt="/"></img>
                  <Fade left>
                  
                  
                
                  <button onClick={()=>this.setState({click:false})} className="close-btn">x</button>
                  <div className="smmenu">
                  <a href="/">Home</a>
                  <a href="/aboutpage">About Us</a>
                  <a href="/blogs">Health Update</a>
                  <a href="/contactpage">Contact  Us</a>
                  <a href="/qpage">FAQs</a>
                  <div className="dropdown dsidebar">
                  <span><i className="feather-user me-1"></i>Sign up/ Login</span>
                  <div className="dropdown-content dsidebar-content">
                  <Link to={`/login`}>I am Individual/Patient</Link>
                  <Link to={`/hospital-clinic-login`}>I am a  Clinic/Hospital</Link>
                  <Link to={`/pharmacy`}>I am Pharmacy</Link>
                  <Link to={`/pathology`}>I am Pathology</Link>
                  </div>
               </div>
                

                  
                  
 
                
                  </div>
                
                  </Fade>
                  
                  
            
                 
                    
                    </Modal>)
                }
                </div>

                

               
               
                  
              
              <div className="main-menu-wrapper">
                  <div className="menu-header">
                     <a href="/" className="menu-logo">
                     <img src="assets/img/logo-one.png" className="img-fluid" alt="Logo" />
                     </a>
                     <a id="menu_close" className="menu-close" href="javascript:void(0);">
                     <i className="fas fa-times"></i>
                     </a>
                  </div>
                  <ul className="main-nav black-font grey-font">
                     <li className="has-submenu "> <Link to="/">Home <i className="fas fa-chevron-down"></i></Link>
                     </li>
                    
                     <li className="has-submenu">
                        <Link to="/aboutpage">About Us</Link>
                        
                     </li>
                     <li className="has-submenu "> <Link to="/blogs">Health Update <i className="fas fa-chevron-down"></i></Link>
                     </li>
                     <li className="has-submenu">
                        <a href="/contactpage">Contact us <i className="fas fa-chevron-down"></i></a>
                     </li>
                     <li className="has-submenu">
                        <Link to='/qpage'>FAQs <i className="fas fa-chevron-down"></i></Link>
                     </li>
                     <li className="login-link has-submenu">
                        <a href="/login">Login / Signup</a>
                        <ul className="submenu">
                           <li><a href="/">Home</a></li>
                           <li><a href="/">Home 2</a></li>
                           <li><a href="/">Home 3</a></li>
                           <li className=""><a href="/">Home 4</a></li>
                           <li><a href="/">Home 5</a></li>
                           <li><a href="/">Home 6</a></li>
                        </ul>
                     </li>
                  </ul>
        </div>
   
     


               
               <ul className="nav header-navbar-rht right-menu">
                  <div id="header-widget-area" className="chw-widget-area widget-area" role="complementary">
                     <div className="social-icon">
                        <ul>
                           <li>
                              <a href="/" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                           </li>
                           <li>
                              <a href="/" target="_blank"><i className="fab fa-twitter"></i> </a>
                           </li>
                           <li>
                              <a href="/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  
                  { myuser  ? (
                     <button  className="dropdown feather-user me-1" onClick={this.handlelogout}>Logout</button>
                  )
                 : ( 
                  <div className="dropdown">
                  <span><i className="feather-user me-1"></i>Sign up/ Login</span>
                  <div className="dropdown-content">
                  <Link to={`/login`}>I am Individual/Patient</Link>
                  <Link to={`/hospital-clinic-login`}>I am a  Clinic/Hospital</Link>
                  <Link to={`/pharmacy`}>I am Pharmacy</Link>
                  <Link to={`/pathology`}>I am Pathology</Link>
                  </div>
               </div>
            )
         }
                  <li>
                     <a href="javascript:void(0)" target="/aboutpage">
                        <div id="mySidenav" className="sidenav nav-sides">
                     <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                     <a href="index.html" className="navbar-brand logo log0-side">
                     <img src="images/cloud.png" className="img-fluid" alt="Logo" />
                     </a>
                     <a href="/" className="side-bars">Home</a>
                     <Link to="/aboutpage" className="side-bars">About</Link>
                     <Link to="/faqpage" className="side-bars">FAQs </Link>
                     <Link to="/contactpage" className="side-bars">Contact us</Link>
                     </div>
                     {/* <span onclick="openNav()" className="bar-three">
                         <i className="fa fa-bars" aria-hidden="true"></i>   
                     </span> */}
                     
                     <div id="main"></div>
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
    );
}
}
export default Header;