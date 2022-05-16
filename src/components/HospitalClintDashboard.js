import React, { Component } from "react";
import SideBarHospital from "./SideBarHospital";
class HospitalClintDashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
      error: null,
      myprofile: [],
      };
   }
  componentDidMount() {
   var  myuser = window.sessionStorage.getItem("userdata")
   const apiUrl = "http://admin.heapdo.com/api/getuserdetails/"+(myuser);;
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
      <div class="breadcrumb-bar">
            <div class="container-fluid">
               <div class="row align-items-center">
                  <div class="col-md-12 col-12">
                     <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="/">Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                     </nav>
                     <h2 class="breadcrumb-title">Dashboard</h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="content">
            <div class="container-fluid">
               <div class="row">
                  <SideBarHospital />
                  <div class="col-md-7 col-lg-8 col-xl-9">
                  <div class="row">
                        <div class="col-md-12">
                           <div class="card dash-card">
                              <div class="card-body">
                                 <div class="row">
                                   
                                    <div class="col-md-12 col-lg-4">
                                       <div class="dash-widget dct-border-rht">
                                          <div class="circle-bar circle-bar2">
                                             <div class="circle-graph2" data-percent="65">
                                                <img src="assets/img/icon-02.png" class="img-fluid" alt="Patient" />
                                             </div>
                                          </div>
                                          <div class="dash-widget-info">
                                             <h6>Today Patient</h6>
                                             <h3>160</h3>
                                             <p class="text-muted">06, Nov 2019</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4">
                                       <div class="dash-widget dct-border-rht">
                                          <div class="circle-bar circle-bar1">
                                             <div class="circle-graph1" data-percent="75">
                                                <img src="assets/img/icon-01.png" class="img-fluid" alt="patient" />
                                             </div>
                                          </div>
                                          <div class="dash-widget-info">
                                             <h6>Total Patient</h6>
                                             <h3>1500</h3>
                                             <p class="text-muted">Till Today</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4">
                                       <div class="dash-widget">
                                          <div class="circle-bar circle-bar3">
                                             <div class="circle-graph3" data-percent="50">
                                                <img src="assets/img/icon-03.png" class="img-fluid" alt="Patient" />
                                             </div>
                                          </div>
                                          <div class="dash-widget-info">
                                             <h6>Appoinments</h6>
                                             <h3>85</h3>
                                             <p class="text-muted">06, Apr 2019</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  <div class="col-md-12">
                           <div class="appointment-tab">
                              <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                 <li class="nav-item">
                                    <a class="nav-link active" href="#upcoming-appointments" data-bs-toggle="tab">Upcoming</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="#today-appointments" data-bs-toggle="tab">Today</a>
                                 </li>
                              </ul>
                              <div class="tab-content">
                                 <div class="tab-pane show active" id="upcoming-appointments">
                                    <div class="card card-table mb-0">
                                       <div class="card-body">
                                          <div class="table-responsive">
                                             <table class="table table-hover table-center mb-0">
                                                <thead>
                                                   <tr>
                                                      <th>Patient Name</th>
                                                      <th>Appt Date</th>
                                                      <th>Purpose</th>
                                                      <th>Type</th>
                                                      <th class="text-center">Paid Amount</th>
                                                      <th></th>
                                                   </tr>
                                                </thead>
                                                <tbody>
                                             
                                                  
                                                  
                                                
                                                   
                                                   <tr>
                                                      <td>
                                                         <h2 class="table-avatar">
                                                            <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient5.jpg" alt="User Image" /></a>
                                                            <a href="patient-profile.html">Gina Moore <span>#PT0005</span></a>
                                                         </h2>
                                                      </td>
                                                      <td>27 Oct 2019 <span class="d-block text-info">8.00 AM</span></td>
                                                      <td>General</td>
                                                      <td>Old Patient</td>
                                                      <td class="text-center">$250</td>
                                                      <td class="text-end">
                                                         <div class="table-action">
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                            </a>
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                            </a>
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
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
                                 <div class="tab-pane" id="today-appointments">
                                    <div class="card card-table mb-0">
                                       <div class="card-body">
                                          <div class="table-responsive">
                                             <table class="table table-hover table-center mb-0">
                                                <thead>
                                                   <tr>
                                                      <th>Patient Name</th>
                                                      <th>Appt Date</th>
                                                      <th>Purpose</th>
                                                      <th>Type</th>
                                                      <th class="text-center">Paid Amount</th>
                                                      <th></th>
                                                   </tr>
                                                </thead>
                                                <tbody>
                                                 
                                                 
                                                   
                                                
                                                   
                                                   <tr>
                                                      <td>
                                                         <h2 class="table-avatar">
                                                            <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image" /></a>
                                                            <a href="patient-profile.html">Harry Williams <span>#PT0011</span></a>
                                                         </h2>
                                                      </td>
                                                      <td>14 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
                                                      <td>General</td>
                                                      <td>New Patient</td>
                                                      <td class="text-center">$450</td>
                                                      <td class="text-end">
                                                         <div class="table-action">
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                            <i class="far fa-eye"></i> View
                                                            </a>
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                            <i class="fas fa-check"></i> Accept
                                                            </a>
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                            <i class="fas fa-times"></i> Cancel
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
export default HospitalClintDashboard;
