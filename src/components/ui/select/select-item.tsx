import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import { CheckIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type Props<T extends ElementType = 'input'> = {
  className?: string
} & ComponentPropsWithoutRef<T>

export const SelectItem = React.forwardRef(({ children, className, ...props }: Props) => {
  return (
    <Select.Item className={s.SelectItem} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={'SelectItemIndicator'}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})
