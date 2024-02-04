import { AssessValue } from '@/pages/card-page/assess-answer-options/assess-answer-options'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CardType = {
  answerValue: AssessValue
  isAnswerShown: boolean
}

const initialState: CardType = {
  answerValue: 'Did not know',
  isAnswerShown: false,
}

const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setAnswerValue: (state, action: PayloadAction<{ answerValue: AssessValue }>) => {
      state.answerValue = action.payload.answerValue
    },
    setIsAnswerShown: (state, action: PayloadAction<{ isAnswerShown: boolean }>) => {
      state.isAnswerShown = action.payload.isAnswerShown
    },
  },
})

const cardsActions = cardsSlice.actions

export const { setAnswerValue, setIsAnswerShown } = cardsActions
export const cardsReducer = cardsSlice.reducer
