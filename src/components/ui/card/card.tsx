import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  children?: string
  className?: string
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => {
  const { as: Component = 'div', children, className, ...rest } = props

  return (
    <Component className={`${className ? s[className] : s.default}`} {...rest}>
      {children}
    </Component>
  )
}
