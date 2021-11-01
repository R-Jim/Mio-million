import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        step: 5,
        current: 0,
        items: [
            { message: "yo" }
        ]
    },
    reducers: {
        // increment: (state) => {
        //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //   // doesn't actually mutate the state because it uses the Immer library,
        //   // which detects changes to a "draft state" and produces a brand new
        //   // immutable state based off those changes
        //   state.value += 1
        // },
        // decrement: (state) => {
        //   state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = messagesSlice.actions


export const getCurrentPageMessages = ({ messages: { items, current, step } }) => items.slice(current, current + step)

export default configureStore({
    reducer: {
        messages: messagesSlice.reducer
    },
})
