import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

type CardComponent = <T extends ElementType = 'div'>(
  props: CardProps<T> & { ref?: Ref<ElementRef<T>> }
) => ReactNode

export const Card: CardComponent = forwardRef(
  <T extends ElementType>(
    {
      as,
      children,
      className,
      ...rest
    }: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>,
    ref: Ref<ElementRef<T>>
  ) => {
    const Component: ElementType = as || 'div'

    return (
      <Component className={`${className ? s[className] : s.default}`} {...rest} ref={ref}>
        {children}
      </Component>
    )
  }
)
