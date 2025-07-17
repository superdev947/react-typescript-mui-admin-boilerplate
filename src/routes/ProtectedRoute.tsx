// ProtectedRoute.tsx
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { useIsLoggedIn } from '@/hooks/useIsLoggedIn'

const ProtectedRoute: React.FC = () => {
  const isLoggedIn = useIsLoggedIn()

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}

export default ProtectedRoute
