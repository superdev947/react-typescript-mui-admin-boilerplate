import { memo, MouseEvent, useCallback, useState } from 'react'

import { LogoutRounded as LogoutRoundedIcon, MoreVertRounded as MoreVertRoundedIcon } from '@mui/icons-material'

import {
  Divider,
  dividerClasses,
  IconButton,
  listClasses,
  ListItemIcon,
  listItemIconClasses,
  ListItemText,
  Menu,
  MenuItem as MuiMenuItem,
  paperClasses,
  styled
} from '@mui/material'

import { dispatch } from '@/store'
import { logout } from '@/store/reducers/auth'

const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0'
})

const OptionsMenu = function OptionsMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])
  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])
  const handleLogout = useCallback(() => {
    handleClose()
    dispatch(logout())
  }, [handleClose])

  return (
    <>
      <IconButton size='small' aria-label='Open menu' onClick={handleClick} sx={{ borderColor: 'transparent' }}>
        <MoreVertRoundedIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: {
            padding: '4px'
          },
          [`& .${paperClasses.root}`]: {
            padding: 0
          },
          [`& .${dividerClasses.root}`]: {
            margin: '4px -4px'
          }
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Add another account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              ml: 'auto',
              minWidth: 0
            }
          }}
        >
          <ListItemText>Logout</ListItemText>
          <ListItemIcon>
            <LogoutRoundedIcon fontSize='small' />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  )
}

export default memo(OptionsMenu)
