import React,{useState,useEffect,Component} from "react";
import { Link ,useParams} from "react-router-dom";
import Drop from "../componenets/city";
import axios from "axios";

export default function Patientget(){
    
   
  const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getallpatients/${id}`)
      const items=await data.json();
      setItems(items)
  }
  const viewitems=async(id)=>{
    const resposne=await fetch(`http://localhost:8001/delete/${id}`)
    
    
      
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
                    <Link to={`/patient/${id}`}> 
                          <button className="appointment-btn scrollto">Create Patient</button>
                          </Link> <br />

                    <table className="table">
                      <thead>
                        <tr>
                          <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Image</th>
                            
                        </tr>
                        </thead>
                        
                          
                        
                      
                        {
               
               items.map((item,index) => (
                 <tbody>
                   
                         
                             <tr key={item.PatientId}>
                                 <td scope="row">{index+1}</td>
                                 <td>{item.PatientName}</td>
                                 <td>{item.Email_ID}</td>
                                 

                                
                                 <td>  
                                   <Link to={`/view/${item.id}`}> 
                                   <button className="appointment-btn scrollto">View</button>
                                   </Link> <br /></td>
                             
                             </tr>
                             </tbody>
                         
                       
                         
               ))
               }
               </table>
               
                    <Link to={`/dochead/${id}`}> 
                                    <button className="appointment-btn scrollto">Back To Hospital</button>
                                    </Link> <br />
                    
                  
            
            
               
                
                    
                          
                  

                                 
                                  
                                 
                              
                              
                          
                        
                          
                
                
                
        
                  
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
  
    )
}