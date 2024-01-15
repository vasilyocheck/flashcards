import { ComponentPropsWithoutRef, ElementRef, JSX, ReactNode, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'

import s from './tabs.module.scss'

export type TabsProps = { children: ReactNode; label?: string } & ComponentPropsWithoutRef<
  typeof RadixTabs.Root
>

export const Tabs = forwardRef<ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ children, className, label, ...restProps }, ref): JSX.Element => {
    const rootClassName = cn(s.root, className)

    return (
      <RadixTabs.Root className={rootClassName} ref={ref} {...restProps}>
        {label && <label>{label}</label>}
        <RadixTabs.List className={s.list} loop>
          {children}
        </RadixTabs.List>
      </RadixTabs.Root>
    )
  }
)
