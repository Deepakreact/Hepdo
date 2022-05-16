import React, { Component } from "react";
import ClinicDashboards from "../components/ClinicDashboards.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class ClinicDashboard extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <ClinicDashboards />
        <Footer />
      </div>
    );
  }
}
export default ClinicDashboard;
