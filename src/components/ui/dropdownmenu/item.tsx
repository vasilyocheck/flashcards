import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdownmenu.module.scss'

type Props = {
  children?: string
  icon?: string
}

export const Item = ({ children, icon }: Props) => {
  console.log(icon)

  return (
    <DropdownMenu.Item className={s.DropdownMenuItem}>
      <img className={s.Image} src={icon} />
      {children}
    </DropdownMenu.Item>
  )
}
