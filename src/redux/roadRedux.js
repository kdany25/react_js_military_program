import { createSlice } from "@reduxjs/toolkit";

export const roadSlice = createSlice({
  name: "road",
  initialState: {
    roads: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getRoadStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getRoadSuccess: (state, action) => {
      state.isFetching = false;
      state.roads = action.payload;
    },
    getRoadFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteRoadStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteRoadSuccess: (state, action) => {
      state.isFetching = false;
      state.roads.splice(
        state.roads.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteRoadFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateRoadStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateRoadSuccess: (state, action) => {
      state.isFetching = false;
      state.roads[
        state.roads.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.road;
    },
    updateRoadFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //
    addRoadStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addRoadSuccess: (state, action) => {
      state.isFetching = false;
      state.roads.push(action.payload);
    },
    addRoadFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getRoadStart,
  getRoadSuccess,
  getRoadFailure,
  deleteRoadStart,
  deleteRoadSuccess,
  deleteRoadFailure,
  updateRoadStart,
  updateRoadSuccess,
  updateRoadFailure,
  addRoadStart,
  addRoadSuccess,
  addRoadFailure,
} = roadSlice.actions;

export default roadSlice.reducer;
