import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'
import { DropdownMenuAvatar } from '@/components/ui/dropdownmenu/drop-down-menu-main'
import { AppLogo } from '@/components/ui/header/logo/app-logo'

import s from './header.module.scss'

type HeaderProps = {
  buttonVariant?: 'link' | 'primary' | 'secondary' | 'tertiary'
  callabck?: () => void
  userAvatar?: string
  userEmail?: string
  userName?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = (props: HeaderProps) => {
  const { buttonVariant = 'primary', callabck, userAvatar, userEmail, userName } = props
  const contentToShow =
    userName && userEmail ? (
      <div className={s.avaWrapper}>
        <span className={s.userName}>{userName}</span>
        <DropdownMenuAvatar img={userAvatar} mail={userEmail} name={userName} />
      </div>
    ) : (
      <Button callback={callabck} variant={buttonVariant}>
        Sign in{' '}
      </Button>
    )

  return (
    <div className={s.header}>
      <div className={s.headerInfo}>
        <AppLogo />
        {contentToShow}
      </div>
    </div>
  )
}
