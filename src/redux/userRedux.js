import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logOutStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		logOutSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = null;
		},
		logOutFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		getUserStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getUserSuccess: (state, action) => {
			state.isFetching = false;
			state.users = action.payload;
		},
		getUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		addUserStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addUserSuccess: (state, action) => {
			state.isFetching = false;
			state.users.push(action.payload);
		},
		addUserFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	getUserStart,
	getUserSuccess,
	getUserFailure,
	addUserStart,
	addUserSuccess,
	addUserFailure,
	logOutStart,
	logOutSuccess,
	logOutFailure,
} = userSlice.actions;
export default userSlice.reducer;
