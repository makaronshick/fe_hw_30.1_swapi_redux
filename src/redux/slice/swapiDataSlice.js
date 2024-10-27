import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSwapiDataAsync = createAsyncThunk(
    'swapi/get',
    async (fullLink, thunkApi) => {
        const resp = await fetch(fullLink, {
            method: 'GET'
        });
    
        return await resp.json();
    }
);

const swapiDataSlice = createSlice({
    name: "swapiData",
    initialState: '',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSwapiDataAsync.fulfilled, (prevState, action) => action.payload);
    }
});

export default swapiDataSlice.reducer;