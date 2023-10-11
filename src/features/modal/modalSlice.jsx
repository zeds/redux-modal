import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoginOpen: false,
	isRegisterOpen: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openLogin: (state, action) => {
			state.isLoginOpen = action.payload.open;
		},
		openRegister: (state, action) => {
			state.isRegisterOpen = action.payload.open;
		},
	},
});

export const { openLogin, openRegister } = modalSlice.actions;
export default modalSlice.reducer; //use from store
