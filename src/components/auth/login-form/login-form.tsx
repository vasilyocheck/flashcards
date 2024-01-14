import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-textfield'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'email'}
        name={'email'}
      />
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        label={'password'}
        name={'password'}
      />
      <ControlledCheckbox
        control={control}
        label={'remember me'}
        name={'rememberMe'}
        required={false}
      />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
