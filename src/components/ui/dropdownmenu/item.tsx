import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

type Props = {
  callback?: () => void
  children?: string
  icon?: string
}

export const Item = ({ callback, children, icon }: Props) => {
  return (
    <DropdownMenu.Item className={s.DropdownMenuItem} onClick={callback}>
      <img className={s.Image} src={icon} />
      {children}
    </DropdownMenu.Item>
  )
}
