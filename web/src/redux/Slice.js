import { createSlice } from "@reduxjs/toolkit";


const storedItems=localStorage.getItem('cart1')

const initialState={
    cartitems:storedItems?JSON.parse(storedItems):[]
}
const Slice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newItem=action.payload;
            const existitem=state.cartitems.find(item=>item.id===newItem.id)
            if(existitem){
                existitem.quantity = newItem.quantity;

            }else{
                state.cartitems.push(
                    newItem
                )
            }
            localStorage.setItem('cart1',JSON.stringify(state.cartitems))
        },
        deleteFromCart:(state,action)=>{
            state.cartitems=state.cartitems.filter(item=>item.id!==action.payload.id)
               localStorage.setItem('cart1',JSON.stringify(state.cartitems))
        },
        updateQuantity:(state,action)=>{
            const {id,quantity}=action.payload;
            const itemToUpdate=state.cartitems.find(item=>item.id===id)
            if(itemToUpdate){
                itemToUpdate.quantity=quantity;
            }
         localStorage.setItem('cart1',JSON.stringify(state.cartitems))
        }
    }
})
export default Slice.reducer;
export const {addToCart,deleteFromCart,updateQuantity}=Slice.actions;


