import React, { Component } from "react";
import SideBarHospital from "./SideBarHospital.js";
import axios, { post } from 'axios';
class HospitalProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
      error: null,
      myprofile: [],
      country:[],
      states:[],
      city:[],
      countrys:"",
      statesss:"",
      citys:"",
      name:"",
      email:"",
      mobile:"",
      gst:"",
      registerno:"",
      address1:"",
      address2:"",
      pincode:"",
      selectedFile:"",
      faxNo:"",
      file:null,
      };

      this.onFormSubmit = this.onFormSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.fileUpload = this.fileUpload.bind(this)
   }
  
  componentDidMount() {
   var  myuser = window.sessionStorage.getItem("userdata");
   const apiUrl = "http://admin.heapdo.com/api/gethospital/"+(myuser);
   fetch(apiUrl)
     .then((res) => res.json())
     .then(
       (result) => {
         console.log(result);
         this.setState({
            name:result.data.name,
            email:result.data.email,
            mobile:result.data.mobile,
            gst:result.data.gst,
            registerno:result.data.registerno,
            address1:result.data.address1,
            address2:result.data.address2,
            faxNo:result.data.faxno,
            statesss:result.data.state,
            pincode:result.data.pincode,
            citys:result.data.city,
            countrys:result.data.country,
          
         });
       },
       (error) => {
         this.setState({ error });
       }
     );

     const countrys = "http://admin.heapdo.com/api/country";
     fetch(countrys)
     .then((res1) => res1.json())
     .then(
       (result1) => {   
         this.setState({
            country: result1.item,
         });
       },
       (error) => {
         this.setState({ error });
       }
     );
  }
  handleCountry = (event) =>{
   this.setState({
      countrys: event.target.value,
   });
      const apiUrl1 = "http://admin.heapdo.com/api/state/"+(event.target.value);
      fetch(apiUrl1)
        .then((res2) => res2.json())
        .then(
          (result3) => {
            if(result3.status==200){
            this.setState({
               states:result3.item,
            });
         } else {
            this.setState({
               states:[],
            }); 
         }
          },
          (error) => {
            this.setState({ error });
          }
        );
 }

 handleState = (event) =>{
   this.setState({
      statesss:event.target.value,
   });
  
   const apiUrl3 = "http://admin.heapdo.com/api/city/"+(event.target.value);
   fetch(apiUrl3)
     .then((res3) => res3.json())
     .then(
       (result4) => {
         if(result4.status==200){
         this.setState({
            city:result4.item,
         });
      } else {
         this.setState({
            city:[],
         }); 
      }
       },
       (error) => {
         this.setState({ error });
       }
     );
 }

 handleName = (event) =>{
   this.setState({
      name:event.target.value
   });
 }
 handleEmail = (event) =>{
   this.setState({
      email:event.target.value
   });
 }
 handleGst = (event) =>{
   this.setState({
      gst:event.target.value
   });
 }
 handleMobile = (event) =>{
   this.setState({
      mobile:event.target.value
   });
 }
 handleAddress1 = (event) =>{
   this.setState({
      address1:event.target.value
   });
 }
 handleAddress2 = (event) =>{
   this.setState({
      address2:event.target.value
   });
 }
 handlePinCode = (event) =>{
   this.setState({
      pincode:event.target.value
   });
 }
 
 
 

