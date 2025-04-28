import DarkModeIcon from '@mui/icons-material/DarkModeRounded'
import LightModeIcon from '@mui/icons-material/LightModeRounded'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useColorScheme } from '@mui/material/styles'

export default function ColorModeIcon() {
  const { mode, systemMode, setMode } = useColorScheme()

  const handleMode = () => {
    if ((systemMode || mode) === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

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
