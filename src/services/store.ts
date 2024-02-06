import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { baseApi } from '@/services/base-api'
import { authReducer } from '@/services/services/auth/auth-slice'
import { cardsReducer } from '@/services/services/cards/cards-slice'
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
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
