import { DeckResponse } from '@/pages/decks-page/decks-page'
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

export type ArgCreateDeckType = {
  isPrivate?: boolean
  name: string
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
      addDeck: builder.mutation<any, ArgCreateDeckType>({
        invalidatesTags: ['Decks'],
        query: deck => {
          return {
            body: deck,
            method: 'POST',
            url: '/v1/decks',
          }
        },
      }),
      getDecks: builder.query<DeckResponse, GetDecksType | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ? args : undefined,
          url: `/v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
})

export const { useAddDeckMutation, useGetDecksQuery } = baseApi
