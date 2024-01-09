import { Item } from '@/components/ui/dropdownmenu/item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import enter from './../button/icons/button-enter.svg'
import arrow from './icons/arrow.svg'
import user from './icons/user.svg'

export const DropdownMenuMain = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}></button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className={s.DropdownMenuContent}
        sideOffset={12}
        style={{ outline: '1px solid var(--color-dark-500)' }}
      >
        <Item icon={user}>My profile</Item>
        <Item icon={enter}>Sign Up</Item>
        <Item icon={enter}>Sign Up</Item>
        <img className={s.Arrow} src={arrow} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
