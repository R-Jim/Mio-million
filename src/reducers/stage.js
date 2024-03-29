import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import api from '../api'
import messages from '../configs/messages'

export const PAGE_SIZE = 20

export const fetchMessages = createAsyncThunk('posts/fetchMessages', async ({ page, pageSize }) => {
    // const response = await api.getMessage({ page, pageSize })
    // return response

    return {
        page,
        pageCount: Math.ceil(messages.length / PAGE_SIZE),
        pageData: messages.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
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
        isAssetLoaded: false,
    },
    reducers: {
        nextPage: (state) => {
            state.current += 1
        },
        previousPage: (state) => {
            state.current -= 1
        },
        markAssetAsLoaded: (state) => {
            state.isAssetLoaded = true
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
                state.items.splice((page - 1) * state.pageSize, state.pageSize, ...pageData)
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

// Action creators are generated for each case reducer function
export const { nextPage, previousPage, markAssetAsLoaded } = stageSlice.actions


export const getCurrentPageMessages = ({ messages: { items, current, pageSize } }) => items.slice((current - 1) * pageSize, current * pageSize)

export const getMessagesState = ({ messages }) => messages

export const getIsAssetLoaded = ({ messages }) => messages.isAssetLoaded

export default stageSlice
