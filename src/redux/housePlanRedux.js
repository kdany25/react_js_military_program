import { createSlice } from "@reduxjs/toolkit";

export const housePlanSlice = createSlice({
  name: "houseplan",
  initialState: {
    housePlans: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHousePlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHousePlanSuccess: (state, action) => {
      state.isFetching = false;
      state.housePlans = action.payload;
    },
    getHousePlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHousePlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHousePlanSuccess: (state, action) => {
      state.isFetching = false;
      state.housePlans.splice(
        state.housePlans.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHousePlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    addHousePlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHousePlanSuccess: (state, action) => {
      state.isFetching = false;
      state.housePlans.push(action.payload);
    },
    addHousePlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getHousePlanStart,
  getHousePlanSuccess,
  getHousePlanFailure,
  deleteHousePlanStart,
  deleteHousePlanSuccess,
  deleteHousePlanFailure,
  addHousePlanStart,
  addHousePlanSuccess,
  addHousePlanFailure,
} = housePlanSlice.actions;

export default housePlanSlice.reducer;
