import React, { Component } from "react";
import AdvertiseMent from "./AdvertiseMent";

// import axios from "axios";
// import { link } from "react-dom";
class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      banner: [],
      add:[]
    };
  }

  componentDidMount() {
    const apiUrl = "http://admin.heapdo.com/api/banner";
    
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            banner: result.item,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
   
  }
  render() {
    const { error, banner } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <>
          <div className="home-banner-two">
            {banner.map((item) => (
              <div
                className="profile-widget  sdsds"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
               key={item.id.$oid}>
              
              
              </div>
            ))}
            <div className="container">
              <div className="row">
               <div class="col-lg-6 col-md-12 right">
                  <div class="banner-two-form left">
                     <div class="top-d">
                        <div id="info" class="top-adver">
                           <div id="top">
                              <div className="window">
                              <AdvertiseMent/>
                               
                               
                              </div>
                              <a id="close" href="">X</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
                <div className="col-lg-6 col-md-12">
                  <div className="banner-two-form">
                    <div className="app-form aos" data-aos="fade-up">
                      <div className="search-doctor">
                        <div className="search-area">
                          <h2 className="text-center">
                            Search Doctor, Make an Appointment
                          </h2>
                          <form action="/" className="banner-four-search" />
                          <div className="card-body">
                            <ul className="categories">
                              <div className="input-group">
                                <input
                                  type="text"
                                  placeholder="Search..."
                                  className="form-control"
                                />
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="fa fa-search"></i>
                                </button>
                              </div>
                              <li>
                                <a href="/">
                                  Book Consultation <span></span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Buy Medicine <span></span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  Book Lab test <span></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <form />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          
          </div>
     
        </>
      );
    }
  }
}
export default Banner;
