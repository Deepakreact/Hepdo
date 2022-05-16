import React, { Component } from "react";
import Patient from "../components/Patient.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class PatientRegister extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <Patient />
        <Footer />
      </div>
    );
  }
}
export default PatientRegister;
