import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@radix-ui/themes'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  remember: z.boolean(),
})

export type LoginParamsType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: LoginParamsType) => void
}

export const SignInForm = ({ onSubmit }: Props) => {
  const navigate = useNavigate()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginParamsType>({ resolver: zodResolver(loginSchema) })

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
        <ControlledCheckbox control={control} label={'Remember me'} name={'remember'} />
      </div>

      <Link className={s.linkForgotPassword}>Forgot Password?</Link>
      <Button fullWidth type={'submit'}>
        Sign In
      </Button>

      <span className={s.already}>{"Don't have an account?"}</span>
      <Link className={s.link} onClick={() => navigate('/sign-up')}>
        Sign Up
      </Link>
    </form>
  )
}
