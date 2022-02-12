import {
  loginFailure,
  loginStart,
  loginSuccess,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} from "./userRedux";
import { publicRequest, userRequest } from "../requestMethod";
import {
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
} from "./patientRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

//get patient
export const getPatient = async (dispatch) => {
  dispatch(getPatientStart());
  try {
    const res = await publicRequest.get("/Health");
    dispatch(getPatientSuccess(res.data));
  } catch (err) {
    dispatch(getPatientFailure());
  }
};

//delete patient
export const deletePatient = async (id, dispatch) => {
  dispatch(deletePatientStart());
  try {
    const res = await userRequest.delete(`/Health/${id}`);
    dispatch(deletePatientSuccess(res.data));
  } catch (err) {
    dispatch(deletePatientFailure());
  }
};
export const updatePatient = async (id, patient, dispatch) => {
    dispatch(updatePatientStart());
    try {
      // update
      dispatch(updatePatientSuccess({ id, patient }));
    } catch (err) {
      dispatch(updatePatientFailure());
    }
  };
  export const addPatient = async (patient , dispatch) => {
    dispatch(addPatientStart());
    try {
      const res = await userRequest.post(`/Health`, patient);
      dispatch(addPatientSuccess(res.data));
    } catch (err) {
      dispatch(addPatientFailure());
    }
  };