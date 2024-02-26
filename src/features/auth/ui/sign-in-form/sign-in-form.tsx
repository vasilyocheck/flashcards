import { Link } from 'react-router-dom'

import { Button } from '@/components'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-textfield'
import { SignInFormValues, useSignInForm } from '@/features/auth/ui/sign-in-form/use-sign-in-form'

import s from './sign-in-form.module.scss'

type Props = {
  onSubmit: (data: SignInFormValues) => void
}

export const SignInForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignInForm()

  return (
    <form className={s.signInForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTitle}>Sign In</div>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
      />
      <ControlledTextField
        className={s.button}
        control={control}
        errorMessage={errors.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <div className={s.checkboxWrapper}>
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
      </div>

      <Link className={s.linkForgotPassword} to={'/forgot-pass'}>
        Forgot Password?
      </Link>
      <Button fullWidth type={'submit'}>
        Sign In
      </Button>

      <span className={s.already}>{"Don't have an account?"}</span>
      <Link className={s.link} to={'/sign-up'}>
        Sign Up
      </Link>
    </form>
  )
}
