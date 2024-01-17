import { Item } from '@/components/ui/dropdownmenu/item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import enter from './../button/icons/button-enter.svg'
import arrow from './icons/arrow.svg'
import user from './icons/user.svg'
import image from './img/anonim.jpeg'

type Props = {
  img?: string
  mail: string
  name: string
}

export const DropdownMenuAvatar = ({ img, mail, name }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <img alt={'Avatar'} className={s.DropdownMenuImage} src={img ? img : image} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className={s.DropdownMenuContent}
        sideOffset={12}
        style={{ outline: '1px solid var(--color-dark-500)' }}
      >
        <DropdownMenu.Label className={s.DropdownMenuLabel}>
          <img alt={'Avatar'} className={s.DropdownMenuImageProfile} src={img ? img : image} />
          <div className={s.InfoProfile}>
            <span className={s.InfoProfileName}>{name}</span>
            <span className={s.InfoProfileMail}>{mail}</span>
          </div>
        </DropdownMenu.Label>
        <Item icon={user}>My profile</Item>
        <Item icon={enter}>Sign Out</Item>
        <img alt={'Arrow'} className={s.Arrow} src={arrow} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
