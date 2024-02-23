import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import cn from 'classnames'

import s from './page.module.scss'

export const Page = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    const pageClasses = cn(s.root, className)

    return <div className={pageClasses} ref={ref} {...restProps} />
  }
)
