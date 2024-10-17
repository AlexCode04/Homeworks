// store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', // 'checking', 'authenticated', 'not-authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
            state.errorMessage = null;
        },
        logout: (state, action) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
            state.errorMessage = action.payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
export default authSlice.reducer;
