import React, { Component } from "react";
import { link } from "react-dom";

class PatientRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      dob: "",
      blood: "",
      gender: "",
      aadhar: "",
      EmailError: "",
      mobileError: "",
      SuccessMsg: "",
      SaveOtp: "",
      MyOtp: "",
      NameError: "",
      EmailsError: "",
      MobilesError: "",
      PasswordError: "",
      AgeError: "",
      GenderError: "",
      BloodError: "",
      DobError: "",
      otpWrong: "",
      AadharCardError: "",
    };
  }

  handlerName = (event) => {
    this.setState({
      NameError: "",
      name: event.target.value,
    });
  };
  handlerEmail = (event) => {
    this.setState({
      EmailsError: "",
      email: event.target.value,
    });
  };
  handlerMobile = (event) => {
    this.setState({
      MobilesError: "",
      mobile: event.target.value,
    });
  };
  handlerPassword = (event) => {
    this.setState({
      PasswordError: "",
      password: event.target.value,
    });
  };
  handlerGender = (event) => {
    this.setState({
      GenderError: "",
      gender: event.target.value,
    });
  };
  handlerBlood = (event) => {
    this.setState({
      BloodError: "",
      blood: event.target.value,
    });
  };
  handlerDob = (event) => {
    this.setState({
      DobError: "",
      dob: event.target.value,
    });
  };
  handlerOTP = (event) => {
    this.setState({
      MyOtp: event.target.value,
    });
  };

  handlerAdhar = (event) => {
    console.log(event.target.value);
    this.setState({
      AadharCardError: "",
      aadhar: event.target.value,
    });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    if (this.state.name == "") {
      this.setState({
        NameError: "Please Enter Name",
      });
    }
    if (this.state.email == "") {
      this.setState({
        EmailsError: "Please Enter Email",
      });
    }
    if (this.state.mobile == "") {
      this.setState({
        MobilesError: "Please Enter Phone",
      });
    }
    if (this.state.password == "") {
      this.setState({
        PasswordError: "Please Enter Password",
      });
    }
    if (this.state.age == "") {
      this.setState({
        AgeError: "Please Enter Password",
      });
    }
    if (this.state.gender == "") {
      this.setState({
        GenderError: "",
        GenderError: "Please Select Gender",
      });
    }
    if (this.state.gender == "") {
      this.setState({
        GenderError: "Please Select Gender",
      });
    }
    if (this.state.blood == "") {
      this.setState({
        BloodError: "Please Enter Blood Group",
      });
    }
    if (this.state.dob == "") {
      this.setState({
        DobError: "Please Enter DOB",
      });
    }
    if (this.state.aadhar == "") {
      this.setState({
        AadharCardError: "Please Enter Aadhar No",
      });
    } else {
      fetch("http://admin.heapdo.com/api/patientregister", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          password: this.state.password,
          dob: this.state.dob,
          bloodgroup: this.state.blood,
          gender: this.state.gender,
          SaveOtp: this.state.SaveOtp,
          MyOtp: this.state.MyOtp,
          aadhar: this.state.aadhar,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.status == 204) {
            console.log(response);
            this.setState({
              SaveOtp: "",
              mobileError: "",
              EmailError: response.EmailError,
            });
          }
          if (response.status == 203) {
            this.setState({
              mobileError: response.mobileError,
              EmailError: "",
            });
          }
          if (response.status == 205) {
            this.setState({
              SaveOtp: response.otp,
              mobileError: "",
              EmailError: "",
            });
            //window.location.href = "/login";
          }
          if (response.status == 209) {
            this.setState({
              mobileError: "",
              EmailError: "",
              otpWrong: response.item,
            });
          }
          if (response.status == 200) {
            this.setState({
              mobileError: "",
              EmailError: "",
              NameError: "",
              EmailsError: "",
              MobilesError: "",
              PasswordError: "",
              GenderError: "",
              BloodError: "",
              DobError: "",
              SuccessMsg: response.success,
            });
            setTimeout(function () {
              window.location.href = "/login";
            }, 5000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <>
        <div className="content mycontent">
          <div className="container-fluid mymargin">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Register"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      {this.state.SuccessMsg && (
                        <div class="alert alert-success">
                          <strong>Success!</strong>
                          {this.state.SuccessMsg}
                        </div>
                      )}
                      <div className="login-header">
                        <h3>Individual/Patient Register </h3>
                      </div>
                      <form onSubmit={this.handlerSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group ">
                              <input
                                type="text"
                                className="form-control floating"
                                onChange={(e) => this.handlerName(e)}
                                placeholder="name"
                              />
                             
                              <span className="valiError">
                                {this.state.NameError}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group ">
                              <input
                                type="text"
                                className="form-control floating"
                                onChange={(e) => this.handlerEmail(e)}
                                placeholder="email"
                              />
                         
                              <span className="valiError">
                                {this.state.EmailError}
                              </span>
                              <span className="valiError">
                                {this.state.EmailsError}
                              </span>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group ">
                              <input
                                type="text"
                                className="form-control floating"
                                onChange={(e) => this.handlerMobile(e)}
                                placeholder="Mobile Number"
                              />
                            
                              <span className="valiError">
                                {this.state.mobileError}
                              </span>
                              <span className="valiError">
                                {this.state.MobilesError}
                              </span>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group ">
                              <input
                                type="number"
                                className="form-control floating"
                                onChange={(e) => this.handlerAdhar(e)}
                                placeholder="Aadhar Number"
                              />
                          
                              <span className="valiError">
                                {this.state.AadharCardError}
                              </span>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group ">
                              <input
                                type="password"
                                className="form-control floating"
                                onChange={(e) => this.handlerPassword(e)}
                                placeholder='password'
                              />
                            
                              <span className="valiError">
                                {this.state.PasswordError}
                              </span>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group ">
                              <select
                                className="form-control"
                                onChange={(e) => this.handlerGender(e)}
                              >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other ">Other</option>
                              </select>
                              <span className="valiError">
                                {this.state.GenderError}
                              </span>
                              {/* <input type="text" className="form-control floating" />
                                          <label className="focus-label">Create Blood Group</label> */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group ">
                              <input
                                type="text"
                                className="form-control floating"
                                onChange={(e) => this.handlerBlood(e)}
                                placeholder="blood-group"
                              />
                            
                              <span className="valiError">
                                {this.state.BloodError}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group ">
                              <input
                                type="date"
                                className="form-control floating"
                                onChange={(e) => this.handlerDob(e)}
                                placeholder="D.O.B"
                              />
                              {/* <label className="focus-label">Create Y/M/D</label> */}
                              <span className="valiError">
                                {this.state.DobError}
                              </span>
                            </div>
                          </div>

                          {this.state.SaveOtp && (
                            <div className="col-md-12">
                              <div className="form-group ">
                                <input
                                  type="text"
                                  className="form-control floating"
                                  onChange={(e) => this.handlerOTP(e)}
                                  placeholder="OTP"
                                />
                                <label className="focus-label">
                                  Verify email/Phone OTP
                                </label>
                                <span className="valiError">
                                  {this.state.otpWrong}
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="form-group">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              require

                            />{" "}
                            &nbsp;&nbsp;
                            <label class="form-check-label">
                              i accept the terms&conditions
                            </label>
                          </div>
                          <div className="text-end">
                            <a className="forgot-link" href="/login">
                              Already have an account?
                            </a>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Signup
                        </button>
                        {/* <div className="login-or">
                                    <span className="or-line"></span>
                                    <span className="span-or">or</span>
                                 </div> */}
                        {/* <div className="row form-row social-login">
                                    <div className="col-6">
                                       <a href="#" className="btn btn-facebook w-100"><i className="fab fa-facebook-f me-1"></i> Login</a>
                                 </div>
                                    <div className="col-6">
                                       <a href="#" className="btn btn-google w-100"><i className="fab fa-google me-1"></i> Login</a>
                                    </div>
                                 </div> */}
                      </form>
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
export default PatientRegister;
