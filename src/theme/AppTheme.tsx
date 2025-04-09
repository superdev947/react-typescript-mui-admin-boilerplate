import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { inputsCustomizations } from './customizations/inputs'
import { colorSchemes, typography, shadows, shape } from './themePrimitives'

interface AppThemeProps {
  children: React.ReactNode
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
      shape,
      components: {
        ...inputsCustomizations
      }
    })
  }, [])

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
