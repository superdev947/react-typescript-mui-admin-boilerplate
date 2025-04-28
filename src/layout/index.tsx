import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/layout/Header'
import AppNavbar from '@/layout/Header/AppNavbar'
import Sidebar from '@/layout/Sidebar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <AppNavbar />
      {/* Main content */}
      <Box
        component='main'
        sx={theme => ({
          flexGrow: 1,
          backgroundColor: alpha(theme.palette.background.default, 1),
          overflow: 'auto'
        })}
      >
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
            mx: 3,
            pb: 5,
            mt: { xs: 8, md: 0 }
          }}
        >
          <Header />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Stack>
      </Box>
    </Box>
  )
}

export default Layout
