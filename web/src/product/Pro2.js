import React from 'react'
import './Pro2.css';
import Map1 from '../mapping/Map1';

function Pro2() {
  return (
    <div>
       
       <section class="sixteen">
        <h2 class="h12">Perfect Everyday Pants</h2>

        <div class="row16">
        {Map1.map((item)=>(
            <div class="col41" key={item.id}>
                <div class ="card">
                    <img src={item.images} width={220} height={250} alt={item.title}/>
                    <div class="card-body">
                        <p class="card-text">₹{item.price}</p>
                    </div>
                </div>

            </div>
        ))}
        </div>



       </section>

    </div>
  )
}

export default Pro2