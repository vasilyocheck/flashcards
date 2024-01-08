import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type CheckboxProps = {
  checked?: boolean
  label?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const { label } = props

  return (
    <form>
      <div
        style={{
          alignItems: 'center',
          // backgroundColor: '#2d2d2d',
          display: 'flex',
          gap: '8px',
          padding: '6px',
          width: 'fit-content',
        }}
      >
        <RadixCheckbox.Root className={s.CheckboxRoot} defaultChecked id={'c1'}>
          <RadixCheckbox.Indicator className={s.CheckboxIndicator}>
            <CheckIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label className={s.Label} htmlFor={'c1'}>
          {label}
        </label>
      </div>
    </form>
  )
}
