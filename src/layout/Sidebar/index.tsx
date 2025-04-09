import { styled } from '@mui/material/styles'
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

import MenuContent from '@/layout/Sidebar/MenuContent'

const drawerWidth = 240

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box'
  }
})

export default function Sidebar() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          py: 1.5,
          px: 2.5,
          alignItems: 'center'
        }}
      >
        <Box component='img' src='./logo.png' alt='logo' sx={{ width: 35 }} />
        <Typography component='h2' variant='h6' sx={{ ml: 1 }}>
          Admin Panel
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <MenuContent />
      </Box>
    </Drawer>
  )
}
