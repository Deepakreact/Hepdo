import React, { Component } from "react";
import SideBarHospital from "./SideBarHospital.js";

class HospitalProfile extends Component {
  render() {
    return (
    <>
    <div className="breadcrumb-bar">
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-md-12 col-12">
                     <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="#">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
                     <div className="card">
                        <div className="card-body">
                           <h4 className="card-title">Basic Information</h4>
                           <div className="row form-row">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Name <span className="text-danger">*</span></label>
                                    <input type="text"  className="form-control" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text"  className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Emergency contact</label>
                                    <input type="text"  className="form-control"  />
                                 </div>
                              </div>
                              
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Gender</label>
                                    <select className="select form-control" >
                                       <option>Select</option>
                                       <option>Male</option>
                                       <option>Female</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Date of Birth</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Aadhar Number</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Blood Group</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Chronic Condition</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Past surgeries</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Injuries</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Allergies</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              

                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Occupation</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Food Habits</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Smoking habit</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Alcohol habit</label>
                                    <input type="text" className="form-control"  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Profile Image</label>
                                    <input type="file" className="form-control"  />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-body">
                           <h4 class="card-title">Marital status</h4>
                           <div className="col-md-6">
                                 <div class="form-check-inline">
                                    <label class="form-check-label" for="radio2">Married &nbsp;&nbsp;<input type="radio" class="form-check-input" id="radio2" name="maritalstatus" value="married" checked/>
                                    </label>
                                 </div>
                                 <div class="form-check-inline">
                                    <label class="form-check-label" for="radio2"> unmarried &nbsp;&nbsp;
                                       <input type="radio" class="form-check-input" id="radio2" name="maritalstatus" value="unmarried" />
                                    </label>
                                 </div>
                              </div>
                        </div>
                     </div>
                     
                     {/* <div className="card">
                           <div className="awards-info">
                              <div className="row form-row awards-cont">
                                 <div className="col-12 col-md-5">
                                    <div className="form-group">
                                       <label>Awards</label>
                                       <input type="text" className="form-control" />
                                    </div>
                                 </div>
                                 <div className="col-12 col-md-5">
                                    <div className="form-group">
                                       <label>Year</label>
                                       <input type="text" className="form-control" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="add-more">
                              <a href="javascript:void(0);" className="add-award"><i className="fa fa-plus-circle"></i> Add More</a>
                           </div>
                        
                     </div> */}
                    
                    
                     <div className="submit-section submit-btn-bottom">
                        <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </>
    );
  }
}
export default DocterProfiles;
