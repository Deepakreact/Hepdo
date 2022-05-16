import React, { Component } from "react";
import Login from "../components/Login.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class LoginPage extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <Login />
        <Footer />
      </div>
    );
  }
}
export default LoginPage;
