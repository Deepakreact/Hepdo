import React, { Component } from "react";
import Hospitaclinicllogin from "../components/Hospitaclinicllogin.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class LoginPage extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <Hospitaclinicllogin />
        <Footer />
      </div>
    );
  }
}
export default LoginPage;
