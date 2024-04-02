import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        }
    }
});
export const {add}=cartSlice.actions;//functions
export default cartSlice.reducer;//state