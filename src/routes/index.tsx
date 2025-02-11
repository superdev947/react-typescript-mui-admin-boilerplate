import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import Layout from '@/layout'

import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Users from '@/pages/Users'
import Blogs from '@/pages/Blogs'

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
