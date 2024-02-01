import { DeckResponse } from '@/pages/decks-page'
import { baseApi } from '@/services/base-api'
import { DecksResponse, GetDecksType } from '@/services/services/decks/decks.types'

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
      getDecks: builder.query<DeckResponse, GetDecksType | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ? args : undefined,
          url: `/v2/decks`,
        }),
      }),
      getMinMax: builder.query<any, void>({
        query: () => ({
          url: `/v2/decks/min-max-cards`,
        }),
      }),
      me: builder.query<any, void>({
        query: () => ({
          url: `/v1/auth/me`,
        }),
      }),
    }
  },
})

export const {
  useAddDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxQuery,
  useMeQuery,
} = DecksService