import { memo, useCallback } from 'react'

import { DarkModeRounded as DarkModeIcon, LightModeRounded as LightModeIcon } from '@mui/icons-material'
import { Box, IconButton, useColorScheme } from '@mui/material'

const ColorModeIcon = function ColorModeIcon() {
  const { mode, systemMode, setMode } = useColorScheme()

  const handleMode = useCallback(() => {
    if ((systemMode || mode) === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }, [mode, setMode, systemMode])

  if (!mode) {
    return (
      <Box
        sx={theme => ({
          verticalAlign: 'bottom',
          display: 'inline-flex',
          width: '2.25rem',
          height: '2.25rem',
          borderRadius: theme.shape.borderRadius,
          border: '1px solid',
          borderColor: theme.palette.divider
        })}
      />
    )
  }

  const resolvedMode = (systemMode || mode) as 'light' | 'dark'

  const icon = {
    light: <LightModeIcon />,
    dark: <DarkModeIcon />
  }[resolvedMode]

  return (
    <IconButton onClick={handleMode} size='small'>
      {icon}
    </IconButton>
  )
}

export default memo(ColorModeIcon)
