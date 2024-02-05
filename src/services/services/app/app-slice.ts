import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type AppType = {
  userId: string
}

const initialState: AppType = {
  userId: '1',
}

const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setUserId: (state, action: PayloadAction<{ userId: string }>) => {
      debugger
      state.userId = action.payload.userId
    },
  },
})

const appActions = appSlice.actions

export const { setUserId } = appActions
export const appReducer = appSlice.reducer
