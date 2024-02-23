import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type AuthType = {
  userId: string
}

const initialState: AuthType = {
  userId: '1',
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setUserId: (state, action: PayloadAction<{ userId: string }>) => {
      debugger
      state.userId = action.payload.userId
    },
  },
})

const authActions = authSlice.actions

export const { setUserId } = authActions
export const authReducer = authSlice.reducer
