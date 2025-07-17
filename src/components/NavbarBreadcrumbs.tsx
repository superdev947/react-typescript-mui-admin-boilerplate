import { memo } from 'react'

import { NavigateNextRounded as NavigateNextRoundedIcon } from '@mui/icons-material'
import { Breadcrumbs, breadcrumbsClasses, styled, Typography } from '@mui/material'

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center'
  }
}))

const NavbarBreadcrumbs = function NavbarBreadcrumbs() {
  return (
    <StyledBreadcrumbs aria-label='breadcrumb' separator={<NavigateNextRoundedIcon fontSize='small' />}>
      <Typography variant='body1'>Dashboard</Typography>
      <Typography variant='body1' sx={{ color: 'text.primary', fontWeight: 600 }}>
        Home
      </Typography>
    </StyledBreadcrumbs>
  )
}

export default memo(NavbarBreadcrumbs)
