import React, { Component } from "react";
import CreateDocterPage from "../components/CreateDocterPage.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class CreateDocter extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <CreateDocterPage />
        <Footer />
      </div>
    );
  }
}
export default CreateDocter;
