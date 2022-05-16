import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Blogs from './pages/Blogs.js';
import Blogsdetails from './pages/Blogsdetails.js';
import PatientRegister from './pages/PatientRegister.js';
import Hospital from './pages/Hospital.js';
import Pharmacy from './pages/Pharmacy.js';
import Pathology from './pages/Pathology.js';
import LoginPage from './pages/LoginPage.js';
import UserDashboards from './pages/UserDashboards';
import Privacy from './pages/Privacy';
import Myprofile from './pages/Myprofile';
import Hospitallogin from './pages/Hospitallogin';
import ClinicDashboard from './pages/ClinicDashboard';
import HospitalDashboard from './pages/HospitalDashboard';
import Hospitalpage from './pages/Hospitalpage.js';
import MyDoctor from './pages/MyDoctor.js';
import CreateDocter from './pages/CreateDocter.js';
import AboutPage from './pages/AboutPage'


import ContactPage from './pages/ContactPage.js';

import QuestionPage from './pages/QuestionPage.js';

const App = () => {
        return ( 
         <Router>
                <div>

                <Switch>

                
            
                    <Route exact path="/" component = {Home} />
                    <Route  path="/blogs" component={Blogs} />
                    <Route   path="/details/:slug" component={Blogsdetails} />
                    <Route   path="/patientregister" component={PatientRegister} />
                    <Route  path="/hospital-register" component={Hospital} />
                    <Route  path="/pharmacy" component={Pharmacy} />
                    <Route  path="/pathology" component={Pathology} />
                    <Route  path="/login" component={LoginPage} />
                    <Route  path="/userdashboard" component={UserDashboards} />
                    <Route  path="/privacypolicy" component={Privacy} />
                    <Route  path="/myprofile" component={Myprofile} />
                    <Route  path="/hospital-clinic-login" component={Hospitallogin} />
                    <Route  path="/hospital-dashboard" component={HospitalDashboard} />
                    <Route  path="/clinic-dashboard" component={ClinicDashboard} />
                    <Route  path="/hospital-profile" component={Hospitalpage} /> 
                    <Route  path="/my-doctor" component={MyDoctor} /> 
                    <Route  path="/create-docter" component={CreateDocter} /> 
                   
                    
                    
                    <Route   path='/contactpage' component={ContactPage}/>
                    <Route   path='/qpage' component={QuestionPage}/>
                    <Route   path='/aboutpage' component={AboutPage}/>
                   
                    </Switch>
                    
                  
                </div>
        </Router>
        );
    };
export default App;