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

import {
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
} from "./houseRedux"

import {
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
} from "./roadRedux"
//login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
//get users
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

  //add patient
  export const addPatient = async (patient , dispatch) => {
    dispatch(addPatientStart());
    try {
      const res = await userRequest.post(`/Health`, patient);
      dispatch(addPatientSuccess(res.data));
    } catch (err) {
      dispatch(addPatientFailure());
    }
  };


  //get  house
export const getHouse = async (dispatch) => {
    dispatch(getHouseStart());
    try {
      const res = await publicRequest.get("/house");
      dispatch(getHouseSuccess(res.data));
    } catch (err) {
      dispatch(getHouseFailure());
    }
  };
  
  //delete house
  export const deleteHouse = async (id, dispatch) => {
    dispatch(deleteHouseStart());
    try {
      const res = await userRequest.delete(`/house/${id}`);
      dispatch(deleteHouseSuccess(res.data));
    } catch (err) {
      dispatch(deleteHouseFailure());
    }
  };


  export const updateHouse = async (id, house, dispatch) => {
      dispatch(updateHouseStart());
      try {
        // update
        dispatch(updateHouseSuccess({ id, house }));
      } catch (err) {
        dispatch(updateHouseFailure());
      }
    };
  
    //add house
    export const addHouse = async (house , dispatch) => {
      dispatch(addHouseStart());
      try {
        const res = await userRequest.post(`/house`, house);
        dispatch(addHouseSuccess(res.data));
      } catch (err) {
        dispatch(addHouseFailure());
      }
    };


    
  //get  road
export const getRoad = async (dispatch) => {
  dispatch(getRoadStart());
  try {
    const res = await publicRequest.get("/roads");
    dispatch(getRoadSuccess(res.data));
  } catch (err) {
    dispatch(getRoadFailure());
  }
};

//delete road
export const deleteRoad = async (id, dispatch) => {
  dispatch(deleteRoadStart());
  try {
    const res = await userRequest.delete(`/roads/${id}`);
    dispatch(deleteRoadSuccess(res.data));
  } catch (err) {
    dispatch(deleteRoadFailure());
  }
};


export const updateRoad = async (id, road, dispatch) => {
    dispatch(updateRoadStart());
    try {
      // update road
      dispatch(updateRoadSuccess({ id, road }));
    } catch (err) {
      dispatch(updateRoadFailure());
    }
  };

  //add road
  export const addRoad = async (road , dispatch) => {
    dispatch(addRoadStart());
    try {
      const res = await userRequest.post(`/roads`, road);
      dispatch(addRoadSuccess(res.data));
    } catch (err) {
      dispatch(addRoadFailure());
    }
  };