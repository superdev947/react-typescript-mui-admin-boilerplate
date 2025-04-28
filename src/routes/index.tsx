import { ROUTES } from '@/constants/routes'
import Layout from '@/layout'
import { createBrowserRouter } from 'react-router-dom'

import Blogs from '@/pages/Blogs'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Users from '@/pages/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />
      }
    ]
  }
])

export default router
