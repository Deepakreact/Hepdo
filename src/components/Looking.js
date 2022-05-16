import React, { Component } from "react"

class Looking extends Component{
   constructor(props) {
      super(props);
      this.state = {
        error: null,
        addvertige:""
      };
    }

   componentDidMount() {
      const addvtaigment = " http://admin.heapdo.com/api/advtaigment";
        fetch(addvtaigment)
        .then((ress) => ress.json())
        .then(
          (result1) => {
            this.setState({
              addvertige: result1.item[0],
            });
          },
          (error) => {
            this.setState({ error });
          }
        );
    }

    render(){
        return (
            <section className="looking-section-four">
            <div className="container">
            <div className="row">
            
            <div className="col-md-9">
              <div
                className="section-header-four text-center aos left-text"
                data-aos="fade-up"
              >
                <h2>
                  What are you <span className="color-primary">looking</span> for?
                </h2>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
               <div className="row looking-row justify-content-center aos" data-aos="fade-up">
                  <div className="col-lg-4 col-md-6 looking-col d-flex">
                     <div className="looking-grid-four w-100">
                        <div className="looking-box-four">
                           <div className="looking-inner-box">
                              <div className="looking-info-four">
                                 <img src="https://preview.moxcreative.com/godo/wp-content/uploads/sites/24/2022/03/mockup_1.png" />
                                 <a href="search.html">
                                 <i className="fas fa-user-md me-2"></i> Visit a Doctor
                                 </a>
                                 <p>We hire the best specialists to deliver top-notch diagnostic services for </p>
                              </div>
                              <div className="looking-four-btn">
                                 <a href="">
                                 Book Now <i className="fas fa-arrow-right ms-2"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex looking-col">
                     <div className="looking-grid-four w-100">
                        <div className="looking-box-four">
                           <div className="looking-inner-box">
                              <div className="looking-info-four looking-info-sec">
                                 <img src="https://kodesolution.com/html/2015/medinova-b5/images/about/2.png" />
                                 <a href="pharmacy-search.html">
                                 <i className="fas fa-tablets me-2"></i> Find a Pharmacy
                                 </a>
                                 <p>We provide the a wide range of medical services, so every person </p>
                              </div>
                              <div className="looking-four-btn">
                                 <a href="">
                                 Find Now <i className="fas fa-arrow-right ms-2"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex looking-col">
                     <div className="looking-grid-four w-100">
                        <div className="looking-box-four">
                           <div className="looking-inner-box">
                              <div className="looking-info-four four-sec">
                                 <img src=" https://aonetheme.com/mfine/images/banner2/doctor.png" />
                                 <a href="#">
                                 <i className="fas fa-vial me-2"></i> Find a Lab
                                 </a>
                                 <p>We use the first-className medical equipment for timely diagnostics </p>
                              </div>
                              <div className="looking-four-btn">
                                 <a href="">
                                 Book Now <i className="fas fa-arrow-right ms-2"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
}
}
export default Looking;