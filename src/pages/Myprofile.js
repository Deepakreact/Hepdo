import React, { Component } from "react";
import MyProfileComp from "../components/MyProfileComp.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class Myprofile extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <MyProfileComp />
        <Footer />
      </div>
    );
  }
}
export default Myprofile;
