import { createSlice } from "@reduxjs/toolkit";
import { getSwapiDataAsync } from "./swapiDataSlice";

const loaderSlice = createSlice({
    name: "loader",
    initialState: false,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSwapiDataAsync.pending, () => true);
        builder.addCase(getSwapiDataAsync.fulfilled, () => false);
        builder.addCase(getSwapiDataAsync.rejected, () => true);
    }
});

export default loaderSlice.reducer;