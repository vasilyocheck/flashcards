import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './header'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderWithButton = {
  render: () => {
    return <Header />
  },
}

export const HeaderWithAvatar: Story = {
  args: {
    userEmail: 'sample@sample.com',
    userName: 'Ivan',
  },
}
