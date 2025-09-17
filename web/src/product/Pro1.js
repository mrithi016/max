import React from 'react'
import './Pro1.css';
import Mapp from '../mapping/Mapp';
import { useSelector,useDispatch } from 'react-redux';
import { deleteFromCart,addTocart} from '../redux/Cartslice.js';



const Pro1=() =>{

     const cartitems=useSelector((state)=>state.cart.cartitems);
 
  const dispatch=useDispatch();


  const addCart=(item)=>{
    dispatch(addTocart(item))
  }
 
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}
  return (
    <div>
       
       <section class="fifteen">
        <h2 class="h12">Shop By Age</h2>

        <div class="row15">
        {Mapp.map((item)=>(
            <div class="col40" key={item.id}>
                <div class ="card">
                    <img src={item.images} width={180} height={200} alt={item.title}/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">₹{item.price}</p>

                     {
                       cartitems.find(Items=>Items.id===item.id)?(
                                    <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} > Remove From Cart </button>)
                                    :
                                    (<button class="btn btn-danger cartbutton"  onClick={()=>addCart(item)} > Add To Cart </button>)
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

export default Pro1