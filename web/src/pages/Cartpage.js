import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteFromCart,updateQuantity } from '../redux/cartslice';


const Cartpage = () => {
    const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
   
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }


      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id, quantity : quantity+1}))
      }


  const decrementCart=(id,quantity)=>{
    if(quantity>1){
      dispatch(updateQuantity(
        {id, quantity : quantity-1}
      )
      )
    }
  }


  return (
    <div>
        <h1>Cart page</h1>
        <div class="row15">
        {cartitems.map((item)=>(
            <div class="col40" key={item.id}>
                <div class ="card">
                    <img src={item.images} width={180} height={200} alt={item.title}/>
                    <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">₹{item.price}</p>
                        <button onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>
                                
                                 <button onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button>
                        
                     
 
                            <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(item)} style={{backgroundColor:'red'}}> Delete </button>


                        </div>
                        </div>
                        </div>
        ))
    }
    </div>
                    
    </div>
  )
}
export default Cartpage