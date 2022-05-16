import React, { Component } from "react";
import SideBarHospital from "./SideBarHospital";
import DatePicker from "react-datepicker";
class CreateDocterPage extends Component {
   constructor(props) {
      super(props)  
      this.state = { 
         yearsData:[], 
         YearsExp:[],
         QualifiCation:[],
         userErrsor:"",
         DocterName:"",
         DocterEmail:"",
         DocterDob:"",
         DocterMobile:"",
         DocterGender:"",
         DocterRegNo:"",
         DocterSpecialization:"",
         DocterCouncil:"",
         RegistrationYear:"",
         DocterQualification:"",
         DocterPassYear:"",
         DocterTotalYear:"",
         DocterPassword:"",
         NameError:"",
         DobError:"",
         EmailError:"",
         RegNoError:"",
         SpecializationError:"",
         DocterCouncilError:"",
         RegistrationYearError:"",
         DocterQualificationError:"",
         DocterPassYearError:"",
         DocterTotalYearError:"",
         PasswordError:"",
         MobileError:"",
         GenderError:""


      };  
    }
 componentDidMount() {
    const years = "http://admin.heapdo.com/api/years";
    fetch(years)
    .then((res1) => res1.json())
    .then(
      (result1) => { 
        console.log(result1);  
        this.setState({
         yearsData: result1.item,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );

   const experienceyears = "http://admin.heapdo.com/api/experienceyears";
    fetch(experienceyears)
    .then((res2) => res2.json())
    .then(
      (result2) => { 
        this.setState({
         YearsExp:result2.item,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );

    const qualification = "http://admin.heapdo.com/api/qualification";
    fetch(qualification)
    .then((res3) => res3.json())
    .then(
      (result3) => { 
        this.setState({
         QualifiCation:result3.item,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
 }

 handlerName = (event)=>{
   this.setState({
      NameError:"",
      DocterName:event.target.value
   });
 }
 handlerEmail = (event)=>{
   console.log(event.target.value);
   this.setState({
      EmailError:"",
      DocterEmail:event.target.value
   });
 }
 handlerDate = (event)=>{
   console.log(event.target.value);
   this.setState({
      DobError:"",
      DocterDob:event.target.value
   });
 }

 handlerMobile = (event)=>{
   console.log(event.target.value);
   this.setState({
      MobileError:"",
      DocterMobile:event.target.value
   });
 }
 handlerGender = (event)=>{
   
   this.setState({
      GenderError:"",
      DocterGender:event.target.value
   });
 }
 handlerRegistration = (event)=>{
  
   this.setState({
      RegNoError:"",
      DocterRegNo:event.target.value
   });
 }
 
 handlerSpecialization = (event)=>{
 
   this.setState({
      SpecializationError:"",
      DocterSpecialization:event.target.value
   });
 }
 handlerCouncil = (event)=>{
   
   this.setState({
      DocterCouncilError:"",
      DocterCouncil:event.target.value
   });
 }
 handlerRegistrationYear = (event)=>{
   this.setState({
      RegistrationYearError:"",
      RegistrationYear:event.target.value
   });
 }
 handlerQualification = (event)=>{
   this.setState({
      DocterQualificationError:"",
      DocterQualification:event.target.value
   });
 }
 handlerPassYear = (event)=>{
   this.setState({
      DocterPassYearError:"",
      DocterPassYear:event.target.value
   });
 }
 handlerTotalYear = (event)=>{
   this.setState({
      DocterTotalYearError:"",
      DocterTotalYear:event.target.value
   });
 }
 handlerPassword = (event)=>{
   this.setState({
      PasswordError:"",
      DocterPassword:event.target.value
   });
 }
 
 handlerSubmit = (event) => {
   event.preventDefault();
   if(this.state.DocterName==""){
      this.setState({
         NameError:"Please Enter Name",
      });
   }
   if(this.state.DocterDob==""){
      this.setState({
         DobError:"Please Enter DoB",
      });
   }
   if(this.state.DocterMobile==""){
      this.setState({
         MobileError:"Please Enter Mobile No",
      });
   }
   if(this.state.DocterGender==""){
      this.setState({
         GenderError:"Please Select Gender",
      });
   }
   
   if(this.state.DocterEmail==""){
      this.setState({
         EmailError:"Please Enter DOB",
      });
   }
   if(this.state.DocterRegNo==""){
      this.setState({
         RegNoError:"Please Enter Registration No",
      });
   }
   if(this.state.DocterSpecialization==""){
      this.setState({
         SpecializationError:"Please Enter Specialization",
      });
   }
   if(this.state.DocterCouncil==""){
      this.setState({
         DocterCouncilError:"Please Enter Registration Council",
      });
   }
   if(this.state.RegistrationYear==""){
      this.setState({
         RegistrationYearError:"Please Select  Registration Year",
      });
   }
   if(this.state.DocterQualification==""){
      this.setState({
         DocterQualificationError:"Please Select Qualification",
      });
   }

   if(this.state.DocterPassYear==""){
      this.setState({
         DocterPassYearError:"Please Select Year of pass out",
      });
   }

   if(this.state.DocterTotalYear==""){
      this.setState({
         DocterTotalYearError:"Please Select Year of pass out",
      });
   }

   if(this.state.DocterPassword==""){
      this.setState({
         PasswordError:"Please Enter Password!",
      });
   } else {

   fetch("http://admin.heapdo.com/api/createdocter", {
      "method": "POST",
      "headers": {
         Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify({
         hospitalid: window.sessionStorage.getItem("userdata"),
         doctername: this.state.DocterName,
         docterdob: this.state.DocterDob,
         docteremail: this.state.DocterEmail,
         doctergender: this.state.DocterGender,
         registrationno: this.state.DocterRegNo,
         specialization: this.state.DocterSpecialization,
         registrationcouncil: this.state.DocterCouncil,
         registrationyear: this.state.RegistrationYear,
         qualificationdegree: this.state.DocterQualification,
         yearofpassout: this.state.DocterPassYear,
         totalyearofexperience: this.state.DocterTotalYear,
         password: this.state.DocterPassword,
         doctermobile:this.state.DocterMobile
      })
    })
    .then(response => response.json())
    .then(response => {
       console.log(response);
       if(response.status==200){
            console.log(response);
            alert('Register Successfull!');        
         setTimeout(function() {
            window.location.href = "/my-doctor";
           }, 2000);
       } else if(response.status==203){
         this.setState({
            userErrsor:response.success,
         })
       }
   })
    .catch(err => {
      console.log(err);
    });
   }
};
 

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
                         
                           <form onSubmit={this.handlerSubmit}>
                             <div className="row form-row">
                              
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Name of Docter<span className="text-danger">*</span></label>
                                    <input type="text"  className="form-control" placeholder="Enter Docter Name" onChange={e => this.handlerName(e)} />
                                    <span class="valiError">{this.state.NameError}</span>
                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Date Of Birth<span className="text-danger">*</span></label>
                                    <input type="text"  className="form-control"  placeholder="YY/DD/MM" onChange={e => this.handlerDate(e)} />
                                    <span class="valiError">{this.state.DobError}</span>
                                 
                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" placeholder="Enter Email" onChange={e => this.handlerEmail(e)} />
                                    <span class="valiError">{this.state.userErrsor}</span>
                                    <span class="valiError">{this.state.EmailError}</span>

                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Mobile No.</label>
                                     <input type="text"  className="form-control" placeholder="Enter mobile No." onChange={e => this.handlerMobile(e)} />
                                    <span class="valiError">{this.state.MobileError}</span>

                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Gender.</label>
                                    <select name="" id="" className="form-control" onChange={e => this.handlerGender(e)}>
                                       <option value="">Select Gender</option>
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                       <option value="other">other</option>
                                    </select>
                                    <span class="valiError">{this.state.GenderError}</span>

                                    {/* <input type="text"  className="form-control" /> */}
                                 </div>
                              </div>
                              
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Registration No</label>
                                    <input type="text" className="form-control" placeholder="Enter Registration No" onChange={e => this.handlerRegistration(e)} />
                                    <span class="valiError">{this.state.RegNoError}</span>
                                  
                                    
                                 </div>
                              </div>
                           
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Specialization</label>
                                    <input type="text" className="form-control" placeholder="Enter Specialization" onChange={e => this.handlerSpecialization(e)} />
                                    <span class="valiError">{this.state.SpecializationError}</span>
                                 </div>
                              </div>


                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Registration Council</label>
                                    <select name="" className="form-control" onChange={e => this.handlerCouncil(e)}>
                                          <option value="">Select Registration Council</option>
                                          <option value="test">test</option>
                                    </select>
                                    <span class="valiError">{this.state.DocterCouncilError}</span>
                                   
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Registration year</label>
                                    
                                    <select  className="form-control" onChange={e => this.handlerRegistrationYear(e)}>
                                       <option value="">Select Year</option>
                                       {this.state.yearsData.map(items => 
                                          <option value={items.year}>{items.year}</option>
                                       )}
                                    </select>
                                       
                                    <span class="valiError">{this.state.RegistrationYearError}</span>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Qualification/Degree</label>
                                    
                                    <select  className="form-control" onChange={e => this.handlerQualification(e)}>
                                       <option value="">Qualification/Degree</option>
                                       {this.state.QualifiCation.map(itemss => 
                                          <option value={itemss.degree}>{itemss.degree}</option>
                                       )}
                                    </select>
                                       
                                    <span class="valiError">{this.state.DocterQualificationError}</span>

                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Year of pass out</label>
                                    
                                    <select  className="form-control" onChange={e => this.handlerPassYear(e)}>
                                       <option value="">Select Year</option>
                                       {this.state.yearsData.map(itemss => 
                                          <option value={itemss.year}>{itemss.year}</option>
                                       )}
                                       </select>
                                    <span class="valiError">{this.state.DocterPassYearError}</span>
                                 </div>
                              </div>

                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Total year of Experience</label>
                                    <select  className="form-control" onChange={e => this.handlerTotalYear(e)}>
                                       <option value="">Select Year</option>
                                       {this.state.YearsExp.map(itemss => 
                                          <option value={itemss.expyear}>{itemss.expyear}</option>
                                       )}
                                    </select>
                                    <span class="valiError">{this.state.DocterTotalYearError}</span>

                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={e => this.handlerPassword(e)}  />
                                    <span class="valiError">{this.state.PasswordError}</span>
                                   
                                 </div>
                              </div>
     
                           </div>
                           <div className="submit-section submit-btn-bottom">
                        <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                     </div>
                           </form>
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

export default CreateDocterPage;
