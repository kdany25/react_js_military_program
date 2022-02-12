import { createSlice } from "@reduxjs/toolkit";

export const houseSlice = createSlice({
  name: "house",
  initialState: {
    houses: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHouseSuccess: (state, action) => {
      state.isFetching = false;
      state.houses = action.payload;
    },
    getHouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHousesStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHousesSuccess: (state, action) => {
      state.isFetching = false;
      state.houses.splice(
        state.houses.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateHouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateHouseSuccess: (state, action) => {
      state.isFetching = false;
      state.houses[
        state.houses.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.house;
    },
    updateHouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //
    addHouseStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHouseSuccess: (state, action) => {
      state.isFetching = false;
      state.houses.push(action.payload);
    },
    addHouseFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getHouseStart,
  getHouseSuccess,
  getHouseFailure,
  deleteHouseStart,
  deleteHouseSuccess,
  deleteHouseFailure,
  updateHouseStart,
  updateHouseSuccess,
  updateHouseFailure,
  addHouseStart,
  addHouseSuccess,
  addHouseFailure,
} = houseSlice.actions;

export default houseSlice.reducer;
