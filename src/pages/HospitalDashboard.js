import React, { Component } from "react";
import HospitalClintDashboard from "../components/HospitalClintDashboard";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class HospitalDashboard extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
        <HospitalClintDashboard />
        <Footer />
      </div>
    );
  }
}
export default HospitalDashboard;
