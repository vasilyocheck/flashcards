import { LoginParamsType } from '@/components/auth/sign-in-form'
import { baseApi } from '@/services/base-api'
import {
  MeResponse,
  RecoverPassArgs,
  SignUpArgs,
  SignUpResponse,
} from '@/services/services/auth/auth.types'
import { LoginResponseType } from '@/services/services/decks/decks.types'

export const AuthService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponseType, LoginParamsType>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      me: builder.query<MeResponse, void>({
        query: () => ({
          url: `/v1/auth/me`,
        }),
      }),
      recoverPass: builder.mutation<void, RecoverPassArgs>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `/v1/auth/recover-password`,
        }),
      }),
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `/v1/auth/sign-up`,
        }),
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery, useRecoverPassMutation, useSignUpMutation } =
  AuthService
