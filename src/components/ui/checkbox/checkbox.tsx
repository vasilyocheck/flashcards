import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Tick } from '@/components/ui/checkbox/tick/tick'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = ComponentPropsWithoutRef<typeof RadixCheckbox.Root> & {
  callback?: (checked: boolean) => void
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
}

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ callback, checked, disabled, id, label, ...rest }, ref) => {
    const handleCheckedChange = () => {
      if (callback) {
        callback(!checked)
      }
    }
    const textLabelClass = !disabled ? s.textLabel : s.textLabel + ' ' + s.textLabelDisabled

    return (
      <label className={s.root} htmlFor={id}>
        <button className={s.circle}>
          <RadixCheckbox.Root
            checked={checked}
            className={!disabled ? s.CheckboxRoot : s.CheckboxRoot + ' ' + s.disabled}
            defaultChecked
            disabled={disabled}
            id={id}
            onCheckedChange={handleCheckedChange}
            ref={ref}
            {...rest}
          >
            <RadixCheckbox.Indicator>
              <Tick disabled={disabled} />
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
        </button>
        {label && <span className={textLabelClass}>{label}</span>}
      </label>
    )
  }
)
