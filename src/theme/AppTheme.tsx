import { ReactNode, useMemo } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { colorSchemes, shadows, shape, typography } from './themePrimitives'

interface AppThemeProps {
  children: ReactNode
}

export default function AppTheme(props: AppThemeProps) {
  const { children } = props
  const theme = useMemo(() => {
    return createTheme({
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template'
      },
      colorSchemes,
      typography,
      shadows,
      shape
    })
  }, [])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
