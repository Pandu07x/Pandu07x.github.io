import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Form from "../forms/form";
import Docform from "../forms/doctorform";
import Labempform from "../forms/labemp";
import Patientform from "../forms/patientregi";
import Labform from "../forms/labform";
import Hospitalform from "../forms/hospitalform";
import Casedetails from "../forms/casedetailsform";
import Hospitalempform from "../forms/hospitalemp";
import Heros from "../pages/Sucesspage2";
import Dochead from "../header/doctorhead";
import Logins from "../forms/loginn";
import Test from "../pages/test";
import Hero from "../hero";
import Labhead from "../header/labhead";
import Logged from "../pages/loggedoff";
import Labrequestform from "../forms/requestform";
import Patienthead from "../header/patienthead";


import Save from "../forms/testform";
import Regiform from "../forms/RegistrationForm";
import Select from "../pages/selectpage";
import Regiget from "../pages/Regiget";
import Viewget from "../pages/viewtest";
import Hospget from "../pages/selecthospital";
import HospView from "../pages/appointmentpage";
import Patientget from "../pages/patientlist";
import Login from "../forms/login";
import Loginss from "../forms/doclogin";
import Labloginss from "../forms/loginlab";
import Docloginss from "../forms/doclogin";
import SelectLogin from "../pages/selectlogin";
import DataAdded from "../pages/Sucesspage2";
import Pathead from "../header/patienthead";
import Patloginss from "../forms/patientLogin";
import Loginsa from "../forms/loginn";
import Docheadss from "../pages/doctest";
import Getcaseinfo from "../pages/getcaseinfo";
import Viewdetail from "../pages/detailcase";
import Reportform from "../forms/report";
import GetReportinfo from "../pages/viewreport";



export default class Routerss extends Component {
    render(){
    return(
        <div>
        <BrowserRouter>
        <Routes>
        
            <Route path="/" element={<Hero />}></Route>
          <Route path="/Form" element={<Form />}></Route>
            <Route path="/doc" element={<Docform />}></Route>
            <Route path="/labemp" element={<Labempform />}></Route>
            <Route path="/patient/:id" element={<Patientform />}></Route>
            <Route path="/lab" element={<Labform />}></Route>
            <Route path='/hospital' element={<Hospitalform />}></Route>
            <Route path="/hospemp" element={<Hospitalempform />}></Route>
            <Route path='/case' element={<Casedetails />}></Route>
            <Route path="/user/:id" element={<Test />}></Route>
            <Route path="/logged" element={<Logged />}></Route>
            <Route path="/dochead/:id" element={<Dochead />}></Route>
            <Route path="/labhead/:id" element={<Labhead />}></Route>
            <Route path="/pathead/:id" element={<Pathead />}></Route>
            <Route path='/requestlab' element={<Labrequestform />}></Route>
            <Route path="/patienthead" element={<Patienthead />}></Route>
            <Route path="/add" element={<DataAdded />}></Route>
            <Route path="/uploadreport" element={<Reportform />}></Route>
           
           
            <Route path="/image" element={<Save />}></Route>
            <Route path="/regi" element={<Regiform />}></Route>
            <Route path="/login" element={<SelectLogin />}></Route>
            <Route path="/select" element={<Select />}></Route>
            <Route path="/regiget/:id" element={<Regiget />}></Route>
            <Route path="/view/:id" element={<Viewget />}></Route>
            <Route path="/gethosp" element={<Hospget />}></Route>
            <Route path="/hosp/:id" element={<HospView />}></Route>
            <Route path="/getpatient/:id" element={<Patientget />}></Route>
            <Route path="/getinfo/:id" element={<Getcaseinfo />}></Route>
            <Route path="/Viewdeatils/:id" element={<Viewdetail />}></Route>
            <Route path="/viewreport/:id" element={<GetReportinfo />}></Route>
            
            <Route path="/doclogin" element={<Docloginss/>}></Route>
            <Route path="/lablogin" element={<Labloginss />}></Route>
            <Route path="/patlogin" element={<Patloginss />}></Route>
            <Route path='/logogo' element={<Loginsa />}></Route>
            <Route path="/doctest/:id" element={<Docheadss />}></Route>
           

        </Routes>
        </BrowserRouter>
        </div>
    )
}
}