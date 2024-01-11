import { SelectComponent } from '@/components/ui/select/select'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectComponent> = {
  component: SelectComponent,
  title: 'Components/Select',
}

export default meta
type Story = StoryObj<typeof meta>

export const SelectComponentMain: Story = {
  args: {
    array: ['Vasiliy', 'Kirill', 'Vitaliy'],
  },
}
