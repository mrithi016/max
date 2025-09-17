import { configureStore } from "@reduxjs/toolkit";
import Cartslice from '../redux/Cartslice'; 

export const Store=configureStore({
    reducer:{
        cart:Cartslice,
    }
});

export default Store
