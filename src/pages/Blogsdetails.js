import React, { Component } from "react";
//import Details from "../components/Details.js";
import Details2 from "../components/Details2.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

class Blogsdetails extends Component {


  render() {
    const {match:{params}} = this.props;
    //alert(params.slug);
    return (
      <div>
      <Header/>
      <div class="main-wrapper">
   
          <Details2 Slug={params.slug} />
      </div>
      <Footer/>
      </div>
    );
  }
}
export default Blogsdetails;
