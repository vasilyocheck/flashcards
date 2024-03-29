import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components/ui/button'
import { DropdownMenuAvatar } from '@/components/ui/dropdownmenu/drop-down-menu-main'
import { AppLogo } from '@/components/ui/header/logo/app-logo'
// import { setUserId } from '@/services/services/app/app-slice'
// import { useMeQuery } from '@/services/services/decks/decks.service'
// import { useAppDispatch } from '@/services/store'

import s from './header.module.scss'

type HeaderProps = {
  buttonVariant?: 'link' | 'primary' | 'secondary' | 'tertiary'
  callback?: () => void
  userAvatar?: string
  userEmail?: string
  userName?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = (props: HeaderProps) => {
  // const dispatch = useAppDispatch()
  // const { data: userId, isLoading } = useMeQuery()
  //
  // useEffect(() => {
  //   if (!isLoading) {
  //     // dispatch(setUserId(userId.id))
  //   }
  // }, [isLoading])

  const { buttonVariant = 'primary', callback, userAvatar, userEmail, userName } = props
  const contentToShow =
    userName && userEmail ? (
      <div className={s.avaWrapper}>
        <span className={s.userName}>{userName}</span>
        <DropdownMenuAvatar img={userAvatar} mail={userEmail} name={userName} />
      </div>
    ) : (
      <Button callback={callback} variant={buttonVariant}>
        Sign in{' '}
      </Button>
    )

  return (
    <header className={s.header}>
      <div className={s.headerInfo}>
        <AppLogo />
        {contentToShow}
      </div>
    </header>
  )
}
