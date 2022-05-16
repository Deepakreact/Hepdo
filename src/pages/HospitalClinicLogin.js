import React, { Component } from "react";
import HospitalRegister from "../components/HospitalRegister";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class LoginPage extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <HospitalRegister />
        <Footer />
      </div>
    );
  }
}
export default LoginPage;
