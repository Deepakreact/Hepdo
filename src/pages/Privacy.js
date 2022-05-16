import React, { Component } from "react";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class Privacy extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <PrivacyPolicy />
        <Footer />
      </div>
    );
  }
}
export default Privacy;
