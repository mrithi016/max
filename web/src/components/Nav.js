import React from 'react'
import './Nav.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.png';
import img5 from '../images/img5.svg';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
// import img10 from '../images/img10.jpg';
// import img11 from '../images/img11.jpg';
// import img12 from '../images/img12.jpg';
// import img13 from '../images/img13.jpg';
// import img14 from '../images/img14.jpg';
// import img15 from '../images/img15.jpg';
// import img16 from '../images/img16.jpg';
// import img17 from '../images/img17.jpg';
// import img18 from '../images/img18.jpg';
// import img19 from '../images/img19.jpg';
// import img20 from '../images/img20.jpg';
// import img21 from '../images/img21.jpg';
// import img22 from '../images/img22.jpg';
// import img23 from '../images/img23.jpg';
// import img24 from '../images/img24.jpg';
// import img25 from '../images/img25.jpg';
// import img26 from '../images/img26.jpg';
// import img27 from '../images/img27.jpg';
// import img28 from '../images/img28.jpg';
// import img29 from '../images/img29.jpg';
// import img30 from '../images/img30.jpg';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <section class="first">
        <ul>
            <Link to="/"><li><img src={img1}/>Home</li></Link>
            <li><img src={img2}/>Return To Store</li>
            <li><img src={img3}/>Online Gift Card</li>
            <li class="nav2"><img src={img4}/>Delivering To </li> |
            <li class="nav1">DownloadOur Apps</li> |
            <li class="nav1">Store Locator</li> |
            <li class="nav1">Help</li> 
             
            
        </ul>
        </section>

        <section class="second">
          <div class="row">
            <div class="col1">
              <a class="navbar"><img class="i1" src={img5}  ></img>
              </a>
              <img class="i2" src={img6}  ></img>
              <input class="form" type="search" placeholder="search"/>
            </div>
           <div class="col2">
            <button class="btn1">SIGN UP/SIGN IN</button> 
            <img class="i3" src={img7}></img>
           
            <Link to="basket"><img class="i3" src={img8}></img></Link>
            
            <img class="i3" src={img9}></img>
            
            </div> 
          </div>
        </section>

        {/* <section class="third">
          <div class="row1">
            <div class="col3">
              <img class="i4" src={img10}></img>
            </div>
              <div class="col4">
              <img class="i4" src={img11}></img>
            </div>
              <div class="col5">
              <img class="i4" src={img12}></img>
            </div>
              <div class="col6">
              <img class="i4" src={img13}></img>
            </div>
              <div class="col7">
              <img class="i4" src={img14}></img>
            </div>
          </div>
        </section>

        <section class="fourth">
          <h2 class="head">Buy 1 Get 1 Free + Extra 200 off. Code: SALE200 </h2>
        </section>

        <section class="fifth">

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="i5" src={img15}></img>

    </div>
    <div class="carousel-item">
      <img class="i5" src={img16}></img>
    </div>
    <div class="carousel-item">
      <img class="i5" src={img17}></img>
    </div>
     <div class="carousel-item">
      <img class="i5" src={img18}></img>
    </div>
    <div class="carousel-item">
      <img class="i5" src={img19}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </section>

        <section class="sixth">
          <h1 class="head1">New New You</h1>
          <img class="i6" src={img20}></img>
          
        </section>

          <section class="seven">
          <h1 class="head1">Now Trending</h1>
          <div class="row2">
            <div class="col8">
              <img class="i7"  src={img21} width="285px" height="400px"></img>
            </div>
              <div class="col9">
              <img class="i7" src={img22} width="285px" height="400px"></img>
            </div>
              <div class="col10">
              <img class="i7" src={img23}  width="285px" height="400px"></img>
            </div>
              <div class="col11">
              <img class="i7" src={img24}  width="285px" height="400px"></img>
            </div>
          </div>
          
          
        </section>
        <section class="eight">
          <img src={img25}/>
        </section>

        <section class="nine">
          <h1 class="head1">Explore Top Categories</h1>
          <div class="row3">
            <div class="col12">
              <h1 class="head2">Kids <br></br> Women<br></br> Men<br></br> URB_N </h1>

            </div>
             <div class="col13">
            <div class="row4">
             <h2 class="head2">Kids</h2> 
            
             <div class="col14">
             
             <div class="card">
  <img src={img26}/>
  <div class="card-body">
    <p class="card-text">0-2 Yrs</p>
  </div>
</div>
</div>

<div class="col15">
            <div class="card">
  <img src={img27}/>
  <div class="card-body">
    <p class="card-text">2-8 Yrs</p>
  </div>
</div>
</div>

<div class="col16">

            <div class="card">
  <img src={img28}/>
  <div class="card-body">
    <p class="card-text">0-2 Yrs</p>
  </div>
</div>
</div>

             
             <div class="row5">
              <div class="col17">

              <div class="card">
  <img src={img29}/>
  <div class="card-body">
    <p class="card-text">2-8 Yrs</p>
  </div>
</div>
</div>

  <div class="col18">

            <div class="card " >
  <img src={img30}/>
  <div class="card-body">
    <p class="card-text">8-16 Yrs</p>
  </div>
</div>
</div>

              
             </div>
            
            </div>

            </div>
          </div>
        </section> */}


    </div>
  )
}

export default Nav