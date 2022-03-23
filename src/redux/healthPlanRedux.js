import { createSlice } from "@reduxjs/toolkit";

export const healthPlanSlice = createSlice({
  name: "healthplan",
  initialState: {
    healthPlans: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHealthPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHealthPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.healthPlans = action.payload;
    },
    getHealthPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHealthPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHealthPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.healthPlans.splice(
        state.healthPlans.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHealthPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    addHealthPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHealthPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.healthPlans.push(action.payload);
    },
    addHealthPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getHealthPlanStart,
  getHealthPlanSuccess,
  getHealthPlanFailure,
  deleteHealthPlanStart,
  deleteHealthPlanSuccess,
  deleteHealthPlanFailure,
  addHealthPlanStart,
  addHealthPlanSuccess,
  addHealthPlanFailure,
} = healthPlanSlice.actions;

export default healthPlanSlice.reducer;
