import { RouteObject } from 'react-router-dom'

import { SignUpForm } from '@/components/auth/sign-up-form'
import { CardPage } from '@/pages/card-page/card-page'
import { DecksPage } from '@/pages/decks-page/decks-page'
import { ForgotPass } from '@/pages/forgot-pass/forgot-pass'
import { OneDeckPage } from '@/pages/one-deck-page'
import { PageNotFound } from '@/pages/page-not-found'
import { SignInPage } from '@/pages/sign-in-page'

export const privateRoutes: RouteObject[] = [
  { element: <DecksPage />, path: '/' },
  { element: <div>Приватная страница</div>, path: '/private:id' },
  { element: <OneDeckPage />, path: '/decks/:deckId' },
  { element: <CardPage />, path: '/card/:cardId' },
]

export const publicRoutes: RouteObject[] = [
  {
    element: <ForgotPass />,
    path: '/forgot-pass',
  },
  {
    element: <SignInPage />,
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
