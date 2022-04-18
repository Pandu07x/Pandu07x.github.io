import React,{useState,useEffect,Component} from "react";
import { Link ,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";

export default function Hospget(){
    
   
    
    useEffect(()=>{
        fetchItems();
       
    },[]);
    const[items,setItems]=useState([])
    
    const fetchItems=async()=>{
        const data=await fetch('http://localhost:8001/getallhosp')
        const items=await data.json();
        setItems(items)
    }
      
    
    
    
    return(
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                    <h1>Hospital List </h1>
                    <br></br>
                    <br></br>
                    <table className="table">
                        <tr>
                            <th>Hospital Code</th>
                            <th scope="col">Hospital Name</th>
                            <th>Hospital Speciality</th>
                            <th>Phone Number</th>
                            <th>Area</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                        {
                        items.map((item,index) => (
                    
                          
                    <tr key={item.id}>
                        <td scope="row">{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.type}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.state}</td>
                        <td>{item.city}</td>
                        

                       
                        <td>  
                        <Link to={`/hosp/${item.id}`}> 
                          <button className="appointment-btn scrollto">Book Apointment</button>
                          </Link> <br /></td>
                    
                    </tr>
                
              
                
      ))
                        }

            
                    </table>
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
        
                  
                  </div>
                </div>
        
        
                </div>
        
              </div>
              <a href="/Form" className="appointment-btn scrollto"><span className="d-none d-md-inline">Back to </span> Hospital</a>
        
              <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
              </a>
        
              <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>

              </a>
              
        
            
          </section>
  
    )
}