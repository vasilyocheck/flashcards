import { Modal } from '@/components/ui/modal/modal'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
