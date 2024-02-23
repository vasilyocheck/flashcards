import { baseApi } from '@/common/api'
import { authReducer } from '@/features/auth/model/auth-slice'
import { cardsReducer } from '@/features/cards'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    cards: cardsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
