import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Casedetails () {
    const [items,setItems]=useState('')
    const {id}=useParams()
    useEffect(()=>{
        axios.get()
    },[id])
    
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Case Details</h2>
                        <form method="POST" action="http://localhost:8001/cases">
                            <div className="col-2">

                                <div className="input-group">
                                    <label className="label">Case No</label>
                                    <input className="input--style-4" type="text" name="case" />
                                </div>
                                <div className="input-group">
                                    <label className="label">PatientID</label>
                                    <input className="input--style-4" type="text" name="case" />
                                </div>
                            </div>

                            
                            


                            <div className="row row-space">

                                <div className="col-2">

                                    <div className="input-group">
                                        <label className="label">Select Date</label>
                                        <input className="input--style-4" type="date" name="date" />
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label className="label">Prescription</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="prescription"></textarea>
                                    </div>
                                </div>
                                </div>
                                <div className="row row-space">
                                
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="label">Description</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="desc"></textarea>
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label className="label">Report Request</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="requests"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="form-group">
                                        <label className="label">Special Notes</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="special"></textarea>
                                    </div>
                                </div>
                            </div>


                            <div className="p-t-15">
                                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
