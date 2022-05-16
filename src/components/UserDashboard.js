import React, { Component } from "react";
import SideBanr from "./SideBar.js";
class UserDashboard extends Component {
  render() {
    return (
    <>
    <div class="breadcrumb-bar">
            <div class="container-fluid">
               <div class="row align-items-center">
                  <div class="col-md-12 col-12">
                     <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="#">Home</a></li>
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
                  <SideBanr />
                  <div class="col-md-7 col-lg-8 col-xl-9">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="card dash-card">
                              <div class="card-body">
                                 <div class="row">
                                    <div class="col-md-12 col-lg-4">
                                       <div class="dash-widget dct-border-rht">
                                          <div class="circle-bar circle-bar1">
                                             <div class="circle-graph1" data-percent="1">
                                                <img src="assets/img/icon-01.png" class="img-fluid" alt="patient" />
                                             </div>
                                          </div>
                                          <div class="dash-widget-info">
                                             <h6>Total Appoinment</h6>
                                             <h3>1</h3>
                                             {/* <p class="text-muted">Till Today</p> */}
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4">
                                       <div class="dash-widget dct-border-rht">
                                          <div class="circle-bar circle-bar2">
                                             <div class="circle-graph2" data-percent="1">
                                                <img src="assets/img/icon-02.png" class="img-fluid" alt="Patient" />
                                             </div>
                                          </div>
                                          <div class="dash-widget-info">
                                             <h6>Today Appoinment</h6>
                                             <h3>1</h3>
                                             {/* <p class="text-muted">06, Nov 2019</p> */}
                                          </div>
                                       </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4">
                                       <div class="dash-widget">
                                          <div class="circle-bar circle-bar3">
                                             <div class="circle-graph3" data-percent="">
                                                <img src="assets/img/icon-03.png" class="img-fluid" alt="Patient" />
                                             </div>
                                          </div>
                                          <div class="dash-widget-info">
                                             <h6>Appoinments</h6>
                                             <h3>1</h3>
                                             <p class="text-muted">06, Apr 2019</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-12">
                           <h4 class="mb-4">My Appoinment</h4>
                           <div class="appointment-tab">
                             
                              <div class="tab-content">
                                 <div class="tab-pane show active" >
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
                                                            <a href="patient-profile.html" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg" alt="User Image" /></a>
                                                            <a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
                                                         </h2>
                                                      </td>
                                                      <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
                                                      <td>General</td>
                                                      <td>New Patient</td>
                                                      <td class="text-center">$150</td>
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
         </>
    );
  }
}
export default UserDashboard;
