
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarHospital from "./SideBarHospital";

class MydocterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      myprofile: [],
      DocterData:[],
      show:false, 
  };
}

  componentDidMount() {
    var myuser = window.sessionStorage.getItem("userdata") //
    // login hospital
 
    console.log(myuser);
    const apiUrl = `http://admin.heapdo.com/api/gethospital/${myuser}`;
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

      const Docter = "http://admin.heapdo.com/api/getdocter/"+myuser;

      // if ? user===myuser i.e hospital login : get the res.item set to State && map it
      // collection===Doctor => hospital_id == Fkey
      // one Hospital => many Doctor
      

      
      
      fetch(Docter)
        .then((res) => res.json())
        .then(
          (res) => {
            console.log(res.item)
            alert(res.item)
            this.setState({
              DocterData: res.item
            });
            
          },
          (error) => {
            this.setState({ error });
          }
        );



  }

  handleModal(){  
    this.setState({show:!this.state.show})  
  } 
  


  render() {
    return (
      <div>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <SideBarHospital />
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="col-md-12">
                  <div className="appointment-tab">
                    <Link to="/create-docter" className="btn btn-success btn-sm">Add Docter</Link>
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="upcoming-appointments"
                      >
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                            
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Doctor Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th className="text-center">Registration No</th>
                                    <th className="text-center">Specialization</th>
                                    {/* <th>Action</th> */}
                                  </tr>
                                </thead>
                                
                                <tbody>



                                
                                
                                
                                
                                {this.state.DocterData.map(items => 
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="/"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient5.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="/">
                                         {items.doctername}<span>{items.hid}</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>{items.docterdob}</td>
                                    <td>{items.docteremail}</td>
                                    <td>{items.doctergender}</td>
                                    <td className="text-center">{items.registrationno}</td>
                                    <td className="text-center">{items.specialization}</td>
                                    {/* <td className="text-end">
                                      <div className="table-action">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="fas fa-check"></i> Accept
                                        </a>
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-sm bg-danger-light"
                                        >
                                          <i className="fas fa-times"></i> Cancel
                                        </a>
                                      </div>
                                    </td> */}
                                  </tr>
                                )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="today-appointments">
                        <div className="card card-table mb-0">
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>Patient Name</th>
                                    <th>Appt Date</th>
                                    <th>Purpose</th>
                                    <th>Type</th>
                                    <th className="text-center">Paid Amount</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <h2 className="table-avatar">
                                        <a
                                          href="/"
                                          className="avatar avatar-sm me-2"
                                        >
                                          <img
                                            className="avatar-img rounded-circle"
                                            src="assets/img/patients/patient11.jpg"
                                            alt="User Image"
                                          />
                                        </a>
                                        <a href="/">
                                          Harry Williams <span>#PT0011</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      14 Nov 2019{" "}
                                      <span className="d-block text-info">
                                        11.00 AM
                                      </span>
                                    </td>
                                    <td>General</td>
                                    <td>New Patient</td>
                                    <td className="text-center">$450</td>
                                    <td className="text-end">
                                      <div className="table-action">
                                        <a
                                          href="/"
                                          className="btn btn-sm bg-info-light"
                                        >
                                          <i className="far fa-eye"></i> View
                                        </a>
                                        <a
                                          href="/"
                                          className="btn btn-sm bg-success-light"
                                        >
                                          <i className="fas fa-check"></i> Accept
                                        </a>
                                        <a
                                          href="/"
                                          className="btn btn-sm bg-danger-light"
                                        >
                                          <i className="fas fa-times"></i> Cancel
                                        </a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    );
  }
}
export default MydocterList;
