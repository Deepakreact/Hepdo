import React, { Component } from "react";
import PathologyRegister from "../components/PathologyRegister.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class Pathology extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <PathologyRegister />
        <Footer />
      </div>
    );
  }
}
export default Pathology;
