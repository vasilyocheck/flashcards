import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroupComponent, RadioGroupProps } from '@/components/ui/radio/radio'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroupComponent {...restProps} name={name} onValueChange={onChange} value={value} />
}
