import { createSlice } from "@reduxjs/toolkit";


export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        item: [],
        city: '',
    },
    reducers: {
        updateİtem: (state, action) => {
            state.item = action.payload;
        }
    },
});

export const { updateİtem } = weatherSlice.actions;

export default weatherSlice.reducer;