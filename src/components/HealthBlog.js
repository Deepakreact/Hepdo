import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
class HealthBlog extends Component{
   constructor(props) {
      super(props);
      this.state = {
        error: null,
        MyHealt: [],
      };
    }
  
    componentDidMount() {
      const apiUrl = "http://admin.heapdo.com/api/healthblog";
      fetch(apiUrl)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
               MyHealt:result.data,
            });
          },
          (error) => {
            this.setState({ error });
          }
        );
    }
    render(){
      const { error, MyHealt } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
            <section className="health-blog blog-parts">
            <div className="testimonial2 py-5">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="section-header-four text-center aos aos-init aos-animate" data-aos="fade-up">
                           <h2 className="title-four"><span className="color-primary">Health Blog</span></h2>
                           <p className="sub-title color-grey">Access to expert physicians and surgeons, advanced technologies and top-quality surgery facilities right here.</p>
                        </div>
                     </div>
                  </div>
                  <div className="heading">
                  </div>
                  <Carousel  infiniteLoop autoPlay>
                  {MyHealt.map((itemshealth, index) => (
                     <div className="item" key={index}>
                        <div className="row position-relative">
                          
                           <div className="col-lg-6 col-md-6 ">
                              <h4 className="my-3">{itemshealth.category}</h4>
                              
                              <p>
                              {itemshealth.description}
                              </p>
                              <div className="text-end btn-end">
                              <Link className="btn btn-one" to={`/details/${itemshealth.slug}`}>View More</Link>
                              </div>
                           </div>
                           <div className="col-lg-6 col-md-6 image-thumb d-none d-md-block">
                              <a href="blog-details.html">
                              <img src={itemshealth.image} alt="wrapkit" className="rounded-circle img-fluid" />
                              </a>
                           </div>
                        </div>
                     </div>
                     ))}
                    </Carousel>
                  
               </div>
               </div>
         </section>   
    );
        }
}
}
export default HealthBlog;