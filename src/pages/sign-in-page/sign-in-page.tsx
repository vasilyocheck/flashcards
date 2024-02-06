import { Navigate } from 'react-router-dom'

import { LoginParamsType, SignInForm } from '@/components/auth/sign-in-form'
import { Page } from '@/page'
import { useLoginMutation, useMeQuery } from '@/services/services/auth/auth.service'

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
