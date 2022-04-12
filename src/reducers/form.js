import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'




const formSlice = createSlice({
    name: 'form',
    initialState: {
        submitStatus: 0,
    },
    extraReducers(builder) {
        builder
            .addCase(sendMessages.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(sendMessages.fulfilled, (state, { payload: { status } }) => {
                state.status = 'succeeded'
                state.submitStatus = status
            })
            .addCase(sendMessages.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const getFormStatus = ({ form }) => form.submitStatus

export default formSlice
