import { createSlice } from "@reduxjs/toolkit";

export const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patients: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getPatientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPatientSuccess: (state, action) => {
      state.isFetching = false;
      state.patients = action.payload;
    },
    getPatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deletePatientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deletePatientSuccess: (state, action) => {
      state.isFetching = false;
      state.patients.splice(
        state.patients.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deletePatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updatePatientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updatePatientSuccess: (state, action) => {
      state.isFetching = false;
      state.patients[
        state.patients.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.patient;
    },
    updatePatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //
    addPatientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPatientSuccess: (state, action) => {
      state.isFetching = false;
      state.patients.push(action.payload);
    },
    addPatientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPatientStart,
  getPatientSuccess,
  getPatientFailure,
  deletePatientStart,
  deletePatientSuccess,
  deletePatientFailure,
  updatePatientStart,
  updatePatientSuccess,
  updatePatientFailure,
  addPatientStart,
  addPatientSuccess,
  addPatientFailure,
} = patientSlice.actions;

export default patientSlice.reducer;
