import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import Layout from '@/layout'
import ProtectedRoute from './ProtectedRoute'

// Replace direct imports with lazy imports
const Home = React.lazy(() => import('@/pages/Home'))
const Jobs = React.lazy(() => import('@/pages/Jobs'))
const Login = React.lazy(() => import('@/pages/Login'))

const router = createBrowserRouter([
  {
    element: <Layout />, // Layout is not lazy-loaded for now
    children: [
      {
        element: <ProtectedRoute />, // ProtectedRoute is not lazy-loaded for now
        children: [
          {
            path: ROUTES.HOME,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            )
          },
          {
            path: ROUTES.JOBS,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Jobs />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: ROUTES.LOGIN,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    )
  }
])

export default router
