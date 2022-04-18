import React,{Component} from "react";
export default class Count extends Component{
    render(){
        return(
            <section id="counts" class="counts">
              <div class="container" data-aos="fade-up">
        
                <div class="row no-gutters">
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="fas fa-user-md"></i>
                      <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>
        
                      <p align="center"><strong>Doctors</strong> Reviews</p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="far fa-hospital"></i>
                      <span data-purecounter-start="0" data-purecounter-end="26" data-purecounter-duration="1" class="purecounter"></span>
                      <p align="center"><strong>Departments</strong> Reviews </p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="fas fa-flask"></i>
                      <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" class="purecounter"></span>
                      <p align="center"><strong>Research Lab</strong> reviews </p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                  <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="fas fa-award"></i>
                      <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>
                      <p align="center">Our <strong>Awards</strong> </p>
                      <a href="#">Find out more &raquo;</a>
                    </div>
                  </div>
        
                </div>
        
              </div>
            </section>
        )
    }
}