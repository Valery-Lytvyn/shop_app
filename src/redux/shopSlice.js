import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   productData: [],
   userInfo: null,
   productQuantity: null,
};

const findItem = (state, action) => {
   return state.productData.find(item => item._id === action.payload._id);
}

export const shopSlice = createSlice({
   name: 'eshop',
   initialState,

   reducers: {
      addToCart: (state, action) => {
         const item = findItem(state, action)
         if (item) {
            item.quantity += action.payload.quantity;
         }
         else {
            state.productData.push(action.payload);
         }
      },
      removeItem: (state, action) => {
         state.productData = state.productData.filter(
            (item => item._id !== action.payload)
         )
      },
      incrementQuantity: (state, action) => {
         const item = findItem(state, action)
         if (item) {
            item.quantity++;
         }
      },
      decrementQuantity: (state, action) => {
         const item = findItem(state, action)
         if (item) {
            item.quantity--
         }
      },
      resetCart: state => { state.productData = [] }, // <= <= curly brackets are required
      addUser: (state, action) => {
         state.userInfo = action.payload;
      },
      removeUser: (state) => {
         state.userInfo = null;
      },
   }
})

export const {
   addToCart,
   removeItem,
   incrementQuantity,
   decrementQuantity,
   resetCart,
   addUser,
   removeUser,
} = shopSlice.actions;
export default shopSlice.reducer; 