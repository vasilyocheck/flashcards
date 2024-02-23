import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from 'react-router-dom'

import { Route } from '@/common/enums'
import { PrivateRoutes } from '@/common/routes/private-routes'
import { privateRoutes, publicRoutes } from '@/common/routes/router-settings'
import { Header } from '@/components'

const AppLayout = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header callback={() => navigate(Route.SignIn)} />
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
