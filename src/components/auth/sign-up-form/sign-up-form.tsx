import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { useSignUpMutation } from '@/services/services/app/auth.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@radix-ui/themes'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

import { Button } from '../../ui/button'

const loginSchema = z
  .object({
    confirmPassword: z.string(),
    email: z.string().email(),
    password: z.string().min(3).max(30),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  })

type FormValues = z.infer<typeof loginSchema>

export const SignUpForm = () => {
  const navigate = useNavigate()
  const [signUp] = useSignUpMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    signUp({ email: data.email, password: data.password })
  }

  return (
    <form className={s.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTitle}>Sign Up</div>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
      />
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <ControlledTextField
        control={control}
        errorMessage={errors.confirmPassword?.message}
        label={'Confirm Password'}
        name={'confirmPassword'}
        type={'password'}
      />

      <Button fullWidth type={'submit'}>
        Sign Up
      </Button>
      <div className={s.already}>Already have an account?</div>
      <Link className={s.link} onClick={() => navigate('/login')}>
        Sign In
      </Link>
    </form>
  )
}
