import { SelectItem } from '@/components/ui/select/select-item'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type Props = {
  array: string[]
  callback?: (selectItem: string) => void
  className?: string
  disabled?: boolean
  value?: string
}

export const SelectComponent = ({
  array,
  callback,
  className = s.SelectTrigger,
  disabled = false,
  value,
}: Props) => {
  return (
    <Select.Root disabled={disabled} onValueChange={callback}>
      <Select.Trigger className={className}>
        <Select.Value aria-label={value} placeholder={array[0]} />
        <Select.Icon className={s.SelectIcon}>
          <svg
            className={s.SelectSvg}
            fill={'none'}
            height={'16'}
            viewBox={'0 0 16 16'}
            width={'16'}
            xmlns={'http://www.w3.org/2000/svg'}
          >
            <path
              className={s.SelectPath}
              d={
                'M3.67611 6.30553C3.6758 6.14977 3.73005 5.99881 3.82944 5.87887C3.8854 5.81136 3.95414 5.75556 4.0317 5.71466C4.10927 5.67376 4.19414 5.64856 4.28146 5.64051C4.36877 5.63246 4.45682 5.64171 4.54056 5.66774C4.62429 5.69377 4.70207 5.73607 4.76944 5.7922L8.34277 8.77887L11.9228 5.89887C11.991 5.84349 12.0694 5.80214 12.1537 5.77718C12.2379 5.75223 12.3262 5.74417 12.4136 5.75346C12.5009 5.76275 12.5856 5.78922 12.6627 5.83133C12.7397 5.87345 12.8078 5.93038 12.8628 5.99887C12.9235 6.06785 12.9692 6.14862 12.9972 6.23613C13.0252 6.32364 13.0348 6.41599 13.0254 6.50738C13.016 6.59878 12.9879 6.68725 12.9427 6.76724C12.8975 6.84722 12.8362 6.91701 12.7628 6.9722L8.76277 10.1922C8.64348 10.2903 8.49385 10.3439 8.33944 10.3439C8.18502 10.3439 8.03539 10.2903 7.9161 10.1922L3.91611 6.85887C3.83543 6.79199 3.77165 6.70703 3.72995 6.61089C3.68825 6.51475 3.6698 6.41014 3.67611 6.30553Z'
              }
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={s.SelectContent} position={'popper'}>
          <Select.Group className={s.SelectGroup}>
            {array.map((el, i) => (
              <SelectItem key={i} value={el}>
                {el}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
