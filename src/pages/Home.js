import React, { Component } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";
//import Our from "../components/Our.js";
//import HealthBlog from "../components/HealthBlog";
import Looking from "../components/Looking.js";
//import FundRaising from "../components/FundRaising";
import Mission from "../components/Mission.js";
import HealthBlog2 from "../components/Healthblog2.js";
import FundRaising2 from "../components/FundRaising2.js";
//import Mission from "../components/Mission.js";
//import Mission from "../components/Mission.js";
import '../css/home.css'
import Help from "../components/Help.js";
import GotHelp from "../components/GotHelp.js";

class Home extends Component {
 





  render() {
    return (
      <div class="main-wrapper">
        <Header />
        <Banner />
        <GotHelp/>
   
        
        <Looking />
        <HealthBlog2/>
        <Mission />

        <div className="home-fund-raising">
        <Help/>
     

        
        </div>
      
        
       
        <Footer />
  
      
        
      
        
      </div>
    );
  }
}
export default Home;
