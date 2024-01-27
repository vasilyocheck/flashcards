import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { privateRoutes, publicRoutes } from '@/routes/routes'

const AppLayout = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header callback={() => navigate('/login')} />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <AppLayout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

export function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
