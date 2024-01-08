import { Item } from '@/components/ui/dropdownmenu/item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdownmenu.module.scss'

import enter from './../button/icons/button-enter.svg'
import user from './icons/user.svg'
import image from './img/anonim.jpeg'

type Props = {
  img?: string
}

export const DropdownMenuComponent = ({ img }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <img className={s.DropdownMenuImage} src={img ? img : image} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Label className={s.DropdownMenuLabel}>
            <img className={s.DropdownMenuImage} src={img ? img : image} />
            <div className={s.InfoProfile}>
              <span className={s.InfoProfileName}>Ivan</span>
              <span className={s.InfoProfileMail}>j&johnson@gmail.com</span>
            </div>
          </DropdownMenu.Label>
          {/*<DropdownMenu.Item className={s.DropdownMenuItem}>My profile</DropdownMenu.Item>*/}
          {/*<DropdownMenu.Item className={s.DropdownMenuItem}>Sign Up</DropdownMenu.Item>*/}
          <Item icon={user}>My profile</Item>
          <Item icon={enter}>Sign Up</Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
