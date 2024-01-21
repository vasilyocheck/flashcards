import type { Meta, StoryObj } from '@storybook/react'

import { EditIcon, LogoutIcon, MoreIcon } from '@/assets/icons'

import { IconButton } from './IconButton'

const meta: Meta<typeof IconButton> = {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/IconButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const More: Story = {
  args: {
    icon: <MoreIcon />,
  },
}

export const Edit: Story = {
  args: {
    icon: <EditIcon />,
    size: 1.6,
  },
}

export const Logout: Story = {
  args: {
    icon: <LogoutIcon />,
    size: 1.6,
  },
}
