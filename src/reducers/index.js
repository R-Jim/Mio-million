import { configureStore } from '@reduxjs/toolkit'
import StageSlice, { fetchMessages, PAGE_SIZE } from './stage'

const store = configureStore({
    reducer: {
        messages: StageSlice.reducer
    },
})

store.dispatch(fetchMessages({ page: 1, pageSize: PAGE_SIZE }))

export default store
