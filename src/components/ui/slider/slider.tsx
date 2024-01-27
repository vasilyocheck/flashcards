import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import cn from 'classnames'

import s from './slider.module.scss'

export type SliderProps = { label: string } & ComponentPropsWithoutRef<typeof SliderPrimitive.Root>

export const Slider = forwardRef<ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, label, ...restProps }, ref) => {
    const sliderClasses = cn(s.root, className)

    return (
      <div>
        {label && <span>{label}</span>}
        <div className={s.container}>
          <span className={s.valueWrapper}>{restProps?.value?.[0]}</span>
          <SliderPrimitive.Root className={sliderClasses} ref={ref} {...restProps}>
            <SliderPrimitive.Track className={s.track}>
              <SliderPrimitive.Range className={s.range} />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb aria-label={'Value min'} className={s.thumb} />
            <SliderPrimitive.Thumb aria-label={'Value max'} className={s.thumb} />
          </SliderPrimitive.Root>
          <span className={s.valueWrapper}>{restProps?.value?.[1]}</span>
        </div>
      </div>
    )
  }
)
