import { FieldValues, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-new-password.module.scss'

export const CreateNewPassword = () => {
  const passwordSchema = z.object({
    password: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  })
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(passwordSchema),
  })
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Typography className={s.title} variant={'large'}>
          Create new password
        </Typography>
        <div className={s.textField}>
          <TextField {...register('password')} label={'Password'} type={'password'}></TextField>
          {errors.password?.message && (
            <Typography className={s.errorMessage} variant={'error'}>
              {errors.password.message as string}
            </Typography>
          )}
        </div>
        <Typography className={s.text} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth style={{ marginBottom: '24px' }} type={'submit'}>
          Create new password
        </Button>
      </Card>
    </form>
  )
}
