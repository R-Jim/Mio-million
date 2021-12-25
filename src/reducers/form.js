import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'


export const sendMessages = createAsyncThunk('posts/sendMessages', async ({ name, email, frames, message }) => {
    const response = await api.sendMessage({ name, email, frames, message })
    return response
})
