import { CreateNewPassword } from '@/features/auth/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CreateNewPassword> = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/CreateNewPassword',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <CreateNewPassword></CreateNewPassword>,
}
