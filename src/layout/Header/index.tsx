import NavbarBreadcrumbs from '@/components/NavbarBreadcrumbs'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import ColorModeIcon from './ColorModeIcon'

export default function Header() {
  return (
    <Stack
      direction='row'
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction='row' sx={{ gap: 1 }}>
        <IconButton size='small' aria-label='Open notifications'>
          <NotificationsRoundedIcon />
        </IconButton>
        <ColorModeIcon />
      </Stack>
    </Stack>
  )
}
