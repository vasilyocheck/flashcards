import { DeckResponse } from '@/pages/decks-page'
import { DeckWithId } from '@/pages/one-deck-page'
import { baseApi } from '@/services/base-api'
import { MinMaxResponse } from '@/services/services/cards/cards.types'
import {
  ArgsType,
  DeckById,
  DecksResponse,
  GetDecksType,
} from '@/services/services/decks/decks.types'

export const DecksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      addDeck: builder.mutation<DecksResponse, FormData>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: '/v1/decks',
          }
        },
      }),
      deleteDeck: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Decks'],
        query: args => ({
          method: 'DELETE',
          url: `/v1/decks/${args.id}`,
        }),
      }),
      getDeck: builder.query<DeckWithId, { id: string }>({
        query: args => ({
          url: `/v1/decks/${args.id}`,
        }),
      }),
      getDeckById: builder.query<DeckById, ArgsType>({
        query: args => ({
          method: 'GET',
          url: `/v1/decks/${args.deckId}`,
        }),
      }),
      getDecks: builder.query<DeckResponse, GetDecksType | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ? args : undefined,
          url: `/v2/decks`,
        }),
      }),
      getMinMax: builder.query<MinMaxResponse, void>({
        query: () => ({
          url: `/v2/decks/min-max-cards`,
        }),
      }),
    }
  },
})

export const {
  useAddDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDeckQuery,
  useGetDecksQuery,
  useGetMinMaxQuery,
} = DecksService
