import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  argTypes: {
    className: {
      control: { type: 'radio' },
    },
    variant: {
      control: { type: 'radio' },
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardComponent: Story = {
  render: () => <Card style={{ height: '540px' }} />,
}
