import React, { Component } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../css/aboutpage.css'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
      
      <Header/>
      
      <div className='about-page'>
   
      <div className='about-page-right'>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
       nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, constetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      </div>

      <About/>
      
      </div>
 

      
      
      
      
      
      <Footer/>
      </div>
    )
  }
}
