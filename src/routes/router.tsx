import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { Loader } from '@/components/ui/loader'
import { privateRoutes, publicRoutes } from '@/routes/routes'
import { useMeQuery } from '@/services/services/auth/auth.service'

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
    errorElement: <Navigate to={'/404'} />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

export function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()
  const isAuth = !isError

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}
