import { PersonalInformation } from '@/components/auth/personal-information/personal-information'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PersonalInformation> = {
  component: PersonalInformation,
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PersonalInformation mail={'j&johnson@gmail.com'} name={'Ivan'}></PersonalInformation>
  ),
}
