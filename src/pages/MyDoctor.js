import React, { Component } from "react";
import MydocterList from "../components/MydocterList.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Mydoctorlist2 from "../components/Mydoctorlist2.js";

class LoginPage extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
    {/*<MydocterList />*/}
          <Mydoctorlist2/>
        <Footer />
      </div>
    );
  }
}
export default LoginPage;
