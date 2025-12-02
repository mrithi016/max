import { useSelector,useDispatch } from "react-redux";
import { deleteFromCart,updateQuantity } from "../redux/Slice";
import './Cart.css';

const Cart=()=>{
const cartitems=useSelector((state)=>state.cart.cartitems);
const dispatch=useDispatch();

const deleteCart=(item)=>{
    dispatch(deleteFromCart(item))
}
const incrementCart=(id,quantity)=>{
    dispatch(updateQuantity({id,quantity : quantity+1}))
}
const decrementCart=(id,quantity)=>{
    if(quantity>1){
        dispatch(updateQuantity({id,quantity : quantity-1}))
    }
}
return(
    <div>
    <div class="row15">
           {cartitems.map((item)=>(
               <div class="col40" key={item.id}>
                   <div class ="card">
                       <img src={item.images} width={180} height={200} alt={item.title}/>
                       <div class="card-body">
                           <h5 class="card-title">{item.title}</h5>
                           <p class="card-text">₹{item.price}</p>
   
                     <button class="btn btn-danger darkbtn" onClick={()=>dispatch(deleteFromCart(item))}>Remove</button>
     
     <div className='' style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
      <div class="qntbtn">
        <button class="btn btn-light quanbtn" onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>
            {item.quantity}
        <button class="btn btn-light quanbtn1" onClick={()=>{incrementCart(item.id,item.quantity)}} >+</button>
    </div>
            </div>
                        
   
   
   
   
                       </div>
                   </div>
   
               </div>
           ))}
           </div>
   






    </div>

)










}
export default Cart