handleRegisterno = (event) =>{
   this.setState({
      registerno:event.target.value
   });
}

 handleCity = (event) =>{
   this.setState({
      citys:event.target.value
   });
 }

 handleFaxno = (event) =>{
    console.log(event.target.value);
   this.setState({
      faxNo:event.target.value
   });
 }

 handleImage = (event) =>{
   this.setState({
      selectedFile: event.target.files[0]
  });
 }
 
 onFormSubmit(e){
   e.preventDefault() // Stop form submit
   this.fileUpload(this.state.file).then((response)=>{
     console.log(response.data);
   })
 }

 onChange(e) {
   this.setState({file:e.target.files[0]})
 }

 onFormSubmit(e){
   e.preventDefault() // Stop form submit
   this.fileUpload(this.state.file).then((response)=>{
      if(response.status==200){
         setTimeout(function() {
            alert("update successful!");
         }, 2000);
      } else {
         setTimeout(function() {
            alert("Update Not Cahnge !");
         }, 2000);
      }
   })
 }

 fileUpload(file){
   const url = 'http://admin.heapdo.com/api/updatehospital';
   const formData = new FormData();
   formData.append('image',file)
   formData.append('email',this.state.email)
   formData.append('name',this.state.name)
   formData.append('gst',this.state.gst)
   formData.append('mobile',this.state.mobile)
   formData.append('pincode',this.state.pincode)
   formData.append('registerno',this.state.registerno)
   formData.append('address1',this.state.address1)
   formData.append('address2',this.state.address2)
   formData.append('state',this.state.statesss)
   formData.append('city',this.state.citys)
   formData.append('country',this.state.countrys)
   formData.append('faxno',this.state.faxNo)
   formData.append('id',window.sessionStorage.getItem("userdata"))
   const config = {
       headers: {
           'content-type': 'multipart/form-data'
       }
   }
   return  post(url, formData,config)
 }
 
 
  
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
                           <form onSubmit={this.onFormSubmit}>
                           <div className="row form-row">
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Name of Hospital<span className="text-danger">*</span></label>
                                    <input type="text"  className="form-control" value={this.state.name} onChange={e =>this.handleName(e)} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input type="email" className="form-control" value={this.state.email} onChange={e =>this.handleEmail(e)} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text"  className="form-control" value={this.state.mobile}   onChange={e =>this.handleMobile(e)} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group">
                                    <label>GST No.</label>
                                    <input type="text"  className="form-control" value={this.state.gst} onChange={e =>this.handleGst(e)} />
                                 </div>
                              </div>
                              
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Registration No</label>
                                    <input type="text" className="form-control" value={this.state.registerno}  onChange={e =>this.handleRegisterno(e)} />
                                 </div>
                              </div>
                           
                              
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Address line 1</label>
                                    <input type="text" className="form-control" value={this.state.address1} onChange={e =>this.handleAddress1(e)}  />
                                 </div>
                              </div>


                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Address line 2</label>
                                    <input type="text" className="form-control" value={this.state.address2} onChange={e =>this.handleAddress2(e)} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Country</label>
                                    <select  className="form-control" onChange={e =>this.handleCountry(e)}>
                                       <option value="">Select Country</option>
                                       {this.state.country.map(items => 
                                          <option value={items.id.$oid}>{items.country}</option>
                                       )}
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>State</label>
                                    <select name="" className="form-control" onChange={e =>this.handleState(e)}>
                                    <option value="">Select State</option>
                                   
                                    {this.state.states.map((e, key) => {
                                       return (
                                         <option value={e._id.$oid} key={key}>
                                           {e.state}
                                         </option>
                                       );
                                     })}
                              
                              
                                  </select>     
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>City</label>
                                    <select className="form-control"  onChange={e =>this.handleCity(e)}>
                                    <option value="">Select City</option>
                                    {this.state.city.map((p, key) => {
                                       return (
                                         <option value={p._id.$oid} key={key}>
                                           {p.city}
                                         </option>
                                       );
                                     })}
                                     </select>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0">
                                    <label>Fax No</label>
                                    <input type="text" className="form-control" value={this.state.faxNo} onChange={e =>this.handleFaxno(e)}  />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0" >
                                    <label>Zip Code*</label>
                                    <input type="text" className="form-control" value={this.state.pincode} onChange={e =>this.handlePinCode(e)} />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="form-group mb-0" >
                                    <label>Profile Image*</label>
                                    <input type="file" className="form-control"  onChange={this.onChange} />
                                 </div>
                              </div>
                           </div>
                           <div className="submit-section submit-btn-bottom">
                        <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                     </div>
                           </form>
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
                    
                    
                    
                  </div>
               </div>
            </div>
         </div>
         </>
    );
  }
}
export default HospitalProfile;
