import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TabItem } from './tabItem/tabItem'
import { Tabs, TabsProps } from './tabs'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
}

export default meta
type Story = StoryObj<typeof meta>

const TabsWithHooks = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(args.value)

  const changeActiveTab = (tabValue: string) => {
    setActiveTab(tabValue)
  }

  return (
    <Tabs onValueChange={changeActiveTab} value={activeTab}>
      {args.children}
    </Tabs>
  )
}

export const Default: Story = {
  args: {
    children: (
      <>
        <TabItem value={'1'}>Switcher_1</TabItem>
        <TabItem value={'2'}>Switcher_2</TabItem>
        <TabItem disabled value={'3'}>
          Switcher_3
        </TabItem>
        <TabItem value={'4'}>Switcher_4</TabItem>
        <TabItem value={'5'}>Switcher_5</TabItem>
      </>
    ),
    value: '1',
  },
}

export const Controlled: Story = {
  args: {
    children: (
      <>
        <TabItem value={'1'}>Switcher_1</TabItem>
        <TabItem value={'2'}>Switcher_2</TabItem>
        <TabItem disabled value={'3'}>
          Switcher_3
        </TabItem>
        <TabItem value={'4'}>Switcher_4</TabItem>
        <TabItem value={'5'}>Switcher_5</TabItem>
      </>
    ),
    value: '1',
  },
  render: ({ children, ...restArgs }) => <TabsWithHooks {...restArgs}>{children}</TabsWithHooks>,
}
