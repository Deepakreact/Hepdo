import React, { Component } from "react";
import Blog from "../components/Blog.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Banner from "../components/Banner.js";

class Blogs extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Header />
        
          <Blog/>
        <Footer />
      </div>
    );
  }
}
export default Blogs;
