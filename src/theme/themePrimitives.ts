import { alpha, createTheme, Shadows } from '@mui/material/styles'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true
  }
}
declare module '@mui/material/styles' {
  interface ColorRange {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface PaletteColor extends ColorRange {
    light: string
    main: string
    dark: string
    contrastText: string
  }

  interface Palette {
    baseShadow: string
  }
}

const defaultTheme = createTheme()

export const brand = {
  50: '#e5f2ff',
  100: '#d6ebff',
  200: '#99ccff',
  300: '#4da6ff',
  400: '#027af2',
  500: '#026bd4',
  600: '#1c8cfd',
  700: '#0059b3',
  800: '#002952',
  900: '#00366b'
}

export const gray = {
  50: '#f5f6fa',
  100: '#ebeef4',
  200: '#dadee7',
  300: '#c2c9d6',
  400: '#94a0b8',
  500: '#566481',
  600: '#47536b',
  700: '#333b4d',
  800: '#0b0e14',
  900: '#05070a'
}

export const green = {
  50: '#f6fef6',
  100: '#e4fbe4',
  200: '#c5f7c5',
  300: '#a1e8a1',
  400: '#52bc52',
  500: '#1f7a1f',
  600: '#136c13',
  700: '#0a470a',
  800: '#042f04',
  900: '#021d02'
}

export const orange = {
  50: '#fffbf0',
  100: '#fdf1ce',
  200: '#fce49c',
  300: '#f6ce55',
  400: '#c2940a',
  500: '#aa8109',
  600: '#7a5d06',
  700: '#634b03',
  800: '#503c02',
  900: '#3b2d02'
}

export const red = {
  50: '#fff0f0',
  100: '#fdcece',
  200: '#fc9c9c',
  300: '#f65555',
  400: '#c20a0a',
  500: '#910808',
  600: '#7a0606',
  700: '#590303',
  800: '#3c0202',
  900: '#1e0101'
}

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        light: brand[200],
        main: brand[400],
        dark: brand[700],
        contrastText: brand[50]
      },
      info: {
        light: brand[100],
        main: brand[300],
        dark: brand[600],
        contrastText: gray[50]
      },
      warning: {
        light: orange[300],
        main: orange[400],
        dark: orange[800]
      },
      error: {
        light: red[300],
        main: red[400],
        dark: red[800]
      },
      success: {
        light: green[300],
        main: green[400],
        dark: green[800]
      },
      grey: {
        ...gray
      },
      divider: alpha(gray[300], 0.4),
      background: {
        default: '#fcfcfc',
        paper: '#f5f6fa'
      },
      text: {
        primary: gray[800],
        secondary: gray[600],
        warning: orange[400]
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px'
    }
  },
  dark: {
    palette: {
      primary: {
        contrastText: brand[50],
        light: brand[300],
        main: brand[400],
        dark: brand[700]
      },
      info: {
        contrastText: brand[300],
        light: brand[500],
        main: brand[700],
        dark: brand[900]
      },
      warning: {
        light: orange[400],
        main: orange[500],
        dark: orange[700]
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[700]
      },
      success: {
        light: green[400],
        main: green[500],
        dark: green[700]
      },
      grey: {
        ...gray
      },
      divider: alpha(gray[700], 0.6),
      background: {
        default: gray[900],
        paper: 'hsl(220, 30%, 7%)'
      },
      text: {
        primary: '#ffffff',
        secondary: gray[400]
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3)
      },
      baseShadow: 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
    }
  }
}

export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: defaultTheme.typography.pxToRem(48),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5
  },
  h2: {
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2
  },
  h3: {
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2
  },
  h4: {
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5
  },
  h5: {
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600
  },
  h6: {
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18)
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14)
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400
  }
}

export const shape = {
  borderRadius: 8
}

// @ts-ignore
const defaultShadows: Shadows = ['none', 'var(--template-palette-baseShadow)', ...defaultTheme.shadows.slice(2)]
export const shadows = defaultShadows
