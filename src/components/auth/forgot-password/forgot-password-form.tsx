import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@radix-ui/themes'
import { z } from 'zod'

import s from '@/components/auth/forgot-password/forgot-password-form.module.scss'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email(),
})

type FormValues = z.infer<typeof loginSchema>

export const ForgotPasswordForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <form className={s.signUpForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTitle}>Forgot your password?</div>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
      />
      <div className={s.emailComment}>
        Enter your email address and we will send you further instructions
      </div>
      <Button fullWidth type={'submit'}>
        Send Instructions
      </Button>
      <div className={s.tryLoginComment}>Did you remember your password?</div>
      <Link className={s.link}>Try logging in</Link>
    </form>
  )
}
