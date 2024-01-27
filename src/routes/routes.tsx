import { RouteObject } from 'react-router-dom'

import { DecksPage } from '@/pages/decks-page/decks-page'

export const privateRoutes: RouteObject[] = [
  { element: <DecksPage />, path: '/' },
  { element: <div>Приватная страница</div>, path: '/private:id' },
]

export const publicRoutes: RouteObject[] = [{ element: <div>login</div>, path: '/login' }]
