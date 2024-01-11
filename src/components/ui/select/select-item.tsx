import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type Props<T extends ElementType = 'div'> = {
  className?: string
  value: string
} & ComponentPropsWithoutRef<T>

export const SelectItem = React.forwardRef(({ children, className, value, ...props }: Props) => {
  return (
    <Select.Item className={s.SelectItem} value={value} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
})
