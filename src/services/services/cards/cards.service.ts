import { baseApi } from '@/services/base-api'
import {
  ArgsGrade,
  ArgsType,
  CardsResponse,
  GradeSaveResponse,
} from '@/services/services/cards/cards.types'

export const CardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getRandomCard: builder.query<CardsResponse, ArgsType>({
        query: args => {
          return {
            url: `/v1/decks/${args.cardId}/learn`,
          }
        },
      }),
      saveCard: builder.mutation<GradeSaveResponse, ArgsGrade>({
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: `/v1/decks/${args.cardId}/learn`,
          }
        },
      }),
    }
  },
})

export const { useGetRandomCardQuery, useSaveCardMutation } = CardsService
