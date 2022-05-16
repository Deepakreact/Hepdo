import React, { Component } from "react";
import HospitalProfile from "../components/HospitalProfile.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import HospitalProfile2 from "../components/HospitalProfile2.js";
//import HospitalProfile2 from "../components/HospitalProfile2.js";

class Hospitalpage extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <HospitalProfile/>
        <Footer />
      </div>
    );
  }
}
export default Hospitalpage;
