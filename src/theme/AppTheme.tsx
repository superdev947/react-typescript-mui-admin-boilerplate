import { ThemeProvider, createTheme } from '@mui/material/styles'
import * as React from 'react'

interface AppThemeProps {
  children: React.ReactNode
}

export default function AppTheme(props: AppThemeProps) {
  const { children } = props
  const theme = React.useMemo(() => {
    return createTheme()
  }, [])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
