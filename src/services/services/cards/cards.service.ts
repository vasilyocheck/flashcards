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
      getCards: builder.query<any, { id: string | undefined }>({
        query: args => ({
          url: `/v1/decks/${args.id}/cards`,
        }),
      }),
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

export const { useGetCardsQuery, useGetRandomCardQuery, useSaveCardMutation } = CardsService
