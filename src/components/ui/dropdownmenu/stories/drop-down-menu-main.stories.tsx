import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuAvatar } from '@/components/ui/dropdownmenu/drop-down-menu-main'

const meta: Meta<typeof DropdownMenuAvatar> = {
  component: DropdownMenuAvatar,
  decorators: [
    Story => (
      <div style={{ marginLeft: '45%' }}>
        <Story />
      </div>
    ),
  ],
  title: 'Components/DropdownMenuAvatar',
}

export default meta
type Story = StoryObj<typeof meta>

export const DropDownMenuAvatar: Story = {
  args: {
    mail: 'j&johnson@gmail.com',
    name: 'Ivan',
  },
}
