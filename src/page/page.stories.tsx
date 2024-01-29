import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components/auth/sign-in-form'

import { Page } from './page'

const meta: Meta<typeof Page> = {
  component: Page,
  tags: ['autodocs'],
  title: 'Components/Page',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <SignInForm />,
  },
}
