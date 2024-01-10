import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultUnlabeledUnchecked: Story = {
  args: {
    checked: false,
    label: '',
  },
}

export const DefaultUnlabeledChecked: Story = {
  args: {
    checked: true,
    label: '',
  },
}

export const DefaultLabeledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Check-box',
  },
}

export const DefaultLabeledChecked: Story = {
  args: {
    checked: true,
    label: 'Check-box',
  },
}

export const DisabledUnlabeledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
  },
}

export const DisabledUnlabeledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

export const DisabledLabeledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Check-box',
  },
}

export const DisabledLabeledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Check-box',
  },
}
