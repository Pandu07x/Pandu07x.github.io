import React,{Component} from "react";
export default class Loginsa extends Component{
    render(){
        return(
            <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">
        
              <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
        
              <div class="carousel-inner" role="listbox">
        
                
                <div class="carousel-item active" style={{
                  backgroundImage: 'url(assets/img/slide/slide1.jpg)'
              }}>
                  <div class="container">
                  <form method="post" action="http://localhost:8001/doclogine">
                  
                    <p></p>
         <label>Enter your name:
           <input type="text" name="uname" placeholder="please" />
         </label>
         <p></p>
         <label>Enter your Password:
           <input type="password" placeholder="pass"  style={{color:"red", width:"500px"}} name='pass' />
         </label>
         <p></p>
         <br></br>
         <input type='submit' />
        
       </form>
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
}