import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'
import messages from '../configs/messages'

export const PAGE_SIZE = 5

export const fetchMessages = createAsyncThunk('posts/fetchMessages', async ({ page, pageSize }) => {
    // TODO: uncomment when API is ready
    // const response = await api.getMessage({ page, pageSize })
    // return response
    return {
        page,
        pageCount: 4,
        pageData: messages,
    }
})

const stageSlice = createSlice({
    name: 'messages',
    initialState: {
        pageSize: PAGE_SIZE,
        current: 1,
        pageCount: 0,
        items: [],
        status: 'idle',
        error: "",
        isReady: false,
    },
    reducers: {
        nextPage: (state) => {
            state.current += 1
        },
        previousPage: (state) => {
            state.current -= 1
        },
        readyPage: (state) => {
            state.isReady = true
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMessages.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMessages.fulfilled, (state, { payload: { page, pageCount, pageData } }) => {
                state.status = 'succeeded'
                state.current = page
                state.pageCount = pageCount
                state.items = state.items.concat(pageData)
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Action creators are generated for each case reducer function
export const { nextPage, previousPage, readyPage } = stageSlice.actions


export const getCurrentPageMessages = ({ messages: { items, current, pageSize } }) => items.slice((current - 1) * pageSize, current * pageSize)

export const getMessagesState = ({ messages }) => messages

export default stageSlice
