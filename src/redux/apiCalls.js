import {
	loginFailure,
	loginStart,
	loginSuccess,
	getUserStart,
	getUserSuccess,
	getUserFailure,
	addUserStart,
	addUserSuccess,
	addUserFailure,
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
} from "./houseRedux";

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
} from "./roadRedux";
import {
	getHousePlanStart,
	getHousePlanSuccess,
	getHousePlanFailure,
	addHousePlanStart,
	addHousePlanSuccess,
	addHousePlanFailure,
	deleteHousePlanStart,
	deleteHousePlanSuccess,
	deleteHousePlanFailure,
} from "./housePlanRedux";

import {
	getHealthPlanStart,
	getHealthPlanSuccess,
	getHealthPlanFailure,
	addHealthPlanStart,
	addHealthPlanSuccess,
	addHealthPlanFailure,
	deleteHealthPlanStart,
	deleteHealthPlanSuccess,
	deleteHealthPlanFailure,
} from "./healthPlanRedux";

import {
	getRoadPlanStart,
	getRoadPlanSuccess,
	getRoadPlanFailure,
	addRoadPlanStart,
	addRoadPlanSuccess,
	addRoadPlanFailure,
	deleteRoadPlanStart,
	deleteRoadPlanSuccess,
	deleteRoadPlanFailure,
} from "./roadPlanRedux";

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
//add patient
export const addUser = async (user, dispatch) => {
	dispatch(addUserStart());
	try {
		const res = await userRequest.post(`auth/register`, user);
		dispatch(addUserSuccess(res.data));
	} catch (err) {
		dispatch(addUserFailure());
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
export const addPatient = async (patient, dispatch) => {
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
export const addHouse = async (house, dispatch) => {
	dispatch(addHouseStart());
	try {
		const res = await userRequest.post(`/house`, house);
		dispatch(addHouseSuccess(res.data));
	} catch (err) {
		dispatch(addHouseFailure());
	}
};

//add houseplan
export const addHousePlan = async (house, dispatch) => {
	dispatch(addHousePlanStart());
	try {
		const res = await userRequest.post(`/HousePlan`, house);
		dispatch(addHousePlanSuccess(res.data));
	} catch (err) {
		dispatch(addHousePlanFailure());
	}
};

//get  houseplan
export const getHousePlan = async (dispatch) => {
	dispatch(getHousePlanStart());
	try {
		const res = await publicRequest.get("/HousePlan");
		dispatch(getHousePlanSuccess(res.data));
	} catch (err) {
		dispatch(getHousePlanFailure());
	}
};
//delete house plan
export const deleteHousePlan = async (id, dispatch) => {
	dispatch(deleteHousePlanStart());
	try {
		const res = await userRequest.delete(`/HousePlan/${id}`);
		dispatch(deleteHousePlanSuccess(res.data));
	} catch (err) {
		dispatch(deleteHousePlanFailure());
	}
};

//add healthplan
export const addHealthPlan = async (house, dispatch) => {
	dispatch(addHealthPlanStart());
	try {
		const res = await userRequest.post(`/HealthPlan`, house);
		dispatch(addHealthPlanSuccess(res.data));
	} catch (err) {
		dispatch(addHealthPlanFailure());
	}
};

//delete health plan
export const deleteHealthPlan = async (id, dispatch) => {
	dispatch(deleteHealthPlanStart());
	try {
		const res = await userRequest.delete(`/HealthPlan/${id}`);
		dispatch(deleteHealthPlanSuccess(res.data));
	} catch (err) {
		dispatch(deleteHealthPlanFailure());
	}
};

//get  healthplan
export const getHealthPlan = async (dispatch) => {
	dispatch(getHealthPlanStart());
	try {
		const res = await publicRequest.get("/HealthPlan");
		dispatch(getHealthPlanSuccess(res.data));
	} catch (err) {
		dispatch(getHealthPlanFailure());
	}
};

//add roadplan
export const addRoadPlan = async (house, dispatch) => {
	dispatch(addRoadPlanStart());
	try {
		const res = await userRequest.post(`/RoadsPlan`, house);
		dispatch(addRoadPlanSuccess(res.data));
	} catch (err) {
		dispatch(addRoadPlanFailure());
	}
};

//get  roadplan
export const getRoadPlan = async (dispatch) => {
	dispatch(getRoadPlanStart());
	try {
		const res = await publicRequest.get("/RoadsPlan");
		dispatch(getRoadPlanSuccess(res.data));
	} catch (err) {
		dispatch(getRoadPlanFailure());
	}
};

//delete house plan
export const deleteRoadPlan = async (id, dispatch) => {
	dispatch(deleteRoadPlanStart());
	try {
		const res = await userRequest.delete(`/RoadsPlan/${id}`);
		dispatch(deleteRoadPlanSuccess(res.data));
	} catch (err) {
		dispatch(deleteRoadPlanFailure());
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
export const addRoad = async (road, dispatch) => {
	dispatch(addRoadStart());
	try {
		const res = await userRequest.post(`/roads`, road);
		dispatch(addRoadSuccess(res.data));
	} catch (err) {
		dispatch(addRoadFailure());
	}
};
