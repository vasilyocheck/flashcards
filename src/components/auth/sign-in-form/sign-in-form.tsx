import { useForm } from 'react-hook-form'

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

type FormValues = z.infer<typeof loginSchema>

export const SignInForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(loginSchema) })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form className={s.signInForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTitle}>Sign In</div>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
      />
      <div>
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <div className={s.checkbox_block}>
          <ControlledCheckbox control={control} label={'Remember me'} name={'remember'} />
        </div>
      </div>

      <div className={s.link_block}>
        <Link className={s.link__password}>Forgot Password?</Link>
      </div>

      <Button fullWidth type={'submit'}>
        Sign In
      </Button>
      <div className={s.linkAndQuestion_block}>
        <div className={s.already}>{"Don't have an account?"}</div>
        <Link className={s.link}>Sign Up</Link>
      </div>
    </form>
  )
}
