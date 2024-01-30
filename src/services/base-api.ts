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


export type CreateDeckType = {
  cover?: string
  isPrivate?: boolean
  name: string
}


export type Deck = {
  author: Author
  cardsCount: number
  cover?: null | string
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted: boolean | null
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export type Author = {
  id: string
  name: string
}

export type DecksResponse = {
  items: Deck[]
  maxCardsCount: number
  pagination: Pagination
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
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
      addDeck: builder.mutation<DecksResponse, FormData>({
        invalidatesTags: ['Decks'],
        query: args => {
          return {
            body: args,
            method: 'POST',
            url: '/v1/decks',
          }
        },

      createDeck: builder.mutation<any, CreateDeckType>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
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
      me: builder.query<any, void>({
        query: () => ({
          url: `/v1/auth/me`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
})


export const { useAddDeckMutation, useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery, useMeQuery } =
  baseApi

