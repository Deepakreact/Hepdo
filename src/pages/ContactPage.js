import React, { Component } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../css/contactpage.css'

export default class ContactPage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       email:"",
       message:""
    }
  }
  render() {
    return (
        <div>
        <Header/>
        <div className='contact-page'>
        <div className='contact-page-div'>
        <div className='contact-page-h3'>
        <h3>Have A Query Feel Free To Contact</h3>
    
        
        </div>
        <form className='contact-page-form'>
        <input type='text' value={this.state.name} onChange={(e)=>this.setState(e.target.value)} placeholder="name"></input>
        <input type='text' value={this.state.email} onChange={(e)=>this.setState(e.target.value)} placeholder="email"></input>
        <input type='text' value={this.state.message} onChange={(e)=>this.setState(e.target.value)} placeholder="message"></input>
        <button type='submit' className='contact-page-btn'>Submit</button>
     
        
        
        </form>
        
        </div>
    
        
        <About/>
        
        </div>
     

    
   
      <Footer/>
      </div>
    )
  }
}
