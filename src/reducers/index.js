import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import messages from '../configs/messages'

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        step: 5,
        current: 0,
        items: messages
    },
    reducers: {
        nextPage: (state) => {
            state.current += 1
        },
        previousPage: (state) => {
            state.current -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { nextPage, previousPage } = messagesSlice.actions


export const getCurrentPageMessages = ({ messages: { items, current, step } }) => items.slice(current * step, (current + 1) * step)

export const getMessagesState = ({ messages }) => messages

export default configureStore({
    reducer: {
        messages: messagesSlice.reducer
    },
})
