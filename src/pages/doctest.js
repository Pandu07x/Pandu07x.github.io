import axios  from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { Card,Button } from "react-bootstrap";


export default function Docheadss(){
  const {id} =useParams()
    
  useEffect(()=>{
      fetchItems();
     
  },[]);
  const[items,setItems]=useState([])
  
  const fetchItems=async()=>{
      const data=await fetch(`http://localhost:8001/getprofiles/${id}`)
      const items=await data.json();
      setItems(items)
  }
  
  
  
    
        return(
            <div>
                <div className="container-fluid text-center">
                    {
                        items.map(item=>(
                                
                <Card style={{ width: '18rem' }}>
               
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
                        ))
                    }
                
</div>
                </div>
              
             
   
        )
    }
