import React, { Component } from "react";
import Slider from "react-slick";

import "react-multi-carousel/lib/styles.css";
import '../css/help.css'


export default class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div>
        
        <Slider {...settings}  autoplay={true} className='slider' dots={false} arrows={false} infinite={true}>
          <div>
            <h3 className="cause">Cancer</h3>
          </div>
          <div>
            <h3  className="cause">Kidney Transplant</h3>
          </div>
          <div>
            <h3 className="cause">Heart Transplant </h3>
          </div>
          <div>
            <h3 className="cause">Hair Transplant</h3>
          </div>
         
          
        </Slider>
      </div>
    );
  }
}

