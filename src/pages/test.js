import React,{useState,useEffect,Component} from "react";
import { Link,useParams } from "react-router-dom";
import  axios  from "axios";


export default function Test(){

    const[items,setItems]=useState('')
 
    const {id}=useParams();
  
    useEffect(()=>{
      axios.get(`http://localhost:8001/getapp/${id}`).then((resp)=>setItems({...resp.data[0]}))
     
      
     
  },[id]);
    const deleteitem=async(id)=>{
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
                    <h1>Welcome To Appointment List</h1>
                    <br></br>
                    <br></br>
                  
            
            <table  class="table table-borderless">
                              <tr scope="col">
                              <th scope="col">Id</th>
                              <th>name</th>
                              <th>doctor</th>
                              <th>Date</th>
                              <th>Gender</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Addresss</th>
                              <th>Users</th>
                              </tr>
                              
          
                    
                          
                              <tr>
                                  <td scope="row">{items.id}</td>
                                  <td>{items.name}</td>
                                  <td>{items.doctor}</td>
                                  <td>{items.date}</td>
                                  <td>{items.gender}</td>
                                  <td>{items.email}</td>
                                  <td>{items.phone}</td>
                                  <td>{items.address}</td>
                                  <td>{items.user}</td> &nbsp;
                                  <td>
                                  <a href="/user" onClick={()=>deleteitem(items.id)}  className="appointment-btn scrollto">Delete</a> <br />
                                  </td>
                                  <td>  
                                    <a href="/View/:id" className="appointment-btn scrollto">View</a> <br /></td>
                              
                              </tr>
                            
                        
                          
              
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