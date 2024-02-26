import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

const signInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(3, 'Use 3 characters or more for your password'),
  rememberMe: z.boolean().default(false),
})

export type SignInFormValues = z.infer<typeof signInSchema>

export const useSignInForm = () =>
  useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(signInSchema),
  })
