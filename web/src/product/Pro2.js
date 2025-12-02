import React from 'react'
import './Pro2.css';
import Map1 from '../mapping/Map1';
import { useSelector,useDispatch } from 'react-redux';
import {addToCart,deleteFromCart} from '../redux/Slice';


function Pro2() {
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
       
       <section class="sixteen">
        <h2 class="h12">Perfect Everyday Pants</h2>

        <div class="row16">
        {Map1.map((item)=>(
            <div class="col41" key={item.id}>
                <div class ="card">
                    <img src={item.images} width={220} height={250} alt={item.title}/>
                    <div class="card-body">
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

export default Pro2