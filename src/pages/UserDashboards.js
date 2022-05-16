import React, { Component } from "react";
import UserDashboard from "../components/UserDashboard.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

class UserDashboards extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
          <UserDashboard />
        <Footer />
      </div>
    );
  }
}
export default UserDashboards;
