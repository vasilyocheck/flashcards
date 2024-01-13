import { Tick } from '@/components/ui/checkbox/tick/tick'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxProps = {
  callback?: (checked: boolean) => void
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const { callback, checked, disabled, id, label } = props
  const handleCheckedChange = () => {
    if (callback) {
      callback(!checked)
    }
  }
  const textLabelClass = !disabled ? s.textLabel : s.textLabel + ' ' + s.textLabelDisabled

  return (
    <label className={s.root} htmlFor={id}>
      <span className={s.circle}>
        <RadixCheckbox.Root
          checked={checked}
          className={!disabled ? s.CheckboxRoot : s.CheckboxRoot + ' ' + s.disabled}
          defaultChecked
          disabled={disabled}
          id={id}
          onCheckedChange={handleCheckedChange}
        >
          <RadixCheckbox.Indicator className={s.CheckboxIndicator}>
            <Tick disabled={disabled} />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </span>
      {label && <span className={textLabelClass}>{label}</span>}
    </label>
  )
}
