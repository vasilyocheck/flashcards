import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

type Props = {
  children?: string
  icon?: string
}

export const Item = ({ children, icon }: Props) => {
  return (
    <DropdownMenu.Item className={s.DropdownMenuItem}>
      <img className={s.Image} src={icon} />
      {children}
    </DropdownMenu.Item>
  )
}
