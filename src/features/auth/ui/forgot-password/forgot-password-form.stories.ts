import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/features/auth/ui'

const meta = {
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordFormSample: Story = {}
