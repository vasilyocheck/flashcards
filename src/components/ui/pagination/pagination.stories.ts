import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/components/ui/pagination/pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationPageOneSelected: Story = {
  args: {
    choosePage: () => {},
    currentPage: 1,
    itemsCount: 1005,
    itemsPerPage: 10,
    setItemsPerPage: () => {},
  },
}

export const PaginationPageSevenSelected: Story = {
  args: {
    choosePage: () => {},
    currentPage: 7,
    itemsCount: 1005,
    itemsPerPage: 10,
    setItemsPerPage: () => {},
  },
}

export const Pagination98Selected: Story = {
  args: {
    choosePage: () => {},
    currentPage: 98,
    itemsCount: 1005,
    itemsPerPage: 10,
    setItemsPerPage: () => {},
  },
}
