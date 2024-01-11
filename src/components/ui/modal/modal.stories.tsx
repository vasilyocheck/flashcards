import { Button } from '@/components/ui/button'
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
  render: () => (
    <Modal nameButton={'click'}>
      <div>123</div>
      <div>Привет чел</div>
      <Button>click</Button>
    </Modal>
  ),
}
