import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio.module.scss'

export type RadioGroupProps<T = string> = ComponentPropsWithoutRef<typeof RadioGroup.Root> & {
  ariaLabel?: string
  array: T[]
  className?: string
  defaultValue?: string
}

export const RadioGroupComponent = forwardRef<ElementRef<typeof RadioGroup.Root>, RadioGroupProps>(
  (props, ref) => {
    const {
      ariaLabel = 'radio group buttons',
      array,
      className = s.RadioGroupRoot,
      defaultValue,
      ...rest
    } = props

    return (
      <RadioGroup.Root
        aria-label={ariaLabel}
        className={className}
        defaultValue={defaultValue}
        {...rest}
        ref={ref}
      >
        {array.map((o, i) => {
          return (
            <div key={i + o} style={{ alignItems: 'center', display: 'flex' }}>
              <RadioGroup.Item className={s.RadioGroupItem} id={`${i}`} value={o}>
                <RadioGroup.Indicator className={s.RadioGroupIndicator} />
              </RadioGroup.Item>
              <label className={s.Label} htmlFor={`${i}`}>
                {o}
              </label>
            </div>
          )
        })}
      </RadioGroup.Root>
    )
  }
)
