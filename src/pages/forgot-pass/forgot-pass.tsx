import { Navigate } from 'react-router-dom'

import { Loader } from '@/components'
import { useMeQuery, useRecoverPassMutation } from '@/features/auth/api/auth.service'
import { ForgotPassFormValues, ForgotPasswordForm } from '@/features/auth/ui/forgot-password'

import s from './forgot-pass.module.scss'

export const ForgotPass = () => {
  const { isError, isLoading } = useMeQuery()
  const [recoverPass] = useRecoverPassMutation()
  const isAuth = !isError

  const htmlMessage =
    '<h1>Hi, ##name##</h1><p>Click <a href="##token##">here</a> to recover your password</p>'
  const subject = 'recover password'

  const restorePass = (forgotPassData: ForgotPassFormValues) => {
    recoverPass({ email: forgotPassData.email, html: htmlMessage, subject: subject })
  }

  if (isLoading) {
    return <Loader />
  }

  if (isAuth) {
    return <Navigate replace to={'/'} />
  }

  return (
    <div className={s.forgotPass}>
      <ForgotPasswordForm onSubmit={restorePass} />
    </div>
  )
}
