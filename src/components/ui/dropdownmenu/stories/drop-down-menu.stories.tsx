import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuMain } from '@/components/ui/dropdownmenu/drop-down-menu'

const meta: Meta<typeof DropdownMenuMain> = {
  component: DropdownMenuMain,
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: 'var(--color-dark-500)',
          borderRadius: '100%',
          height: '36px',
          marginLeft: '45%',
          width: '36px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  title: 'Components/DropdownMenu',
}

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenu: Story = {
  args: {},
}
