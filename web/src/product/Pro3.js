import React from 'react'
import './Pro3.css';
import Map2 from '../mapping/Map2';
import { useSelector,useDispatch } from 'react-redux';
import {addToCart,deleteFromCart} from '../redux/Slice';

function Pro3() {
   const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();

    const addCart=(item)=>{
      dispatch(addToCart(item))
    }
    const deleteCart=(item)=>{
      dispatch(deleteFromCart(item))
    }
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
                         {
                    cartitems.find(items=>items.id === item.id)?
                    (<button class="btn btn-danger cartbutton " onClick={()=>deleteCart(item)}>Remove From Cart</button>):
                    (<button class="btn btn-danger cartbutton " onClick={()=>addCart(item)}>Add To Cart</button>)
                  }

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