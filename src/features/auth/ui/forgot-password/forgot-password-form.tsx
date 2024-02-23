import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@/components'
import { ControlledTextField } from '@/components/controlled/controlled-text-field/controlled-textfield'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
})

export type ForgotPassFormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit?: (data: ForgotPassFormValues) => void
}

export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPassFormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmitHandler = (data: ForgotPassFormValues) => {
    if (data && onSubmit) {
      onSubmit(data)
    }
  }

  return (
    <form className={s.signUpForm} onSubmit={handleSubmit(onSubmitHandler)}>
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
      <Link to={'/login'}>
        <Typography className={s.tryLink}>Try logging in</Typography>
      </Link>
    </form>
  )
}
