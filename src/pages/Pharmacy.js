import React, { Component } from "react";
import PharmacyRegister from "../components/PharmacyRegister.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class Pharmacy extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <PharmacyRegister />
        <Footer />
      </div>
    );
  }
}
export default Pharmacy;
