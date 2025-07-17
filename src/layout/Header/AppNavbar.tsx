import { memo, useCallback, useState } from 'react'

import { MenuRounded as MenuRoundedIcon } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar as MuiToolbar, Stack, styled, tabsClasses, Typography } from '@mui/material'

import SideMenuMobile from '@/layout/Sidebar/Mobile'
import ColorModeIcon from './ColorModeIcon'

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  gap: '12px',
  flexShrink: 0,
  [`& ${tabsClasses.flexContainer}`]: {
    gap: '8px',
    p: '8px',
    pb: 0
  }
})

const AppNavbar = function AppNavbar() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = useCallback(
    (newOpen: boolean) => () => {
      setOpen(newOpen)
    },
    []
  )

  return (
    <AppBar
      position='fixed'
      sx={{
        display: { xs: 'auto', md: 'none' },
        boxShadow: 0,
        bgcolor: 'background.paper',
        backgroundImage: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        top: 'var(--template-frame-height, 0px)'
      }}
    >
      <Toolbar variant='regular'>
        <Stack
          direction='row'
          sx={{
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            gap: 1
          }}
        >
          <Stack direction='row' spacing={1} sx={{ justifyContent: 'center', mr: 'auto' }}>
            <Typography variant='h4' component='h1' sx={{ color: 'text.primary' }}>
              Dashboard
            </Typography>
          </Stack>
          <ColorModeIcon />
          <IconButton size='small' aria-label='menu' onClick={toggleDrawer(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default memo(AppNavbar)
