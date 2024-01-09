import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {
    /*variant: {
      control: { type: 'radio' },
      options: ['unlabeled', 'labeled'],
    },*/
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unlabeled: Story = {
  args: {
    checked: false,
    label: 'unlabeled',
  },
}

export const UnlabeledChecked: Story = {
  args: {
    checked: true,
    label: 'unlabeled checked',
  },
}

export const Labeled: Story = {
  args: {
    checked: false,
    label: 'labeled',
  },
}
