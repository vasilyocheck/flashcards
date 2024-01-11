import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider, SliderProps } from './slider'

const meta: Meta<typeof Slider> = {
  component: Slider,
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Slider',
}

export default meta
type Story = StoryObj<typeof meta>

const SliderWithHooks = (args: SliderProps) => {
  const [value, setValue] = useState(args.value)

  const handleOnValueChange = (value: number[]) => {
    setValue(value)
  }

  return <Slider {...args} onValueChange={handleOnValueChange} value={value} />
}

export const Default: Story = {
  args: {
    max: 10,
    min: 0,
    step: 1,
    value: [0, 10],
  },
  render: args => <SliderWithHooks {...args} />,
}
