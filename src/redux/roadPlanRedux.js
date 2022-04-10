import { createSlice } from "@reduxjs/toolkit";

export const roadPlanSlice = createSlice({
  name: "roadplan",
  initialState: {
    roadPlans: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getRoadPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getRoadPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.roadPlans = action.payload;
    },
    getRoadPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteRoadPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteRoadPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.roadPlans.splice(
        state.roadPlans.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteRoadPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    addRoadPlanStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addRoadPlanSuccess: (state, action) => {
      state.isFetching = false;
      state.roadPlans.push(action.payload);
    },
    addRoadPlanFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getRoadPlanStart,
  getRoadPlanSuccess,
  getRoadPlanFailure,
  deleteRoadPlanStart,
  deleteRoadPlanSuccess,
  deleteRoadPlanFailure,
  addRoadPlanStart,
  addRoadPlanSuccess,
  addRoadPlanFailure,
} = roadPlanSlice.actions;

export default roadPlanSlice.reducer;
