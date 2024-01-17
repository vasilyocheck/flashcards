import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta: Meta<typeof Typography> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Some text',
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    children: 'Some text',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Some text',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Some text',
    variant: 'h3',
  },
}
export const Body1: Story = {
  args: {
    children: 'Some text',
    variant: 'body1',
  },
}
export const Subtitle1: Story = {
  args: {
    children: 'Some text',
    variant: 'subtitle1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Some text',
    variant: 'body2',
  },
}
export const Subtitle2: Story = {
  args: {
    children: 'Some text',
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Some text',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: 'Some text',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    children: 'Some text',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    children: 'Some text',
    variant: 'link2',
  },
}

export const Error: Story = {
  args: {
    children: 'Some text',
    variant: 'error',
  },
}
