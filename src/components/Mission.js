import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../css/mission.css'


class Mission extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      
      mission:[]
    };
  }



  componentDidMount(){
    const add = "http://admin.heapdo.com/api/blog";
    fetch(add)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            mission: res.data,
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
      <Carousel responsive={this.responsive} className="a-crousel" infinite={true}   arrows= {false} autoPlay={true} >
      {
        this.state.mission.map((ad)=>
        <div>
        <div className='mission'>
        <div className='img-div'>
        <img src={ad.image} className='m-img vm-img'></img>
        
        </div>
        <div className='mission-content'>
        <h1>{ad.title}</h1>
        <p>{ad.description}</p>
        <a href='/blogs'>
           <button className='mbtn' >View More</button>
        
        </a>
     
        
        </div>
        
        </div>
     
        
        </div>
        
        )
      }
      
      
      
      </Carousel>

      
   
     
     
      </div>
    );
  }
}

export default Mission;
