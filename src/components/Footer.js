import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal'
import '../css/footer.css'
class Footer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       click:false,
       name:'',
       email:'',
       message:'',
       success: ''
    }
  }
  openModel=()=>{
    this.setState(
      {click:true}
    )
  }
  fnameHandler=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  femailHandler=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  fmessageHandler=(e)=>{
    this.setState({
      message:e.target.value
    })
  }
  submitHandler=(e)=>{
    e.preventDefault()
    fetch("http://admin.heapdo.com/api/querysubmitted", {
      "method": "POST",
      "headers": {
         Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.password,
      })
    }).then((respone)=>respone.json())
    .then((response)=>{
      if(response.status==200){
        this.setState({
           success:"query submited!",
           name:'',
           email:'',
           message:''
        })
        
        setTimeout(function() {
           window.location.href = "/";
          }, 20000);
      }

    }
    
    ).catch((err)=>console.log(err.message))

    



    


  }




  render() {
    return (
      <div>
        <footer className="footer footer-display">

          <div className="footer-top">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-about">
                    <div className="footer-logo">
                      <img
                        src="https://gazingdev.website/cloud-hospitals/images/cloud.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="footer-about-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="social-icon">
                        <ul>
                          <li>
                            <a href="/" target="_blank">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" target="_blank">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" target="_blank">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" target="_blank">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/" target="_blank">
                              <i className="fab fa-dribbble"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">About Us</h2>
                    <ul>
                      <li>
                        <a href="/">Team Heapdo </a>
                      </li>
                      <li>
                        <a href="/aboutpage">Our Partners </a>
                      </li>
                      <li>
                        <a href="/contactpage">Success Stories</a>
                      </li>
                      <li>
                        <a href="/qpage">In News</a>
                      </li>
                      <li>
                        <a href="/login">Blogs</a>
                      </li>
                    </ul>
    </div>
  </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Impotant Links</h2>
                    <ul>
                      <li>
                        <a href="/">Home </a>
                      </li>
                      <li>
                        <a href="/blogs">Blog </a>
                      </li>
                      <li>
                        <a href="/aboutpage">About Us </a>
                      </li>
                      <li>
                        <a href="/contactpage">Contact us </a>
                      </li>
                      <li>
                        <a href="/qpage">FAQs </a>
                      </li>
                      <li>
                        <a href="/login">Sign up/login</a>
                      </li>
                      <li>
                        <Link to={`/privacypolicy`}>PrivacyPolicy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Info</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <span>
                          <i className="feather-map-pin"></i>
                        </span>
                        <p>
                          302, D 247/A4 Procapitus Business Park,
                          <br /> Sector 63, Noida Uttar Pradesh,
                          <br /> 201301
                        </p>
                      </div>
                      <p>
                        <i className="feather-phone"></i>
                        0120 408 0513
                      </p>
                      <p className="mb-0">
                        <i className="feather-mail"></i>
                        <a
                          href=""
                          className="__cf_email__"
                          data-cfemail="11757e7272646374517469707c617d743f727e7c"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container-fluid">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-text">
                      <p className="wow fadeInUp">
                        Copyright © 2022, All Right Reserved
                        <a
                          href="https://www.gazingtechnosoft.com/"
                          target="_blank"
                        >
                          Gazing Technosoft Pvt. Ltd.
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="copyright-menu">
                      <ul className="policy-menu">
                        <li>
                          <a href="/">Terms and Conditions</a>
                        </li>
                        <li>
                          <a href="/">Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div id="infom">
          <marquee className='marque'>
            <a href="/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              One of the world’s leading hospitals providing safe &amp;
              compassionate care at its best for .
            </a>
          </marquee>
        </div>

        
          <div  className='query'>
          <h3 onClick={this.openModel}>Raise blood Request</h3>
          
     
          
          </div>
        
    
        {
          this.state.click && (<Modal isOpen={true} className='model'>
          <button onClick={()=>this.setState({click:false})} className="close-btn">x</button>
          <div className="form-c">
          <form onSubmit={this.submitHandler}>
          
 

            <input type='text' value={this.state.name} onChange={(e)=>this.fnameHandler(e)} placeholder='name'></input>
            <input type='text' value={this.state.email} onChange={(e)=>this.femailHandler(e)} placeholder='email'></input>
            <textarea type='text' value={this.state.message} onChange={(e)=>this.fmessageHandler(e)} placeholder='message' maxlength="50">Enter text here</textarea>
    
            <button type="submit" >Submit</button>
            </form>
            </div>
            
            </Modal>)
        }
      </div>
    );
  }
}

export default Footer;
