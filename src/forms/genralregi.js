import React, { Component } from "react";

 export default class Genralform extends Component {
     render(){
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
            <div className="wrapper wrapper--w680">
                <div className="card card-4">
                    <div className="card-body">
                        <h2 align="center" className="title">Registration Form</h2>
                        <form method="POST" action="http://localhost:8001/genral">

                            <div className="input-group">
                                <label className="label">Choose User</label>
                                <div className="rs-select2 js-select-simple select--no-search">
                                    <select name="hosp">
                                        <option disabled="disabled" selected="selected">Choose option</option>
                                        <option>Hospital</option>
                                        <option>Lab</option>
                                        
                                    </select>
                                    <div className="select-dropdown"></div>
                                </div>
                            </div>


                            <div className="row row-space">

                                <div className="col-2">

                                    <div className="input-group">
                                        <label className="label"> User Name</label>
                                        <input className="input--style-4" type="text" name="name" />
                                    </div>
                                </div>

                            </div>

                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Username</label>
                                        <input className="input--style-4" type="text" name="username" />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <label className="label">Password</label>
                                        <input className="input--style-4" type="password" name="password" />
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
                                    <label className="label">Address</label>
                                        <textarea className="input--style-4 form-group" cols="60" rows="3"
                                                  name="add"></textarea>
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
 }