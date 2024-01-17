// type Props = {}

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textfield'
import { Typography } from '@/components/ui/typography'

import s from './create-new-password.module.scss'

export const CreateNewPassword = () => {
  const { handleSubmit, register } = useForm()
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <span style={{ marginBottom: '33px', textAlign: 'center' }}>
          <Typography variant={'large'}>Create new password</Typography>
        </span>
        <TextField {...register('Password')} label={'Password'} type={'password'}></TextField>
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
