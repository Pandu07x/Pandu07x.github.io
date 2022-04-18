import React, { Component, useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Save from "../componenets/image";

 export default function Patientform()  {
    const[items,setItems]=useState([])
    const[doc,setDoc]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8001/gethosp/${id}`).then((resp)=>setItems({...resp.data[0]}))
        axios.get(`localhost:8001/getdoctors/${id}`).then((response)=>{
          const repo=response.data
          setDoc(repo)
        })

        
       
    },[id]);
     
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Patient Form</h2>
                        <form method="POST" action="http://localhost:8001/addpatient">

                            <div className="input-group">
                                <label className="label"> Hospital Id</label>
                                <input className="input--style-4" type="text" name="hospid" value={items.id} />
                                
                            </div>


                            <div className="row row-space">

                                <div className="col-2">

                                    <div className="input-group">
                                        <label className="label"> Patient Name</label>
                                        <input className="input--style-4" type="text" name="name" />
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="uname" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="pass" />
                                    </div>
                                </div>

                            </div>


                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Email</label>
                                        <input className="input--style-4" type="email" name="email" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Phone Number</label>
                                        <input className="input--style-4" type="text" name="phone" />
                                    </div>
                                </div>
                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <Save />
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
 