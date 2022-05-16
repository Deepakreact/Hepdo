import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBarHospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
    error: null,
    myprofile: [],
    };
 }

componentDidMount() {
 var  myuser = window.sessionStorage.getItem("userdata") 
 const apiUrl = "http://admin.heapdo.com/api/gethospital/"+(myuser);;
 fetch(apiUrl)
   .then((res) => res.json())
   .then(
     (result) => {
       this.setState({
          myprofile: result.data,
       });
     },
     (error) => {
       this.setState({ error });
     }
   );
}
  
  render() {
   
    return (
      <div>
      <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
        <div className="profile-sidebar">
          <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget">
              <div className="circle-bar circle-bar2">
                <div className="circle-graph2" data-percent="20">
                  <img
                    src={this.state.myprofile.image}
                    className="img-fluid"
                    alt="patient"
                  />
                </div>
              </div>
              <h3>{this.state.myprofile.name}</h3>
              <p>My ID: {this.state.myprofile.hid}</p>
              <Link to={`/hospital-profile`} classNameName="myprofile" >
                View and edit profile
              </Link>
              <p>20% completed</p>
              <div className="profile-det-info">
                <div className="patient-details">
                  {/* <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5> */}
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-widget">
            <nav className="dashboard-menu">
              <ul>
                <li className="active">
                <Link classNameName="myprofile" to="/hospital-dashboard"> <i className="fas fa-columns"></i>
                    <span>Dashboard</span></Link>
                </li>
                <li>
                <Link  to={`/my-doctor`} className="myprofile">
                    <i className="fas fa-calendar-check"></i>
                    <span>My Doctor</span>
                 </Link>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fas fa-user-injured"></i>
                    <span>Health records</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-hourglass-start"></i>
                    <span>Buy medicine</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-clock"></i>
                    <span>Book lab test</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-file-invoice"></i>
                    <span>Health Tips/blogs</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-file-invoice-dollar"></i>
                    <span>Blood donation request</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-star"></i>
                    <span>Raise fund to support treatment</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-comments"></i>
                    <span>About HeaPDo</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-user-cog"></i>
                    <span>Privacy policy</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-share-alt"></i>
                    <span>Terms and conditions</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-lock"></i>
                    <span>Contact us</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Share the App</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Rate HeapDO</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default SideBarHospital;
