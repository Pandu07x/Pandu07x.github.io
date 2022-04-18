import React,{useState,useEffect,Component} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Viewget(){
    const[items,setItems]=useState([])
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8001/getall/${id}`).then((resp)=>setItems({...resp.data[0]}))
        
       
    },[id]);
   
    

    const fetchItems=async(id)=>{
        const data=await fetch(``)
        const items=await data.json();
        setItems(items)
    }
    const viewitems=async(id)=>{
      const resposne=await fetch(`http://localhost:8001/delete/${id}`)
      
      
        
      }
      
    
    
    
      return(
          <div>
        <section id="hero">
      
    
         
    
            
    
              <div class="container">
                

               
                    <h1>Name: {items.name}</h1>
                    <h2 align="left">Type: {items.user}</h2>
                    <h2 align="left"> Address : {items.address} ,{items.city},{items.state}</h2>
                    <h2 align="left">Contact Details:  <br /> Phone: {items.phone} <br /> Email: {items.email}</h2>

                    <h3><a href="/regiget" className="appointment-btn scrollto">Back to List</a></h3>
                </div>
                
              
        
        
                          
                      
                    
                      
         
          
            
    
              
              
           
    
    
            
    
          
          
    
         
          
    
        
      </section>
      </div>

  
    )
}