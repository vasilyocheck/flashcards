import { DeckResponse } from '@/pages/main-page'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type GetDecksType = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      // createDeck: builder.mutation<any, void>({
      //   query: () => {},
      // }),
      getDecks: builder.query<DeckResponse, GetDecksType | void>({
        query: args => ({
          params: args ? args : undefined,
          url: `/v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDecksQuery } = baseApi
