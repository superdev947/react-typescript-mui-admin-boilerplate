import { NavLink } from 'react-router-dom'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded'
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
