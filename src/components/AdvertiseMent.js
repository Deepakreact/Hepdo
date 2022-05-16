import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../css/add.css'


class AdvertiseMent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      
      add:[]
    };
  }



  componentDidMount(){
    const add = "http://admin.heapdo.com/api/advtaigment";
    fetch(add)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            add: result.item,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

   responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1// optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  
  render() {
    
    return (
      <div>
      <div className='achievers'>
      <Carousel responsive={this.responsive} className="a-crousel" infinite={true}   arrows= {false} autoPlay={true} >
      {
        this.state.add.map((ad)=>
        <div>
        <img src={ad.image} className='a-img'></img>
        
        </div>
        
        )
      }
      
      
      
      </Carousel>
      </div>
     
     
      </div>
    );
  }
}

export default AdvertiseMent;
