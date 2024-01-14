import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupComponent } from '@/components/ui/radio/radio'

const meta = {
  argTypes: {},
  component: RadioGroupComponent,
  tags: ['autodocs'],
  title: 'Components/RadioGroupComponent',
} satisfies Meta<typeof RadioGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    array: ['option 1', 'option 2', 'option 3', 'option 4'],
    defaultValue: 'option 3',
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    array: ['option 1', 'option 2', 'option 3', 'option 4'],
    defaultValue: 'option 2',
    disabled: true,
  },
}
