import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import Layout from '@/layout'

import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Users from '@/pages/Users'
import Blogs from '@/pages/Blogs'
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
            path: ROUTES.USERS,
            element: <Users />
          },
          {
            path: ROUTES.BLOGS,
            element: <Blogs />
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
