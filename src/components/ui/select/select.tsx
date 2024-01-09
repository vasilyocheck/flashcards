import { SelectItem } from '@/components/ui/select/select-item'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type Props = {
  array: string[]
}

export const SelectComponent = ({ array }: Props) => (
  <Select.Root>
    <Select.Trigger aria-label={'Food'} className={s.SelectTrigger}>
      <Select.Value placeholder={array[0]} />
      <Select.Icon className={s.SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className={s.SelectContent}>
        <Select.Viewport className={s.SelectViewport}>
          <Select.Group>
            {array.map((el, i) => (
              <SelectItem key={i} value={el}>
                {el}
              </SelectItem>
            ))}

            {/*<SelectItem value={'Select-box'}>Select-box</SelectItem>*/}
          </Select.Group>

          {/*<Select.Separator className={s.SelectSeparator} />*/}
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

{
  /*ref={forwardedRef}*/
}
