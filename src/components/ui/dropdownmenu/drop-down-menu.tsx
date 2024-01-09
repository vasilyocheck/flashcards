import { Item } from '@/components/ui/dropdownmenu/item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import arrow from './icons/arrow.svg'
import deleteIcon from './icons/delete.svg'
import edit from './icons/edit.svg'
import play from './icons/play.svg'

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
        <Item icon={play}>Learn</Item>
        <Item icon={edit}>Edit</Item>
        <Item icon={deleteIcon}>Delete</Item>
        <img className={s.Arrow} src={arrow} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
