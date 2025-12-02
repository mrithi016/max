import React from 'react'
import './Foot.css';
import img31 from '../images/img31.png';
import img32 from '../images/img32.png';
import img33 from '../images/img33.png';
import img34 from '../images/img34.png';
import img35 from '../images/img35.png';
import img36 from '../images/img36.png';
import img5 from '../images/img5.svg';




function Foot() {
  return (
    <div>
     
    <section class="ten">
      <div class="row6">
        <div class="col19">
       <h3 class="head3">Subscribe to our awesome emails.</h3>
       <p>Get our latest offers and news straight in your inbox.</p>
       <br></br>
       <br></br>
       <input type="search" placeholder="Please enter an email address"/>
       <button class="btn5" type="submit">Subscribe</button>
        </div>
        <div class="col20">
            <h3 class="head3">Download our apps</h3>
            <p>Shop our products and offers on-the-go.</p>
             </div>
        </div>  
        <br></br>
        <hr></hr>

    </section>
    <section class="eleven">
    <div class="row7">
        <div class="col21">
        <h3 class="head4">Women</h3>
        <p class="p1">Tops<br></br>Sportswear<br></br>Bottoms<br></br>Winterwear<br></br>Ethnicwear</p>
        </div>
        <div class="col22">
          <h3 class="head4">Men</h3>
        <p class="p1">Tops<br></br>Sportswear<br></br>Bottoms<br></br>Winterwear<br></br>Shoes</p>  
        </div>
        <div class="col23">
         <h3 class="head4">Kids</h3>
        <p class="p1">Tops<br></br>Shirts<br></br>Jeans<br></br>Winterwear<br></br>Sports<br></br>Ballerina</p>   
        </div>
        <div class="col24">
          <h3 class="head4">URB_N</h3>
        <p class="p1">Tops<br></br>Sportswear<br></br>Bottoms<br></br>Winterwear<br></br>T-shirts</p>  
        </div>
        </div>
        <div class="row8">

        <div class="col25">
            <h3 class="head4">Help</h3>
        <p class="p1">Contact us<br></br>Shipping<br></br>Returns<br></br>Exchange<br></br>Policy<br></br>Help center</p>
            
        </div>
        <div class="col26">
             <h3 class="head4">About</h3>
             <p class="p1">About us<br></br>Write to us<br></br>Careers<br></br>Store<br></br>Max Cares<br></br>Landmark</p>
            

        </div>
        
    </div> 
    <hr></hr> 
    </section>

    <section class="twelve">
        <div class="row9">
            <div class="col27">
                <img src={img34}/>
             <p>Talk to us <br></br>1800-123-1444</p>
            </div>
            <div class="col28">
                <img src={img35}/>
              <p>Helpcentre<br></br>help.maxfashion.com</p>  
            </div>
            <div class="col29">
                <img src={img36}/>
              <p>Write to us <br></br>help@maxfashions.in</p>  
            </div>
            <div class="col30">
              <img class="i8" src={img31} width="30px"/>
              <img class="i8"  src={img32} width="30px"/>
              <img class="i8"  src={img33} width="30px"/>
            </div>
        </div>
        <hr></hr>
        <br></br>
        <div class="row10">
            <div class="col31">
             <img class="i9" src={img5} width="100px"/>
            </div>
             <div class="col32">
               <p>© 2025 Retail World Limited.<br></br>Terms & Conditions - Privacy Policy</p> 
            </div>
        </div>
        

    </section>

    </div>
  )
}

export default Foot












 