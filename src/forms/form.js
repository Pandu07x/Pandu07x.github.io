import React,{Component} from "react";
import { useEffect } from "react";
import {useFormik} from "formik";

import csc from "country-state-city";


export default class Form extends Component{
    
    render(){
        return (
            <div>
                 <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title" align="center">Appointment</h2>
                    <form method="POST" action="http://localhost:8001/appoint">
                     
                        <div class="row row-space">

                            <div class="col-2">

                                <div class="input-group text-center">
                                    <label class="label">Patient Name</label>
                                    <input class="input--style-4" type="text" name="name" />
                                </div>
                            </div>
                            
                        </div>

                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Doctor</label>
                                    <input class="input--style-4" type="text" name="Doc" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Appointment</label>
                                    <div class="input-group-icon">
                                        <input class="input--style-4 js-datepicker" type="date" name="date"  />
                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label className="label">Choose User<br></br></label>
                                    <div>
                                        <select name="gender" className="form-select form-select-lg mb-3">
                                            <option disabled="disabled" selected="selected">Choose option</option>
                                            <option>Male</option>
                                            <option>Female</option>

                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                    </div>
                                </div>

                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Email</label>
                                    <input class="input--style-4" type="email" name="email" />
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Phone Number</label>
                                    <input class="input--style-4" type="text" name="phone" />
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                            
                        </div>
                        <div class="row row-space">
                            <div class="col-2">
                                <div class="input-group">
                                    <label class="label">Address</label>
                                    <input class="input--style-4" type="text" name="add" />
                                </div>
                            </div>
                        </div>
                        <div class="row row-space">
                           
                        </div>



                        <div class="p-t-15">
                            <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                
                
            </div>

        )


    }
}
