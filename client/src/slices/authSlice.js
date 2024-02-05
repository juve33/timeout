import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('accessToken') || null,
    },
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.accessToken;
            localStorage.setItem('accessToken', action.payload.token)
        },
        logOut: (state, action) => {
            state.token = null;
            localStorage.removeItem('accessToken');
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
