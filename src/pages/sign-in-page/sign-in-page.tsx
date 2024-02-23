import { Navigate } from 'react-router-dom'

import { Page } from '@/components'
import { useLoginMutation, useMeQuery } from '@/features/auth/api/auth.service'
import { LoginParamsType, SignInForm } from '@/features/auth/ui/sign-in-form'

export const SignInPage = () => {
  const { isError, isLoading } = useMeQuery()
  const [login] = useLoginMutation()

  const isAuth = !isError

  // todo: Vitaly: add preloader
  if (isLoading) {
    return <div>Preloader</div>
  }
  const loginHandler = (loginData: LoginParamsType) => {
    login(loginData)
  }

  if (isAuth) {
    return <Navigate replace to={'/'} />
  }

  return (
    <Page>
      <SignInForm onSubmit={loginHandler} />
    </Page>
  )
}
