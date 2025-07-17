import { NavLink } from 'react-router-dom'

import { HomeRounded as HomeRoundedIcon, PeopleRounded as PeopleRoundedIcon } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'

import { ROUTES } from '@/constants/routes'

const mainListItems = [
  { link: ROUTES.HOME, text: 'Home', icon: <HomeRoundedIcon /> },
  { link: ROUTES.JOBS, text: 'Jobs', icon: <PeopleRoundedIcon /> }
]

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton component={NavLink} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
