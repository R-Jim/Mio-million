import { configureStore } from '@reduxjs/toolkit'
import StageSlice, { fetchMessages, PAGE_SIZE } from './stage'
import FormSlice from './form'

const store = configureStore({
    reducer: {
        messages: StageSlice.reducer,
        form: FormSlice.reducer
    },
})

store.dispatch(fetchMessages({ page: 1, pageSize: PAGE_SIZE }))

export default store
