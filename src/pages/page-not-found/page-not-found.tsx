import { useNavigate } from 'react-router-dom'

import NotFound from '@/assets/images/notFound/NotFound'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './page-not-found.module.scss'

export const PageNotFound = () => {
  const navigate = useNavigate()
  const backToHomePage = () => {
    navigate('/')
  }

  return (
    <div className={s.wrapper}>
      <NotFound />
      <Typography className={s.text} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button callback={backToHomePage}>Back to home page</Button>
    </div>
  )
}
