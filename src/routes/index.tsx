import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import Layout from '@/layout'

import Login from '@/pages/Login'
import Jobs from '@/pages/Jobs'
import Home from '@/pages/Home'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />
          },
          {
            path: ROUTES.JOBS,
            element: <Jobs />
          }
        ]
      }
    ]
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />
  }
])

export default router
