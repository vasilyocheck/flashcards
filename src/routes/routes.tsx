import { RouteObject } from 'react-router-dom'

import { SignInForm } from '@/components/auth/sign-in-form'
import { SignUpForm } from '@/components/auth/sign-up-form'
import { DecksPage } from '@/pages/decks-page/decks-page'
import { PageNotFound } from '@/pages/page-not-found'

export const privateRoutes: RouteObject[] = [
  { element: <DecksPage />, path: '/' },
  { element: <div>Приватная страница</div>, path: '/private:id' },
]

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInForm />,
    path: '/login',
  },
  {
    element: <SignUpForm />,
    path: '/sign-up',
  },
  {
    element: <PageNotFound />,
    path: '/*',
  },
]
