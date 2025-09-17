import React from 'react'
import './Pro3.css';
import Map2 from '../mapping/Map2';

function Pro3() {
  return (
    <div>
       
       <section class="seventeen">
        <h2 class="h12">Perfect Everyday Pants</h2>

        <div class="row17">
        {Map2.map((item)=>(
            <div class="col42" key={item.id}>
                <div class ="card">
                    <img src={item.images} width={220} height={250} alt={item.title}/>
                    <div class="card-body">
                         <h5 class="card-title">{item.title}</h5>
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

export default Pro3