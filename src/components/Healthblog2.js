import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../css/mission.css'


class HealthBlog2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      
      healthblog:[]
    };
  }



  componentDidMount(){
    const add = "http://admin.heapdo.com/api/healthblog";
    fetch(add)
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            healthblog: res.data,
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
      <div className='hblog'>

      {/*<h1>Health Blog</h1>
    <p>Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>*/}
      <Carousel responsive={this.responsive} className="a-crousel" infinite={true}   arrows= {false} autoPlay={true} autoPlaySpeed={5000} >
      {
        this.state.healthblog.map((ad)=>
        <div>
        <div className='mission'>
        <div className='mission-content'>
        <h1>{ad.title}</h1>
        <p>{ad.description}

        <a href={`/details/${ad.slug}`}> <button className='kbtn' >Continue....</button></a>
        
        </p>
        <a href='/blogs'>
           <button className='mbtn' >View More</button>
        
        </a>
     
        
        </div>
        
        <div className='img-div'>
        <img src={ad.image} className='m-img' alt='/'></img>
        
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

export default HealthBlog2;
