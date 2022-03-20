import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'


export const sendMessages = createAsyncThunk('posts/sendMessages', async ({ name, email, frames, message }) => {
    // TODO: uncomment when API is ready
    // const response = await api.sendMessage({ name, email, frames, message })
    // return response
})
