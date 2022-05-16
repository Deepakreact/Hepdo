import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'
//import '../css/our.css'
class Our extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      Mydata: [],
    };
  }

  componentDidMount() {
    const apiUrl = "http://admin.heapdo.com/api/blog";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            Mydata: result.data,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, Mydata } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
        
        <section className="health-blog">
          <div className="testimonial2 py-5">
            <div className="container">
            
              <div className="heading"></div>
              <Carousel autoPlay={true} infiniteLoop={true} interval={4000}>
                {Mydata.map((itemss, index) => (
                  <div className="item item2" key={index}>
                    <div className="row position-relative">
                    
                      <div className="col-lg-6 col-md-6 image-thumb d-none d-md-block img-div">
                      <Fade right>
                        <img
                          src={itemss.image}
                          alt="wrapkit"
                          className="mission-img"
                        />
                        </Fade>
                     
                      </div>
                      <Fade left>
                      
                      <div className="col-lg-6 col-md-6 ">
                        <h4 className="my-3">{itemss.category}</h4>
                        <p>{itemss.description}</p>
                        <div className="text-end btn-end">
                        <Link to={`/details/${itemss.slug}`}  className="btn btn-one" >View More</Link>
                        </div>
                      </div>
                      </Fade>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        
        </div>
      );
    }
  }
}
export default Our;
