import { baseApi } from '@/common/api'
import {
  MeResponse,
  RecoverPassArgs,
  SignUpArgs,
  SignUpResponse,
} from '@/features/auth/types/auth.types'
import { SignInFormValues } from '@/features/auth/ui/sign-in-form/use-sign-in-form'
import { LoginResponseType } from '@/features/decks/types/decks.types'

export const AuthService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponseType, SignInFormValues>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            AuthService.util.updateQueryData('me', undefined, () => null)
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        query: () => ({
          method: 'POST',
          url: 'v1/auth/logout',
        }),
      }),
      me: builder.query<MeResponse | null, void>({
        providesTags: ['Me'],
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
        invalidatesTags: ['Me'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `/v1/auth/sign-up`,
        }),
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRecoverPassMutation,
  useSignUpMutation,
} = AuthService
