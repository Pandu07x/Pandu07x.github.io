import axios  from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Dochead(){
  const {id} =useParams()
  const[items,setItems]=useState([])
    
  useEffect(()=>{
    axios.get(`http://localhost:8001/getprofiles/${id}`).then((resp)=>setItems({...resp.data[0]}))
     
  },[]);
  
  
  
  
  
  
    
        return(
            <div>
              
             
            <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" /></a>
      
      

      <nav id="navbar" class="navbar order-last order-lg-0">

        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
     
      <a href="/Form" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
      <a href="/logged" className="appointment-btn scrollto">Logout</a>
      <Link to={`/user/${items.id}`}> 
                                    <button className="appointment-btn scrollto">View Appointment List</button>
                                    </Link> <br />
      <Link to={`/getpatient/${items.id}`}> 
     <button className="appointment-btn scrollto">View Patient List</button>
      </Link> <br />
      

      

      

    </div>
  </header>
  <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                   
                        <h1>{items.name}</h1>
                   
                      

                  </div>
                </div>
        
        
                </div>
        
              </div>
        
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
              </a>
        
            
          </section>
  </div>
        )
    }
