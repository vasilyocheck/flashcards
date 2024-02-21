import { AssessValue } from '@/pages/card-page/assess-answer-options/assess-answer-options'
import { CardToEdit } from '@/pages/one-deck-page'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CardType = {
  answerValue: AssessValue
  cardToEdit: CardToEdit
  isAnswerShown: boolean
}

const initialState: CardType = {
  answerValue: 'Did not know',
  cardToEdit: null,
  isAnswerShown: false,
}

const cardsSlice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setAnswerValue: (state, action: PayloadAction<{ answerValue: AssessValue }>) => {
      state.answerValue = action.payload.answerValue
    },
    setCardToEdit: (state, action: PayloadAction<{ cardToEdit: CardToEdit }>) => {
      state.cardToEdit = action.payload.cardToEdit
    },
    setIsAnswerShown: (state, action: PayloadAction<{ isAnswerShown: boolean }>) => {
      state.isAnswerShown = action.payload.isAnswerShown
    },
  },
})

const cardsActions = cardsSlice.actions

export const { setAnswerValue, setCardToEdit, setIsAnswerShown } = cardsActions
export const cardsReducer = cardsSlice.reducer
