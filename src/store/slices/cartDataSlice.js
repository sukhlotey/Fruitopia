import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartDataSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }
})

export const {add,remove} = cartDataSlice.actions;
export default cartDataSlice.reducer;